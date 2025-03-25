'use client'

import { Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

// import LinearBlur from '@/components/miscellaneous/LinearBlur'
import NavigationBar from '@/components/NavigationBar'

const Layout = ({ children }: PropsWithChildren) => (
  <Flex pos='relative'>
    {children}

    {/* <LinearBlur */}
    {/*   height='350px' */}
    {/*   strength={128} */}
    {/*   steps={16} */}
    {/*   tint='rgba(255, 255, 255, 0.8)' */}
    {/* /> */}
    <NavigationBar />
  </Flex>
)

export default Layout
