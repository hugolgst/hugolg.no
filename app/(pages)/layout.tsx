'use client'

import { Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import NavigationBar from '@/components/NavigationBar'

const Layout = ({ children }: PropsWithChildren) => (
  <Flex>
    <NavigationBar />

    {children}
  </Flex>
)

export default Layout
