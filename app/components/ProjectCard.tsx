import { Flex, Heading, Image } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'

import LinearBlur from '@/components/miscellaneous/LinearBlur'

interface ProjectCardProps extends PropsWithChildren {
  title: string
  logoSrc?: string
  backgroundImageSrc?: string
  url?: string
  color?: string
  linearBlurTint?: string
}

const ProjectCard = ({
  title,
  logoSrc,
  backgroundImageSrc,
  url,
  color = 'black',
  linearBlurTint = 'transparent',
  children
}: ProjectCardProps) => {
  const router = useRouter()

  // eslint-disable-next-line chakra-ui/props-shorthand
  return <Flex
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
    border='1px solid'
    borderColor='border.blurredFlex'
    borderRadius='25px'
    cursor='pointer'
    onClick={() => url && router.push(url)}
  >
    <LinearBlur
      side='left'
      tint={linearBlurTint}
      width='50%'
      height='100%'
    />

    <Flex
      zIndex={1}
      w='100%'
      h='100%'
      p='40px'
    >
      <Flex
        direction='column'
        gap='10px'
        w='50%'
        h='100%'
      >
        {/* Title + Logo */}
        <Flex
          align='center'
          gap='10px'
        >
          {logoSrc && <Image
            h='50px'
            borderRadius='10px'
            src={logoSrc}
          />}
          <Heading
            color={color}
            fontSize='2.4em'
          >
            {title}
          </Heading>
        </Flex>

        {children}
      </Flex>
    </Flex>
  </Flex>
}

export default ProjectCard
