'use client'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import Particles from '@/components/particles'

const HomePage = () => {
  return <Flex>
    <Box
      pos='relative'
      w='100vh'
      h='100vh'
    >
      <Box
        pos='absolute'
        top='0'
        left='0'
        w='100vw'
        h='100vh'
      >
        <Particles />
      </Box>

      <Flex
        pos='absolute'
        bottom='30px'
        left='10%'
        direction='column'
        w='100%'
      >
        <Text
          color='gray.500'
          fontSize='2em'
          fontWeight='500'
        >
          Software Engineer based in Tromsø, Norway.
        </Text>

        <Heading
          flexShrink='0'
          fontSize='10em'
          lineHeight='200px'
        >
          Hugo Lageneste
        </Heading>
      </Flex>
    </Box>
  </Flex>
}

export default HomePage
