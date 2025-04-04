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
    gap={{ base: '20px', md: '100px' }}
    w='100vw'
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
        pointerEvents='none'
      >
        <Particles />
      </Box>

      <Flex
        pos='absolute'
        direction='column'
        w='100vw'
        h='100vh'
        p={{ base: '20px', md: '20px 10%' }}
      >
        <Spacer />
        <Animate delay={0.2}>
          <Text
            color='gray.500'
            fontSize={{ base: '1.2em', md: '1.6em' }}
            fontWeight='500'
          >
            Software Engineer based in Tromsø, Norway.
          </Text>
        </Animate>

        <Animate delay={0.4}>
          <Heading
            flexShrink='0'
            fontSize={{ base: '4em', lg: '6em', xl: '7em' }}
            lineHeight={{ base: '70px', md: '180px' }}
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
      p={{ base: '20px', md: '20px 10%' }}
    >
      <Heading
        fontSize={{ base: '3em', md: '4em' }}
        lineHeight='100px'
      >
        About me
      </Heading>

      <Text
        mt='10px'
        fontSize={{ base: '1.2em', md: '1.6em' }}
      >
        I’m a Professional Software Engineer since 2020, passionate about building well-architected,
        maintainable systems. My strengths lie in
        {' '}
        <chakra.span fontWeight='semibold'>Software Architecture</chakra.span>
        ,
        {' '}
        <chakra.span fontWeight='bold'>Clean Code principles</chakra.span>
        {' '}
        and
        {' '}
        <chakra.span fontWeight='bold'>Critical Thinking</chakra.span>
        .
      </Text>

      <Text
        mt='20px'
        fontSize={{ base: '1.2em', md: '1.6em' }}
      >
        I genuinely enjoy the process of sitting down, exploring ideas that could make a product
        truly great, and then designing the software in a way that’s both robust and elegant.
        For me, the intersection of thoughtful design and solid engineering is where the magic
        happens.
      </Text>

      <Image src='/assets/experience.svg' />

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
      p={{ base: '20px', md: '20px 10%' }}
    >
      <Animate delay={0}>
        <Heading
          fontSize={{ base: '3em', md: '4em' }}
          lineHeight={{ base: '60px', md: '100px' }}
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

          <Text
            color='gray.300'
            fontSize={{ base: '1em', md: '1.2em' }}
          >
            <chakra.span fontWeight='bold'>Machine Learning model</chakra.span>
            {' '}
            nowcasting the aurora borealis
            and australis in near-realtime.
          </Text>
          <Text
            color='gray.300'
            fontSize={{ base: '1em', md: '1.2em' }}
          >
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

            <Text fontSize={{ base: '1em', md: '1.2em' }}>
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
      p={{ base: '20px', md: '20px 10%' }}
    >
      <Animate delay={0}>
        <Heading
          fontSize={{ base: '3em', md: '4em' }}
          lineHeight={{ base: '60px', md: '100px' }}
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
          w={{ base: 'calc(100vw - 40px)', md: 'calc(50% - 25px)' }}
        >
          <PhotographyCard
            backgroundImageSrc='/assets/arctic-cover.jpg'
            images={[
              '/assets/arctic/1.jpg',
              '/assets/arctic/2.jpg',
              '/assets/arctic/3.jpg',
              '/assets/arctic/4.jpg',
              '/assets/arctic/5.jpg',
              '/assets/arctic/6.jpg',
              '/assets/arctic/7.jpg',
              '/assets/arctic/8.jpg',
              '/assets/arctic/9.jpg',
              '/assets/arctic/10.jpg',
              '/assets/arctic/11.jpg',
              '/assets/arctic/12.jpg',
              '/assets/arctic/13.jpg',
              '/assets/arctic/14.jpg',
              '/assets/arctic/15.jpg',
              '/assets/arctic/16.jpg',
              '/assets/arctic/17.jpg',
              '/assets/arctic/18.jpg',
              '/assets/arctic/19.jpg',
              '/assets/arctic/20.jpg',
              '/assets/arctic/21.jpg',
              '/assets/arctic/23.jpg',
              '/assets/arctic/24.jpg'
            ]}
          >
            <Flex
              pos='absolute'
              top='70px'
              align='center'
              justify='center'
              direction='column'
              w='100%'
              pointerEvents='none'
            >
              <Heading
                className={libreBaskerville.className}
                color='white'
                fontSize='2.4em'
                lineHeight='50px'
                letterSpacing='0.4em'
                textAlign='center'
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
          w={{ base: 'calc(100vw - 40px)', md: 'calc(50% - 25px)' }}
        >
          <PhotographyCard
            backgroundImageSrc='/assets/us-cover.jpg'
            images={new Array(18).fill(0).map((_, index) => `/assets/us/${index + 1}.jpg`)}
          >
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
                lineHeight='50px'
                letterSpacing='0.2em'
                textAlign='center'
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
          w={{ base: 'calc(100vw - 40px)', md: 'calc(50% - 25px)' }}
        >
          <PhotographyCard
            backgroundImageSrc='/assets/iceland-cover.jpg'
            images={new Array(18).fill(0).map((_, index) => `/assets/iceland/${index + 1}.jpg`)}
          >
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
                fontSize={{ base:'2em', md: '2.6em' }}
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
          w={{ base: 'calc(100vw - 40px)', md: 'calc(50% - 25px)' }}
        >
          <PhotographyCard
            backgroundImageSrc='/assets/tahiti-cover.jpg'
            images={new Array(13).fill(0).map((_, index) => `/assets/tahiti/${index + 1}.jpg`)}
          >
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
                fontSize={{ base: '0.8em', md: '1em' }}
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
          w={{ base: 'calc(100vw - 40px)', md: 'calc(50% - 25px)' }}
        >
          <PhotographyCard
            backgroundImageSrc='/assets/hawaii-cover.jpg'
            images={new Array(12).fill(0).map((_, index) => `/assets/hawaii/${index + 1}.jpg`)}
          >
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
                fontSize={{ base: '2em', md: '2.5em' }}
                letterSpacing='0.4em'
                textTransform='uppercase'
                transform='scale(1.2, 1)'
              >
                Hawai{'\''}i
              </Heading>
            </Flex>
          </PhotographyCard>
        </Animate>

        <Animate
          delay={0.2}
          flexShrink='0'
          w={{ base: 'calc(100vw - 40px)', md: 'calc(50% - 25px)' }}
        >
          <PhotographyCard
            backgroundImageSrc='/assets/switzerland-cover.jpg'
            images={new Array(14).fill(0).map((_, index) => `/assets/switzerland/${index + 1}.jpg`)}
          >
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
                fontSize={{ base: '1.2em', md: '1.8em' }}
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

    <Box id='contact' />
    <Animate delay={0}>
      <Flex
        align='center'
        direction={{ base: 'column', md: 'row' }}
        w='100vw'
        p={{ base: '20px', md: '20px 10%' }}
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
