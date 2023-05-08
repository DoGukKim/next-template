import { ComponentProps, forwardRef } from 'react'

import MenuItems from 'components/Menu/Items'
import Portal from 'components/Portal'

import { useIsOpen, useTrigger } from './context/consumer'

import { DROPDOWN_PORTAL_ROOT_ID } from 'shared/constants/portal'

type DropdownMenuProps = ComponentProps<typeof MenuItems>

const ITEMS_NAME = 'DropdownItems'

const Items = forwardRef<HTMLUListElement, DropdownMenuProps>(
  ({ children }, forwardedRef) => {
    const isOpen = useIsOpen()
    const { triggerId } = useTrigger()

    return (
      <Portal id={DROPDOWN_PORTAL_ROOT_ID}>
        {isOpen && (
          <MenuItems ref={forwardedRef} aria-labelledby={triggerId}>
            {children}
          </MenuItems>
        )}
      </Portal>
    )
  }
)

Items.displayName = ITEMS_NAME

export default Items
