import { ComponentPropsWithoutRef, forwardRef } from 'react'

import Portal from 'components/Portal'

import { useDialogAction, useDialogValue } from '.'
import { DIALOG_PORTAL_ROOT_ID } from 'shared/constants/portal'

type DialogOverlayProps = ComponentPropsWithoutRef<'div'>

const OVERLAY_NAME = 'DialogOverlay'

const DialogOverlay = forwardRef<HTMLDivElement, DialogOverlayProps>(
  ({ ...overlayProps }, forwardedRef) => {
    const { open, modal } = useDialogValue()
    const { onOpenToggle } = useDialogAction()

    return modal ? (
      <Portal id={DIALOG_PORTAL_ROOT_ID}>
        {open && (
          <div
            ref={forwardedRef}
            onClick={() => onOpenToggle()}
            {...overlayProps}
          />
        )}
      </Portal>
    ) : null
  }
)

DialogOverlay.displayName = OVERLAY_NAME

export default DialogOverlay
