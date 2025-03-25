'use client'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import Particles from '@/components/particles'
import ProjectCard from '@/components/ProjectCard'

const HomePage = () => {
  return <Flex
    direction='column'
    gap='100px'
  >
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
        left='15%'
        direction='column'
        w='100%'
      >
        <Text
          color='gray.500'
          fontSize='1.6em'
          fontWeight='500'
        >
          Software Engineer based in Tromsø, Norway.
        </Text>

        <Heading
          flexShrink='0'
          fontSize='8em'
          lineHeight='180px'
        >
          Hugo Lageneste
        </Heading>
      </Flex>
    </Box>

    <Flex
      direction='column'
      p='20px 15%'
    >
      <Heading
        fontSize='4em'
        lineHeight='100px'
      >
        My latest work
      </Heading>

      <ProjectCard title='norlys.live'>
        blablab
      </ProjectCard>
    </Flex>
  </Flex>
}

export default HomePage
