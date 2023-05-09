import { ComponentProps, forwardRef } from 'react'

import Button from 'components/Button'

import {
  useIsOpen,
  useOnClose,
  useOnToggle,
  useTrigger,
} from './context/consumer'
import { useMergeRefs } from 'hooks/useMergeRefs'
import useOutsideClick from 'hooks/useOutsideClick'

type DropdownTriggerProps = ComponentProps<typeof Button>

const TRIGGER_NAME = 'DropdownMenuTrigger'

const Trigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  ({ children, ...dropdownTriggerProps }, forwardedRef) => {
    const { triggerRef, triggerId } = useTrigger()
    const isOpen = useIsOpen()
    const onToggle = useOnToggle()
    const onClose = useOnClose()
    const mergedRef = useMergeRefs(triggerRef, forwardedRef)

    useOutsideClick(triggerRef, onClose)

    return (
      <Button
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={triggerId}
        ref={mergedRef}
        onClick={onToggle}
        {...dropdownTriggerProps}
      >
        {children}
      </Button>
    )
  }
)

Trigger.displayName = TRIGGER_NAME

export default Trigger
