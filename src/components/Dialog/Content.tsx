import { ComponentPropsWithoutRef, forwardRef } from 'react'

import Portal from 'components/Portal'

import { DIALOG_PORTAL_ROOT_ID } from 'shared/constants/portal'
import { useContent, useIsOpen } from './context/consumer'

const CONTEXT_NAME = 'DialogContent'

type DialogContentProps = ComponentPropsWithoutRef<'div'>

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, ...contentProps }, forwardedRef) => {
    const isOpen = useIsOpen()
    const { contentId } = useContent()

    return (
      <Portal id={DIALOG_PORTAL_ROOT_ID}>
        {isOpen && (
          <div
            aria-describedby={contentId}
            ref={forwardedRef}
            role="dialog"
            {...contentProps}
          >
            {children}
          </div>
        )}
      </Portal>
    )
  }
)

DialogContent.displayName = CONTEXT_NAME

export default DialogContent
