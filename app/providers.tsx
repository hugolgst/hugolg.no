'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { Libre_Baskerville } from 'next/font/google'

export const libreBaskerville = Libre_Baskerville({
  subsets: [ 'latin' ],
  weight: '400',
  display: 'swap'
})

import system from '@/theme'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <>
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  </>
}

export default Providers
