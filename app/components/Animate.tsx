import { Box, BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

const MotionBox = motion(Box)

interface AnimateProps extends PropsWithChildren, Omit<BoxProps, 'transition'> {
  delay: number
}

const Animate = ({
  delay,
  children,
  ...props
}: AnimateProps) => {
  // @ts-expect-error tekjt
  return <MotionBox
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
    transition={{ delay: delay, duration: 0.3 }}
    variants={{
      visible: { y: 0, opacity: 1 },
      hidden: { y: 30, opacity: 0 }
    }}
    {...props}
  >
    {children}
  </MotionBox>
}

export default Animate
