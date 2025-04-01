import { Box, chakra } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

// Define a type for our navigation items
interface NavigationItem {
  id: string;
  label: string;
}

// Store navigation items in a single place
const NAVIGATION_ITEMS: Array<NavigationItem> = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About me' },
  { id: 'projects', label: 'Projects' },
  { id: 'languages', label: 'Languages' },
  { id: 'photography', label: 'Photographs' },
  { id: 'contact', label: 'Contact' }
]

// Fixed item width in pixels
const ITEM_WIDTH = '140px'

// Generate dynamic styles based on navigation items count
const generateActiveStyles = () => {
  const styles: Record<string, unknown> = {}
  const itemWidth = 100 / NAVIGATION_ITEMS.length

  // Generate data-active selectors dynamically
  NAVIGATION_ITEMS.forEach((_, index) => {
    styles[`&[data-active="${index}"]::after`] = {
      left: `${itemWidth * index}%`
    }
  })

  // Generate hover selectors dynamically
  const hoverStyles: Record<string, unknown> = {}
  NAVIGATION_ITEMS.forEach((_, index) => {
    hoverStyles[`&:has(li:nth-of-type(${index + 1}):hover)::after`] = {
      left: `${itemWidth * index}%`
    }
  })

  styles['@supports (anchor-name: --anchor)'] = hoverStyles

  return styles
}

const NavigationList = chakra('ul', {
  base: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    borderRadius: 'full',
    overflow: 'hidden', // Ensure the background stays within rounded container

    // Add magnetic indicator with CSS
    _after: {
      content: '""',
      position: 'absolute',
      height: '100%',
      width: `${100 / NAVIGATION_ITEMS.length}%`,
      bg: 'primary.400',
      opacity: 0.3,
      zIndex: 0,
      transition: 'all 0.3s ease',
      borderRadius: 'full',

      // Default state (first item)
      left: '0%'
    },

    // Include dynamically generated styles
    ...generateActiveStyles()
  }
})

const NavigationBar = () => {
  const [ activeSection, setActiveSection ] = useState<string>(NAVIGATION_ITEMS[0].id)

  // Use IntersectionObserver to detect which section is in view
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0.1
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    NAVIGATION_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      NAVIGATION_ITEMS.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  // Get the active index for data-active attribute
  const activeIndex = NAVIGATION_ITEMS.findIndex(item => item.id === activeSection)

  return <Box
    pos='fixed'
    zIndex={9999}
    top='20px'
    left='50%'
    overflow='hidden'
    bg='black'
    borderRadius='full'
    transform='translateX(-50%)'
  >
    <NavigationList data-active={activeIndex}>
      {NAVIGATION_ITEMS.map((item) => (
        <chakra.li
          key={item.id}
          flex='none'
          width={ITEM_WIDTH}
          textAlign='center'
          pos='relative'
          zIndex={1}
        >
          <chakra.a
            href={`#${item.id}`}
            display='block'
            color={activeSection === item.id ? 'primary.400' : 'white'}
            fontWeight='semibold'
            textDecoration='none'
            transition='color 0.3s ease'
            fontSize='1.2em'
            p='8px'
            _hover={{ textDecoration: 'none' }}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              const element = document.getElementById(item.id)
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                setActiveSection(item.id)
              }
            }}
          >
            {item.label}
          </chakra.a>
        </chakra.li>
      ))}
    </NavigationList>
  </Box>
}

export default NavigationBar
