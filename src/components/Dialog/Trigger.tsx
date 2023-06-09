import { ComponentProps, forwardRef } from 'react'

import Button from 'components/Button'

import { useIsOpen, useOnToggle, useTrigger } from './context/consumer'
import { useMergeRefs } from 'hooks/useMergeRefs'

type DialogTriggerProps = ComponentProps<typeof Button>

const TRIGGER_NAME = 'DialogTrigger'

const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ children, ...triggerProps }, forwardedRef) => {
    const { triggerRef, triggerId } = useTrigger()
    const onToggle = useOnToggle()
    const isOpen = useIsOpen()

    const mergedRef = useMergeRefs(triggerRef, forwardedRef)

    return (
      <Button
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={triggerId}
        ref={mergedRef}
        onClick={onToggle}
        {...triggerProps}
      >
        {children}
      </Button>
    )
  }
)

DialogTrigger.displayName = TRIGGER_NAME

export default DialogTrigger
