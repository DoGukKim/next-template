import { ComponentProps, forwardRef } from 'react'

import MenuItems from 'components/Menu/Items'

import { useIsOpen, useTrigger } from './context/consumer'

type DropdownMenuProps = ComponentProps<typeof MenuItems>

const ITEMS_NAME = 'DropdownMenu'

const Menu = forwardRef<HTMLUListElement, DropdownMenuProps>(
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

Menu.displayName = ITEMS_NAME

export default Menu
