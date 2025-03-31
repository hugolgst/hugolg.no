import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'

interface ProjectCardProps extends PropsWithChildren {
  title: string
  logoSrc?: string
  backgroundImageSrc?: string
  url?: string
  color?: string
  linearBlurTint?: string
  span: string
}

const ProjectCard = ({
  title,
  logoSrc,
  backgroundImageSrc,
  url,
  color = 'black',
  linearBlurTint = 'transparent',
  span,
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
    borderRadius='25px'
    cursor='pointer'
    bgColor={backgroundImageSrc ? undefined : 'gray.100'}
    onClick={() => url && router.push(url)}
  >
    <Flex
      zIndex={1}
      w='100%'
      h='100%'
      p='40px'
    >
      <Flex
        direction='column'
        gap='5px'
        w={{ base: '100%', md: '40%' }}
        h={{ base: '500px', md: '350px' }}
      >
        <Flex
          direction='column'
          gap='5px'
        >
          <Text
            color='gray.400'
            fontSize='0.8em'
            fontWeight='semibold'
            textTransform='uppercase'
          >
            {span}
          </Text>

          {/* Title + Logo */}
          <Flex
            align='center'
            gap='10px'
          >
            {logoSrc && <Image
              h='40px'
              src={logoSrc}
            />}
            <Heading
              color={color}
              fontSize='2.4em'
            >
              {title}
            </Heading>
          </Flex>
        </Flex>

        {children}
      </Flex>
    </Flex>
  </Flex>
}

export default ProjectCard
