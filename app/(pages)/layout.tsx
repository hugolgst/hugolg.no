'use client'

import { Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import LinearBlur from '@/components/miscellaneous/LinearBlur'
import NavigationBar from '@/components/NavigationBar'

const Layout = ({ children }: PropsWithChildren) => (
  <Flex pos='relative'>
    {children}

    <LinearBlur height='300px' />
    <NavigationBar />
  </Flex>
)

export default Layout
