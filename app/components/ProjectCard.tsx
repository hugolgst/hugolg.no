import { Flex, Heading } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

interface ProjectCardProps extends PropsWithChildren {
  title: string
}

const ProjectCard = ({ title, children }: ProjectCardProps) => {
  return <Flex
    direction='column'
    p='50px'
    border='1px solid'
    borderColor='border.blurredFlex'
    borderRadius='25px'
    backdropFilter='blur(20px)'
  >
    <Heading>{title}</Heading>

    {children}
  </Flex>
}

export default ProjectCard
