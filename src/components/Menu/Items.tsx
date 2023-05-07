import { ComponentProps, forwardRef } from 'react'

import { Flex } from 'components/Layout'

type MenuItemsProps = ComponentProps<typeof Flex>

const ITEMS_NAME = 'MenuItems'

const MenuItems = forwardRef<HTMLUListElement, MenuItemsProps>(
  ({ children, ...menuContentProps }, forwardedRef) => {
    return (
      <Flex
        as="ul"
        aria-orientation="vertical"
        direction="column"
        role="menu"
        ref={forwardedRef}
        {...menuContentProps}
      >
        {children}
      </Flex>
    )
  }
)

MenuItems.displayName = ITEMS_NAME

export default MenuItems
