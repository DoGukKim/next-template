import { ReactElement } from 'react'

import {
  useIsOpen,
  useOnClose,
  useOnToggle,
  useTrigger,
} from './context/consumer'
import useOutsideClick from 'hooks/useOutsideClick'
import { DropdownMenuAction, DropdownMenuState } from './context/Provider'

type Args = Pick<DropdownMenuAction, 'onClose' | 'onToggle'> &
  Pick<DropdownMenuState, 'isOpen'>

type DropdownTriggerProps = {
  children: (arg: Args) => ReactElement
}

const TRIGGER_NAME = 'DropdownTrigger'

const Trigger = ({ children }: DropdownTriggerProps) => {
  const { triggerRef, triggerId } = useTrigger()
  const isOpen = useIsOpen()
  const onToggle = useOnToggle()
  const onClose = useOnClose()

  useOutsideClick(triggerRef, onClose)

  return (
    <div
      aria-expanded={isOpen}
      aria-controls={triggerId}
      aria-label="trigger-wrapper"
      ref={triggerRef}
    >
      {children({ isOpen, onToggle, onClose })}
    </div>
  )
}

Trigger.displayName = TRIGGER_NAME

export default Trigger
