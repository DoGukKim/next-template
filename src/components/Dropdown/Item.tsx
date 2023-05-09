import { ComponentProps, forwardRef } from 'react'

import Menu from 'components/Menu'

type DropdownItemProps = ComponentProps<typeof Menu.Item>

const ITEM_NAME = 'DropdownMenuItem'

const Item = forwardRef<HTMLElement, DropdownItemProps>(
  ({ children, ...dropdownItemProps }, forwardedRef) => {
    return (
      <Menu.Item ref={forwardedRef} {...dropdownItemProps}>
        {children}
      </Menu.Item>
    )
  }
)

Item.displayName = ITEM_NAME

export default Item
