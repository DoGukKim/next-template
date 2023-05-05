import { ComponentProps, forwardRef } from 'react'

import Button from 'components/Button'

import { useDialogValue } from '.'
import useCombineRefs from 'hooks/useCombineRefs'

type DialogTriggerProps = ComponentProps<typeof Button>

const TRIGGER_NAME = 'DialogTrigger'

const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ children, ...triggerProps }, forwardedRef) => {
    const { open, contentId, triggerRef } = useDialogValue()

    const combinedRef = useCombineRefs(triggerRef, forwardedRef)

    return (
      <Button
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={contentId}
        ref={combinedRef}
        {...triggerProps}
      >
        {children}
      </Button>
    )
  }
)

DialogTrigger.displayName = TRIGGER_NAME

export default DialogTrigger
