'use client'

import { Box } from '@chakra-ui/react'

import Particles from '@/components/particles'

const HomePage = () => {
  return <>
    <Box
      pos='absolute'
      top='0'
      left='0'
      w='100vw'
      h='100vh'
    >
      <Particles />
    </Box>
  </>
}

export default HomePage
