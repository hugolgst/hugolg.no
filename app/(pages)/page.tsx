'use client'

import { Box, Flex, Heading, Image, Spacer, Text, chakra } from '@chakra-ui/react'
import Link from 'next/link'

import Animate from '@/components/Animate'
import LanguageMap from '@/components/LanguageMap'
import Badge from '@/components/miscellaneous/Badge'
import Particles from '@/components/particles'
import PhotographyCard from '@/components/PhotographyCard'
import ProjectCard from '@/components/ProjectCard'
import { libreBaskerville } from '@/providers'

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
      id='home'
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
        <Animate delay={0.2}>
          <Text
            color='gray.500'
            fontSize='1.6em'
            fontWeight='500'
          >
            Software Engineer based in Tromsø, Norway.
          </Text>
        </Animate>

        <Animate delay={0.4}>
          <Heading
            flexShrink='0'
            fontSize={{ base: '4em', lg: '6em', xl: '7em' }}
            lineHeight='180px'
          >
            Hugo Lageneste
          </Heading>
        </Animate>
      </Flex>
    </Box>

    <Box id='about' />
    <Flex
      direction='column'
      gap='4px'
      w='100vw'
      p='20px 15%'
    >
      <Heading
        fontSize='4em'
        lineHeight='100px'
      >
        About me
      </Heading>

      <Text
        mt='10px'
        fontSize='1.6em'
      >
        Professional Software Engineer since 2020 with strong skills in
        {' '}
        <chakra.span fontWeight='semibold'>Software Architecture</chakra.span>
        ,
        {' '}
        <chakra.span fontWeight='bold'>Clean code</chakra.span>
        {' '}
        and
        {' '}
        <chakra.span fontWeight='bold'>Critical thinking</chakra.span>
        .
      </Text>
      <Text fontSize='1.6em'>
        I enjoy sitting down trying to find ideas that will make a product great
        and robust to then architecture the software around them!
      </Text>

      <Flex
        wrap='wrap'
        direction='row'
        gap='10px'
        mt='10px'
      >
        <Badge>TypeScript</Badge>
        <Badge>Golang</Badge>
        <Badge>Ruby</Badge>
        <Badge>Python</Badge>
        <Badge>Nix</Badge>
        <Badge>Git</Badge>
        <Badge>Docker</Badge>
      </Flex>
    </Flex>

    <Box id='projects' />
    <Flex
      direction='column'
      gap='50px'
      w='100vw'
      p='20px 15%'
    >
      <Animate delay={0}>
        <Heading
          fontSize='4em'
          lineHeight='100px'
        >
          My latest projects
        </Heading>
      </Animate>

      <Animate delay={0.2}>
        <ProjectCard
          span='Dec 2022 — Present'
          title='norlys.live'
          logoSrc='/assets/norlys-logo.svg'
          backgroundImageSrc='/assets/norlys-background.png'
          color='white'
          linearBlurTint='rgba(0,0,0,0.5)'
          url='https://norlys.live'
        >
          <Spacer />

          <Heading
            mb='10px'
            color='white'
            fontSize='1.6em'
          >
            Founded and built the entire software
          </Heading>

          <Text color='gray.300'>
            <chakra.span fontWeight='bold'>Machine Learning model</chakra.span>
            {' '}
            nowcasting the aurora borealis
            and australis in near-realtime.
          </Text>
          <Text color='gray.300'>
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
        </ProjectCard>
      </Animate>

      <Animate delay={0.4}>
        <ProjectCard
          span='Dec 2017 — Jul 2020'
          title='Olivia AI'
          logoSrc='/assets/olivia-logo.svg'
          backgroundImageSrc='/assets/olivia-background.png'
          url='https://github.com/olivia-ai/olivia'
        >
          <Flex
            direction='column'
            h='100%'
          >
            <Spacer />

            <Heading
              mb='10px'
              fontSize='1.6em'
            >
              Wrote scientific paper and implemented it
            </Heading>

            <Text>
              Wrote Machine Learning model backpropagation from scratch with no
              libraries in Golang at 16 years old.
            </Text>

            <Flex gap='10px'>
              <Flex
                w='fit-content'
                mt='20px'
                p='5px 15px'
                color='primary.700'
                fontWeight='semibold'
                borderRadius='full'
                bgColor='primary.500/30'
              >
                3{'\''}700 GitHub stars
              </Flex>

              <Flex
                w='fit-content'
                mt='20px'
                p='5px 15px'
                color='primary.700'
                fontWeight='semibold'
                borderRadius='full'
                bgColor='primary.500/30'
              >
                #1 on GitHub Trending page
              </Flex>
            </Flex>
          </Flex>
        </ProjectCard>
      </Animate>
    </Flex>

    <Box id='languages' />
    <Animate delay={0}>
      <LanguageMap />
    </Animate>

    <Box id='photography' />

    <Flex
      direction='column'
      gap='50px'
      w='100vw'
      p='20px 15%'
    >
      <Animate delay={0}>
        <Heading
          fontSize='4em'
          lineHeight='100px'
        >
          My photographs
        </Heading>
      </Animate>

      <Flex
        wrap='wrap'
        flexShrink='0'
        gap='50px'
        w='100%'
      >
        <Animate
          delay={0.2}
          flexShrink='0'
          w='calc(50% - 25px)'
        >
          <PhotographyCard backgroundImageSrc='/assets/arctic-cover.jpg'>
            <Flex
              align='center'
              justify='center'
              direction='column'
              w='100%'
              pt='70px'
              pointerEvents='none'
            >
              <Heading
                className={libreBaskerville.className}
                color='white'
                fontSize='2.4em'
                letterSpacing='0.4em'
                textTransform='uppercase'
                transform='scale(1.2, 1)'
              >
                The Arctic
              </Heading>
            </Flex>
          </PhotographyCard>
        </Animate>

        <Animate
          delay={0.2}
          flexShrink='0'
          w='calc(50% - 25px)'
        >
          <PhotographyCard backgroundImageSrc='/assets/us-cover.jpg'>
            <Flex
              pos='absolute'
              bottom='40px'
              align='center'
              justify='center'
              direction='column'
              gap='10px'
              w='100%'
              pointerEvents='none'
            >
              <Heading
                className={libreBaskerville.className}
                color='white'
                fontSize='1.8em'
                letterSpacing='0.2em'
                textTransform='uppercase'
                transform='scale(1.2, 1)'
              >
                Along The Colorado
              </Heading>

              <Heading
                className={libreBaskerville.className}
                color='white'
                fontSize='1.2em'
                letterSpacing='0.2em'
                textTransform='uppercase'
                transform='scale(1.2, 1)'
              >
                2024
              </Heading>
            </Flex>
          </PhotographyCard>
        </Animate>

        <Animate
          delay={0.2}
          flexShrink='0'
          w='calc(50% - 25px)'
        >
          <PhotographyCard backgroundImageSrc='/assets/iceland-cover.jpg'>
            <Flex
              pos='absolute'
              top='80px'
              align='center'
              justify='center'
              direction='column'
              gap='10px'
              w='100%'
              pointerEvents='none'
            >
              <Heading
                className={libreBaskerville.className}
                color='white'
                fontSize='2.6em'
                letterSpacing='0.4em'
                textTransform='uppercase'
                transform='scale(1.2, 1)'
              >
                Iceland
              </Heading>

              <Heading
                className={libreBaskerville.className}
                color='white'
                fontSize='1.2em'
                letterSpacing='0.2em'
                textTransform='uppercase'
                transform='scale(1.2, 1)'
              >
                2023
              </Heading>
            </Flex>
          </PhotographyCard>
        </Animate>

        <Animate
          delay={0.2}
          flexShrink='0'
          w='calc(50% - 25px)'
        >
          <PhotographyCard backgroundImageSrc='/assets/tahiti-cover.jpg'>
            <Flex
              pos='absolute'
              top='50%'
              left='50%'
              align='center'
              justify='center'
              direction='column'
              w='100%'
              transform='translate(-50%, -50%)'
              pointerEvents='none'
            >
              <Heading
                className={libreBaskerville.className}
                color='white'
                fontSize='1em'
                letterSpacing='0.4em'
                textTransform='uppercase'
                transform='scale(1.2, 1)'
              >
                French Polynesia
              </Heading>
            </Flex>
          </PhotographyCard>
        </Animate>

        <Animate
          delay={0.2}
          flexShrink='0'
          w='calc(50% - 25px)'
        >
          <PhotographyCard backgroundImageSrc='/assets/hawaii-cover.jpg'>
            <Flex
              pos='absolute'
              top='50px'
              align='center'
              justify='center'
              direction='column'
              w='100%'
              pointerEvents='none'
            >
              <Heading
                className={libreBaskerville.className}
                color='black'
                fontSize='2.5em'
                letterSpacing='0.4em'
                textTransform='uppercase'
                transform='scale(1.2, 1)'
              >
                Hawai'i
              </Heading>
            </Flex>
          </PhotographyCard>
        </Animate>

        <Animate
          delay={0.2}
          flexShrink='0'
          w='calc(50% - 25px)'
        >
          <PhotographyCard backgroundImageSrc='/assets/switzerland-cover.jpg'>
            <Flex
              pos='absolute'
              top='30px'
              align='center'
              justify='center'
              direction='column'
              w='100%'
              pointerEvents='none'
            >
              <Heading
                className={libreBaskerville.className}
                color='white'
                fontSize='1.8em'
                letterSpacing='0.4em'
                textTransform='uppercase'
                transform='scale(1.2, 1)'
              >
                Switzerland
              </Heading>
            </Flex>
          </PhotographyCard>
        </Animate>
      </Flex>

    </Flex>

    <Animate delay={0}>
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
    </Animate>
  </Flex>
}

export default HomePage
