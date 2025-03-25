'use client'

import { Box, Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import LinearBlur from '@/components/miscellaneous/LinearBlur'
import NavigationBar from '@/components/NavigationBar'

const Layout = ({ children }: PropsWithChildren) => (
  <Flex pos='relative'>
    {children}

    <Box
      pos='fixed'
      top='0'
      w='100vw'
    >
      <LinearBlur height='250px' />
    </Box>
    <NavigationBar />
  </Flex>
)

export default Layout
