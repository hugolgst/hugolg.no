import { Box, BoxProps } from '@chakra-ui/react'
import React, { useRef, useState, PropsWithChildren } from 'react'

interface GlowCardProps extends BoxProps, PropsWithChildren {
  withShadow?: boolean
  notRounded?: boolean
}

interface ParallaxContentProps extends BoxProps, PropsWithChildren {
  reverse?: boolean
}

export const ParallaxContent = ({
  reverse,
  children,
  ...rest
}: ParallaxContentProps) => {
  return (
    // eslint-disable-next-line chakra-ui/props-shorthand
    <Box
      className={`parallax-content ${reverse ? 'reverse' : ''}`}
      pos='absolute'
      zIndex={2}
      top='0'
      right='0'
      bottom='0'
      left='0'
      alignItems='center'
      justifyContent='center'
      display='flex'
      backgroundPosition='center'
      bgRepeat='no-repeat'
      pointerEvents='none'
      transition='transform 50ms ease-in-out'
      transformStyle='preserve-3d'
      {...rest}
    >
      {children}
    </Box>
  )
}

export const GlowCard = ({
  children,
  withShadow = false,
  notRounded = false,
  ...rest
}: GlowCardProps) => {
  const [ isHovered, setIsHovered ] = useState(false)
  const [ hasReflection, setHasReflection ] = useState(false)
  const [ hasShadow, setHasShadow ] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const reflectionRef = useRef<HTMLDivElement>(null)
  const shadowRef = useRef<HTMLDivElement>(null)

  const handleFocus = () => {
    if (cardRef.current && containerRef.current) {
      const width = cardRef.current.clientWidth
      const height = cardRef.current.clientHeight
      const perspective = Math.max(width, height)

      containerRef.current.style.perspective = `${perspective * 2.5}px`
    }
  }

  const handleBlur = () => {
    cleanup()
  }

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (contentRef.current) {
      contentRef.current.focus()
    }
    setIsHovered(true)

    if (e.type === 'touchstart') {
      handleMove(e as React.TouchEvent)
    } else {
      handleMove(e as React.MouseEvent)
    }
  }

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()

    if (!isHovered || !cardRef.current || !containerRef.current) return

    if (withShadow && !hasShadow) {
      setHasShadow(true)
    }

    if (!hasReflection) {
      setHasReflection(true)
    }

    let posX: number
    let posY: number

    if ('touches' in e) {
      const touch = e.touches[0]
      const rect = cardRef.current.getBoundingClientRect()

      posX = touch.pageX - rect.left
      posY = touch.pageY - rect.top

      const elementFromPoint = document.elementFromPoint(touch.pageX, touch.pageY)

      if (!elementFromPoint || cardRef.current !== elementFromPoint.closest('.glow-card')) {
        handleEnd()
        return
      }
    } else {
      posX = e.nativeEvent.offsetX
      posY = e.nativeEvent.offsetY
    }

    const width = cardRef.current.clientWidth
    const height = cardRef.current.clientHeight
    const angleY = (width / 2 - posX) / width * 10
    const angleX = (height / 2 - posY) * -1 / height * 10
    const translateX = ((width / 2 - posX)) * -1 / width * 10
    const translateY = ((height / 2 - posY)) * -1 / height * 10

    const perspective = Math.max(width, height)

    containerRef.current.style.perspective = `${perspective * 2.5}px`
    cardRef.current.style.transform = `translateZ(4rem) rotateY(${angleY}deg) rotateX(${angleX}deg) translateX(${translateX}px) translateY(${translateY}px)`

    const parallaxElements = cardRef.current.querySelectorAll('.parallax-content')
    parallaxElements.forEach((parallaxContent, layer) => {
      layer++
      const modifier = !(parallaxContent as HTMLElement).classList.contains('reverse') ? -.65 : .2;
      (parallaxContent as HTMLElement).style.transform = `scale(1.075) translateX(${translateX * modifier * layer}px) translateY(${translateY * modifier * layer}px)`
    })

    if (reflectionRef.current) {
      reflectionRef.current.style.width = `${perspective * 1.5}px`
      reflectionRef.current.style.height = `${perspective * 1.5}px`
      reflectionRef.current.style.margin = `${perspective * -.75}px 0 0 ${perspective * -.75}px`
      reflectionRef.current.style.transform = `translateY(${posY - (height / 2)}px) translateX(${(width * .1) + (posX * .8)}px)`
    }

    if (shadowRef.current) {
      if (posY < height / 3) {
        const opacity = 1 / (height / 3) * ((height / 3) - posY)
        shadowRef.current.style.opacity = opacity.toString()
        shadowRef.current.style.boxShadow = `inset 0 ${opacity * -1}em .4em -.5em rgba(0,0,0,${Math.min(opacity, .35)})`
      } else {
        shadowRef.current.style.opacity = ''
        shadowRef.current.style.boxShadow = ''
      }
    }
  }

  const handleEnd = () => {
    if (contentRef.current) {
      contentRef.current.blur()
    }

    cleanup()
  }

  const cleanup = () => {
    setIsHovered(false)

    if (cardRef.current) {
      cardRef.current.style.transform = ''

      const parallaxElements = cardRef.current.querySelectorAll('.parallax-content')
      parallaxElements.forEach((parallaxContent) => {
        (parallaxContent as HTMLElement).style.transform = ''
      })
    }

    if (reflectionRef.current) {
      reflectionRef.current.style.transform = ''
    }

    if (shadowRef.current) {
      shadowRef.current.style.boxShadow = ''
      shadowRef.current.style.opacity = ''
    }
  }

  return (
    <Box
      className='glow-card-container'
      ref={containerRef}
      pos='relative'
      w='100%'
    >
      <Box
        className={`glow-card ${isHovered ? 'hover' : ''}`}
        ref={cardRef}
        pos='relative'
        zIndex={0}
        overflow='hidden'
        w='100%'
        h='100%'
        borderRadius={notRounded ? '0' : 'min(max(2vmax, 2rem), 3rem)'}
        shadow={isHovered ? '0 1.5rem 2rem .25rem #0005' : '0 .25rem .25rem #0002'}
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
        {hasShadow && withShadow && (
          <Box
            className='shadow'
            ref={shadowRef}
            pos='absolute'
            zIndex={3}
            top='0'
            right='0'
            bottom='0'
            left='0'
            bg='#0002'
            opacity='0'
            pointerEvents='none'
          />
        )}

        {hasReflection && (
          <Box
            className='reflection'
            ref={reflectionRef}
            pos='absolute'
            zIndex={4}
            top='0'
            left='0'
            bgImage='radial-gradient(#fff7, transparent 70%)'
            transform='translateY(-100%)'
            pointerEvents='none'
          />
        )}

        {/* eslint-disable-next-line chakra-ui/props-shorthand */}
        <Box
          className='content'
          ref={contentRef}
          pos='relative'
          zIndex={1}
          display='block'
          w='100%'
          h='100%'
          backgroundPosition='center center'
          border='none'
          outline='none'
          bgColor='white'
          onBlur={handleBlur}
          onFocus={handleFocus}
          tabIndex={0}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default GlowCard
