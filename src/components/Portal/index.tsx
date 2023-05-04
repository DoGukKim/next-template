import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: ReactNode
  id?: Element['id']
}

const Portal = ({ children, id }: PortalProps) => {
  const ref = useRef<HTMLElement | null>(null)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
    const portalRoot = id ? document.getElementById(id) : document.body
    ref.current = portalRoot
  }, [id])

  if (ref.current && mounted) {
    return createPortal(children, ref.current)
  }

  return null
}

export default Portal
