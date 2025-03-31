'use client'

import { Box, Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import Animate from '@/components/Animate'
import Device from '@/components/Device'
import LinearBlur from '@/components/miscellaneous/LinearBlur'
import NavigationBar from '@/components/NavigationBar'

const Layout = ({ children }: PropsWithChildren) => (
  <Flex
    pos='relative'
    overflowX='hidden'
  >
    {children}

    <Box
      pos='fixed'
      zIndex={9000}
      top='0'
      w='100vw'
    >
      <LinearBlur
        height='200px'
        width='100%'
      />
    </Box>

    <Device desktop>
      <Animate delay={0.1}>
        <NavigationBar />
      </Animate>
    </Device>
  </Flex>
)

export default Layout
