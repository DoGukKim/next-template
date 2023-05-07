import { ComponentPropsWithoutRef, forwardRef } from 'react'

type MenuItemProps = ComponentPropsWithoutRef<'li'>

const ITEM_NAME = 'MenuItem'

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ children, ...menuItemProps }, forwardedRef) => {
    return (
      <li role="menuitem" ref={forwardedRef} {...menuItemProps}>
        {children}
      </li>
    )
  }
)

MenuItem.displayName = ITEM_NAME

export default MenuItem
