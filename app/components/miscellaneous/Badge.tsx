import { Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

interface BadgeProps extends PropsWithChildren {
  color?: string
}

const Badge = ({ color = 'primary', children }: BadgeProps) => (
  <Flex
    w='fit-content'
    p='5px 15px'
    color={`${color}.700`}
    fontWeight='semibold'
    borderRadius='full'
    bgColor={`${color}.500/30`}
  >
    {children}
  </Flex>
)

export default Badge
