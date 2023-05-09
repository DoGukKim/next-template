import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Flex } from 'components/Layout'

type MenuItemProps = ComponentPropsWithoutRef<typeof Flex>

const ITEM_NAME = 'MenuItem'

const MenuItem = forwardRef<HTMLElement, MenuItemProps>(
  ({ children, ...menuItemProps }, forwardedRef) => {
    return (
      <Flex ref={forwardedRef} {...menuItemProps}>
        {children}
      </Flex>
    )
  }
)

MenuItem.displayName = ITEM_NAME

export default MenuItem
