import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: ReactNode
  containerId: Element['id']
}

const Portal = ({ children, containerId }: PortalProps) => {
  const container =
    typeof window !== undefined && document.getElementById(containerId)

  if (!container) return null

  return <>{createPortal(children, container)}</>
}

export default Portal
