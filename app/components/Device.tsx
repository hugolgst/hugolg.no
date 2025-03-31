import { PropsWithChildren } from 'react'

import useIsMobile from '@/hooks/useIsMobile'

interface Device extends PropsWithChildren {
  desktop?: boolean
  mobile?: boolean
}

const Device = ({ desktop, mobile, children }: Device) => {
  const isMobile = useIsMobile()

  if ((desktop && !isMobile) || (mobile && isMobile)) return children
  return null
}

export default Device
