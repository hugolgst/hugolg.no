/* eslint-disable chakra-ui/props-shorthand */
import { Drawer, Flex, Portal, Text } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import GlowCard from '@/components/GlowCard'

interface PhotographyCardProps extends PropsWithChildren {
  backgroundImageSrc: string
}

const PhotographyCard = ({ children, backgroundImageSrc }: PhotographyCardProps) => {
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
        <Drawer.Positioner padding='10px'>
          <Drawer.Content roundedTop='l3'>
            <Drawer.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default PhotographyCard
