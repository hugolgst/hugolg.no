import { Flex, Heading, Text } from '@chakra-ui/react'

import GlowCard from '@/components/GlowCard'

interface PhotographyCardProps {
  title: string
  description?: string
  backgroundImageSrc: string
}

const PhotographyCard = ({ title, description, backgroundImageSrc }: PhotographyCardProps) => {
  return <GlowCard title={title}>
    {/* eslint-disable-next-line chakra-ui/props-shorthand */}
    <Flex
      pos='relative'
      direction='column'
      flex='1'
      flexShrink='0'
      overflow='hidden'
      w='50%'
      minH='400px'
      bgImage={`url("${backgroundImageSrc}")`}
      bgSize='cover'
      backgroundPosition='center'
      borderRadius='25px'
      cursor='pointer'
      bgColor={backgroundImageSrc ? undefined : 'gray.100'}
    >
      <Flex
        justify='center'
        direction='column'
        w='100%'
      >
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </Flex>
    </Flex>
  </GlowCard>
}

export default PhotographyCard
