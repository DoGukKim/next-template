import { ComponentProps, forwardRef } from 'react'

import Button from 'components/Button'

import { useIsOpen, useOnToggle, useTrigger } from './context/consumer'
import { useMergeRefs } from 'hooks/useMergeRefs'

type DropdownMenuTriggerProps = ComponentProps<typeof Button>

const TRIGGER_NAME = 'DropdownMenuTrigger'

const Trigger = forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  ({ children, ...dropdownTriggerProps }, forwardedRef) => {
    const { triggerRef, triggerId } = useTrigger()
    const onToggle = useOnToggle()
    const isOpen = useIsOpen()
    const combinedRef = useMergeRefs(triggerRef, forwardedRef)

    return (
      <Button
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={triggerId}
        ref={combinedRef}
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
