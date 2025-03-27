import { Flex, Text } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import GlowCard from '@/components/GlowCard'

interface PhotographyCardProps extends PropsWithChildren {
  backgroundImageSrc: string
}

const PhotographyCard = ({ children, backgroundImageSrc }: PhotographyCardProps) => {
  return <GlowCard>
    {/* eslint-disable-next-line chakra-ui/props-shorthand */}
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
}

export default PhotographyCard
