/* eslint-disable chakra-ui/props-shorthand */
import { Box, Drawer, Flex, Image, Portal, Text } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import GlowCard from '@/components/GlowCard'

interface PhotographyCardProps extends PropsWithChildren {
  backgroundImageSrc: string
  images: Array<string>
}

const PhotographyCard = ({ children, backgroundImageSrc, images }: PhotographyCardProps) => {
  return (
    <Drawer.Root placement='bottom'>
      <Drawer.Trigger asChild>
        <div>
          <GlowCard>
            <Flex
              pos='relative'
              direction='column'
              flex='1'
              flexShrink='0'
              overflow='hidden'
              w='100%'
              minH='400px'
              bgImage={`url("${backgroundImageSrc}")`}
              bgSize='cover'
              backgroundPosition='center'
              borderRadius='25px'
              cursor='pointer'
              bgColor={backgroundImageSrc ? undefined : 'gray.100'}
            >
              {children}
            </Flex>
          </GlowCard>
        </div>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />

        <Drawer.Positioner
          zIndex={9999}
          padding='3%'
        >
          <Drawer.Content
            w='100%'
            h='96%'
            p='30px'
            backdropFilter='blur(50px)'
            bgColor='#ffffff/50'
            borderRadius='30px'
            overflowY='scroll'
          >
            <Flex
              justify='space-between'
              wrap='wrap'
              gap={4}
              w='100%'
            >
              {images.map((src, index) => (
                <Box
                  key={index}
                  justifyContent='center'
                  display='flex'
                  width={{ base: '100%', sm: 'calc(50% - 8px)' }}
                  h='600px'
                  mb={4}
                >
                  <Image
                    w='auto'
                    h='100%'
                    objectFit='contain'
                    src={src}
                  />
                </Box>
              ))}
            </Flex>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default PhotographyCard
