import { Box,
  Flex,
  Text,
  BoxProps } from '@chakra-ui/react'
import React, { useRef, useState, useEffect, ReactNode, forwardRef, PropsWithChildren } from 'react'

// Define types for the component props
interface ParallaxLayerProps {
  children: ReactNode;
  isReverse?: boolean;
}

interface AppleTVCardProps extends BoxProps, PropsWithChildren {

  /**
   * Whether to show the shadow effect
   * @default true
   */
  withShadow?: boolean;

  /**
   * Whether to disable rounded corners
   * @default false
   */
  notRounded?: boolean;

  /**
   * Optional React elements to use as parallax layers
   */
  parallaxLayers?: Array<ReactNode>;
}

/**
 * Parallax Layer component for creating depth effects
 */
const ParallaxLayer = forwardRef<HTMLDivElement, ParallaxLayerProps>((props, ref) => {
  const {
    children,
    isReverse = false,
    ...rest
  } = props

  return (
    // eslint-disable-next-line chakra-ui/props-shorthand
    <Flex
      className='parallax-layer'
      ref={ref}
      pos='absolute'
      zIndex={2}
      top='0'
      right='0'
      bottom='0'
      left='0'
      align='center'
      justify='center'
      backgroundPosition='center center'
      bgRepeat='no-repeat'
      pointerEvents='none'
      transition='transform 50ms ease-in-out'
      data-reverse={isReverse ? 'true' : 'false'}
      transformStyle='preserve-3d'
      {...rest}
    >
      {children}
    </Flex>
  )
})

/**
 * GlowCard - A React component that wraps content with an Apple TV card glow effect
 */
