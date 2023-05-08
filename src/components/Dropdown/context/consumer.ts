import { useContext } from 'react'

import {
  DropdownMenuActionContext,
  DropdownMenuStateContext,
  DropdownMenuStaticContext,
} from './Provider'

export const useOnToggle = () => {
  const context = useContext(DropdownMenuActionContext)

  if (context === null) {
    throw Error('context is Missing')
  }

  return context.onToggle
}

export const useOnClose = () => {
  const context = useContext(DropdownMenuActionContext)

  if (context === null) {
    throw Error('context is Missing')
  }

  return context.onClose
}

export const useIsOpen = () => {
  const context = useContext(DropdownMenuStateContext)

  if (context === null) {
    throw Error('context is Missing')
  }

  return context.isOpen
}

export const useTrigger = () => {
  const context = useContext(DropdownMenuStaticContext)

  if (context === null) {
    throw Error('context is Missing')
  }

  const { triggerId, triggerRef } = context
  return { triggerId, triggerRef }
}
