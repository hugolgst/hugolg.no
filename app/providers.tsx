'use client'

import { ChakraProvider } from '@chakra-ui/react'

import system from '@/theme'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider value={system}>
    {children}
  </ChakraProvider>
}

export default Providers
