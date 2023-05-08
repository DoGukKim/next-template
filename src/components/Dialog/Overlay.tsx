import { ComponentPropsWithoutRef, forwardRef } from 'react'

import Portal from 'components/Portal'

import { useIsOpen, useOnToggle } from './context/consumer'
import { DIALOG_PORTAL_ROOT_ID } from 'shared/constants/portal'

type DialogOverlayProps = ComponentPropsWithoutRef<'div'>

const OVERLAY_NAME = 'DialogOverlay'

const DialogOverlay = forwardRef<HTMLDivElement, DialogOverlayProps>(
  ({ ...overlayProps }, forwardedRef) => {
    const isOpen = useIsOpen()
    const onToggle = useOnToggle()

    return (
      <Portal id={DIALOG_PORTAL_ROOT_ID}>
        {isOpen && (
          <div
            ref={forwardedRef}
            onClick={() => onToggle()}
            {...overlayProps}
          />
        )}
      </Portal>
    )
  }
)

DialogOverlay.displayName = OVERLAY_NAME

export default DialogOverlay
