import { ComponentProps, forwardRef } from 'react'

import Button from 'components/Button'

import { useDialogAction, useDialogValue } from '.'
import useCombineRefs from 'hooks/useCombineRefs'

type DialogTriggerProps = ComponentProps<typeof Button>

const TRIGGER_NAME = 'DialogTrigger'

const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ children, ...triggerProps }, forwardedRef) => {
    const { open, contentId, triggerRef } = useDialogValue()
    const { onOpenToggle } = useDialogAction()

    const combinedRef = useCombineRefs(triggerRef, forwardedRef)

    return (
      <Button
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={contentId}
        ref={combinedRef}
        onClick={() => onOpenToggle()}
        {...triggerProps}
      >
        {children}
      </Button>
    )
  }
)

DialogTrigger.displayName = TRIGGER_NAME

export default DialogTrigger
