import { useContext } from 'react'

import {
  DialogActionContext,
  DialogStateContext,
  DialogStaticContext,
} from './Provider'

export const useOnToggle = () => {
  const context = useContext(DialogActionContext)

  if (context === null) {
    throw Error('context is Missing')
  }

  return context.onToggle
}

export const useOnClose = () => {
  const context = useContext(DialogActionContext)

  if (context === null) {
    throw Error('context is Missing')
  }

  return context.onClose
}

export const useIsOpen = () => {
  const context = useContext(DialogStateContext)

  if (context === null) {
    throw Error('context is Missing')
  }

  return context.isOpen
}

export const useTrigger = () => {
  const context = useContext(DialogStaticContext)

  if (context === null) {
    throw Error('context is Missing')
  }

  return context
}
