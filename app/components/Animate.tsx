import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

const Animate = ({ delay, children }: PropsWithChildren<{ delay: number }>) => {
  return <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
    transition={{ delay: delay, duration: 0.3 }}
    variants={{
      visible: { y: 0, opacity: 1 },
      hidden: { y: 30, opacity: 0 }
    }}
  >
    {children}
  </motion.div>
}

export default Animate
