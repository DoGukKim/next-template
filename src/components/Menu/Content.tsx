import { ComponentProps, forwardRef } from 'react'

import { Flex } from 'components/Layout'

type MenuContentProps = ComponentProps<typeof Flex>

const CONTENT_NAME = 'MenuContent'

const MenuContent = forwardRef<HTMLElement, MenuContentProps>(
  ({ children, ...menuContentProps }, forwardedRef) => {
    return (
      <Flex ref={forwardedRef} {...menuContentProps}>
        {children}
      </Flex>
    )
  }
)

MenuContent.displayName = CONTENT_NAME

export default MenuContent
