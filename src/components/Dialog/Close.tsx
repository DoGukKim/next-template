import { ComponentProps, forwardRef } from 'react'

import Button from 'components/Button'
import { useOnClose } from './context/Consumer'

type DialogCloseProps = ComponentProps<typeof Button>

const CLOSE_NAME = 'DialogClose'

const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ children, ...closeProps }, forwardedRef) => {
    const onClose = useOnClose()

    return (
      <Button ref={forwardedRef} onClick={onClose} {...closeProps}>
        {children}
      </Button>
    )
  }
)

DialogClose.displayName = CLOSE_NAME

export default DialogClose