const GlowCard = forwardRef<HTMLDivElement, AppleTVCardProps>((props, ref) => {
  const {
    children,
    title,
    withShadow = true,
    notRounded = false,
    parallaxLayers = [],
    ...rest
  } = props

  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [ isHovered, setIsHovered ] = useState(false)
  const [ showReflection, setShowReflection ] = useState(false)
  const [ showShadow, setShowShadow ] = useState(false)
  const [ fontSize, setFontSize ] = useState<string>('1rem')

  // Set initial font size and adjust on resize
  useEffect(() => {
    const updateFontSize = () => {
      if (cardRef.current) {
        const size = Math.max(cardRef.current.clientWidth, cardRef.current.clientHeight)
        setFontSize(`${size / 3.5}px`)
      }
    }

    updateFontSize()
    window.addEventListener('resize', updateFontSize)
    return () => window.removeEventListener('resize', updateFontSize)
  }, [])

  // Event handlers
  const handleFocus = () => {
    if (cardRef.current && containerRef.current) {
      const size = Math.max(cardRef.current.clientWidth, cardRef.current.clientHeight)
      containerRef.current.style.perspective = `${size * 2.5}px`
    }
  }

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsHovered(true)
    contentRef.current?.focus()

    // Always show effects
    setShowReflection(true)
    if (withShadow) setShowShadow(true)

    handleMove(e)
  }

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()

    if (!isHovered || !cardRef.current) return

    // Get coordinates
    let posX: number, posY: number
    const width = cardRef.current.clientWidth
    const height = cardRef.current.clientHeight

    if (e.type === 'touchmove' || e.type === 'touchstart') {
      const touchEvent = e as React.TouchEvent
      const touch = touchEvent.touches[0]
      const rect = cardRef.current.getBoundingClientRect()
      posX = touch.pageX - rect.left
      posY = touch.pageY - rect.top

      // Check if we're still over the card
      const elementAtPoint = document.elementFromPoint(touch.pageX, touch.pageY)
      if (!elementAtPoint?.closest('.apple-tv-card')) {
        handleEnd()
        return
      }
    } else {
      const mouseEvent = e as React.MouseEvent
      posX = mouseEvent.nativeEvent.offsetX
      posY = mouseEvent.nativeEvent.offsetY
    }

    // Calculate the effects
    const halfWidth = width / 2
    const halfHeight = height / 2
    const angleY = (halfWidth - posX) / width * 10
    const angleX = (halfHeight - posY) * -1 / height * 10
    const translateX = (halfWidth - posX) * -1 / width * 10
    const translateY = (halfHeight - posY) * -1 / height * 10

    // Update the card transform
    if (cardRef.current) {
      cardRef.current.style.transform =
        `translateZ(4rem) rotateY(${angleY}deg) rotateX(${angleX}deg) translateX(${translateX}px) translateY(${translateY}px)`
    }

    // Update parallax layers
    if (cardRef.current) {
      const layers = cardRef.current.querySelectorAll<HTMLDivElement>('.parallax-layer')
      layers.forEach((layer, index) => {
        const layerNumber = index + 1
        const isReverse = layer.dataset.reverse === 'true'
        const modifier = isReverse ? 0.2 : -0.65

        layer.style.transform =
          `scale(1.075) translateX(${translateX * modifier * layerNumber}px) translateY(${translateY * modifier * layerNumber}px)`
      })
    }

    // Update reflection
    if (cardRef.current) {
      const reflectionElement = cardRef.current.querySelector<HTMLDivElement>('.reflection')
      if (reflectionElement) {
        const size = Math.max(width, height)

        reflectionElement.style.width = `${size * 1.5}px`
        reflectionElement.style.height = `${size * 1.5}px`
        reflectionElement.style.margin = `${size * -0.75}px 0 0 ${size * -0.75}px`
        reflectionElement.style.transform =
          `translateY(${posY - halfHeight}px) translateX(${(width * 0.1) + (posX * 0.8)}px)`
      }
    }

    // Update shadow
    if (cardRef.current) {
      const shadowElement = cardRef.current.querySelector<HTMLDivElement>('.shadow')
      if (shadowElement && posY < height / 3) {
        const heightThird = height / 3
        const opacity = 1 / heightThird * (heightThird - posY)

        shadowElement.style.opacity = opacity.toString()
        shadowElement.style.boxShadow =
          `inset 0 ${opacity * -1}em 0.4em -0.5em rgba(0,0,0,${Math.min(opacity, 0.35)})`
      } else if (shadowElement) {
        shadowElement.style.opacity = ''
        shadowElement.style.boxShadow = ''
      }
    }
  }

  const handleEnd = () => {
    setIsHovered(false)
    contentRef.current?.blur()

    if (cardRef.current) {
      // Reset all transforms
      cardRef.current.style.transform = ''

      const layers = cardRef.current.querySelectorAll<HTMLDivElement>('.parallax-layer')
      layers.forEach(layer => {
        layer.style.transform = ''
      })

      const reflection = cardRef.current.querySelector<HTMLDivElement>('.reflection')
      if (reflection) reflection.style.transform = ''

      const shadow = cardRef.current.querySelector<HTMLDivElement>('.shadow')
      if (shadow) {
        shadow.style.opacity = ''
        shadow.style.boxShadow = ''
      }
    }
  }

  return (
    <Box
      ref={containerRef}
      pos='relative'
      w='100%'
      pb={title ? '3.5rem' : '0'}
    >
      <Box
        className='apple-tv-card'
        ref={ref}
        pos='relative'
        zIndex={0}
        overflow='hidden'
        w='100%'
        fontSize={fontSize}
        borderRadius={notRounded ? '0' : 'min(max(2vmax, 2rem), 3rem)'}
        shadow={isHovered ? '0 1.5rem 2rem 0.25rem rgba(0, 0, 0, 0.5)' : '0 0.25rem 0.25rem rgba(0, 0, 0, 0.2)'}
        transform={isHovered ? 'translateZ(4rem)' : ''}
        transformOrigin='50%'
        transition='transform 50ms ease-in-out'
        onMouseEnter={handleStart}
        onMouseLeave={handleEnd}
        onMouseMove={handleMove}
        onTouchCancel={handleEnd}
        onTouchEnd={handleEnd}
        onTouchMove={handleMove}
        onTouchStart={handleStart}
        transformStyle='preserve-3d'
        {...rest}
      >
        {/* Shadow effect */}
        {showShadow && (
          <Box
            className='shadow'
            pos='absolute'
            zIndex={3}
            top='0'
            right='0'
            bottom='0'
            left='0'
            bg='rgba(0, 0, 0, 0.2)'
            opacity='0'
            pointerEvents='none'
          />
        )}

        {/* Reflection effect */}
        {showReflection && (
          <Box
            className='reflection'
            pos='absolute'
            zIndex={4}
            top='0'
            left='0'
            bgImage='radial-gradient(rgba(255, 255, 255, 0.7), transparent 70%)'
            transform='translateY(-100%)'
            pointerEvents='none'
          />
        )}

        {/* Main content */}
        <Box
          className='content'
          ref={contentRef}
          sx={{
            '& *': {
              pointerEvents: 'none'
            }
          }}
          pos='relative'
          zIndex={1}
          display='block'
          w='100%'
          pb='58%'
          bgImage='linear-gradient(to bottom, #555, #000)'
          bgPosition='center center'
          border='none'
          outline='none'
          onBlur={handleEnd}
          onFocus={handleFocus}
          tabIndex={0}
        >
          {children}
        </Box>

        {/* Parallax layers */}
        {parallaxLayers.map((layer, index) => (
          <ParallaxLayer
            key={index}
            isReverse={layer && typeof layer === 'object' && 'props' in layer && layer.props?.isReverse}
          >
            {layer}
          </ParallaxLayer>
        ))}
      </Box>
    </Box>
  )
})

export default GlowCard

// Set display names for components
ParallaxLayer.displayName = 'ParallaxLayer'
GlowCard.displayName = 'GlowCard'
