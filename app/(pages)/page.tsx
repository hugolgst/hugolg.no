'use client'

import { Box, Flex, Heading, Image, Spacer, Text, chakra } from '@chakra-ui/react'
import Link from 'next/link'

import Particles from '@/components/particles'
import ProjectCard from '@/components/ProjectCard'

const HomePage = () => {
  return <Flex
    direction='column'
    gap='100px'
    w='100vh'
  >
    <Box
      pos='relative'
      w='100%'
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
          fontSize={{ base: '4em', lg: '6em', xl: '7em' }}
          lineHeight='180px'
        >
          Hugo Lageneste
        </Heading>
      </Flex>
    </Box>

    <Flex
      direction='column'
      gap='50px'
      w='100vw'
      p='20px 15%'
    >
      <Heading
        fontSize='4em'
        lineHeight='100px'
      >
        My latest work
      </Heading>

      <ProjectCard
        span='Dec 2022 — Present'
        title='norlys.live'
        logoSrc='/assets/norlys-logo.svg'
        backgroundImageSrc='/assets/norlys-background.png'
        color='white'
        linearBlurTint='rgba(0,0,0,0.5)'
      >
        <Flex
          direction='column'
          h='100%'
          color='gray.300'
        >
          <Spacer />

          <Heading
            mb='10px'
            color='white'
            fontSize='1.6em'
          >
            Founded and built the entire software
          </Heading>

          <Text>
            <chakra.span fontWeight='bold'>Machine Learning model</chakra.span>
            {' '}
            nowcasting the aurora borealis
            and australis in near-realtime.
          </Text>
          <Text>
            Features various data figures used by aurora chasers and scientists across the globe.
          </Text>

          <Flex
            w='fit-content'
            mt='20px'
            p='5px 15px'
            color='primary.500'
            fontWeight='semibold'
            borderRadius='full'
            bgColor='primary.400/30'
          >
            15{'\''}000 unique monthly users
          </Flex>
        </Flex>
      </ProjectCard>
    </Flex>

    <Flex
      align='center'
      w='100vw'
      p='50px 15%'
    >
      <Image
        h='100px'
        src='/assets/signature.svg'
      />

      <Spacer />

      <Link href='mailto:hugo.lageneste@pm.me'>
        <Heading
          fontSize='1.8em'
          textDecoration='underline'
        >
          hugo.lageneste@pm.me
        </Heading>
      </Link>
    </Flex>
  </Flex>
}

export default HomePage
