import { ComponentProps, forwardRef } from 'react'

import MenuItem from 'components/Menu/Item'

type DropdownMenuItemProps = ComponentProps<typeof MenuItem>

const ITEM_NAME = 'DropdownMenuItem'

const Item = forwardRef<HTMLLIElement, DropdownMenuItemProps>(
  ({ children, ...dropdownMenuItemProps }, forwardedRef) => {
    return (
      <MenuItem ref={forwardedRef} {...dropdownMenuItemProps}>
        {children}
      </MenuItem>
    )
  }
)

Item.displayName = ITEM_NAME

export default Item
