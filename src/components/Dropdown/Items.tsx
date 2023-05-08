import { ComponentProps, forwardRef } from 'react'

import MenuItems from 'components/Menu/Items'

import { useIsOpen, useTrigger } from './context/consumer'

type DropdownMenuItemsProps = ComponentProps<typeof MenuItems>

const ITEMS_NAME = 'DropdownItems'

const Items = forwardRef<HTMLUListElement, DropdownMenuItemsProps>(
  ({ children, ...dropdownMenuItemsProps }, forwardedRef) => {
    const { triggerId } = useTrigger()
    const isOpen = useIsOpen()

    return (
      <>
        {isOpen && (
          <MenuItems
            aria-labelledby={triggerId}
            ref={forwardedRef}
            {...dropdownMenuItemsProps}
          >
            {children}
          </MenuItems>
        )}
      </>
    )
  }
)

Items.displayName = ITEMS_NAME

export default Items
