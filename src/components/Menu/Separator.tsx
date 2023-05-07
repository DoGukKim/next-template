import { ComponentPropsWithoutRef, forwardRef } from 'react'

type MenuSeparatorProps = ComponentPropsWithoutRef<'div'>

const SEPARATOR_NAME = 'MenuSeparator'

const MenuSeparator = forwardRef<HTMLDivElement, MenuSeparatorProps>(
  ({ ...menuSeparatorProps }, forwardedRef) => {
    return (
      <div
        aria-orientation="horizontal"
        role="separator"
        ref={forwardedRef}
        {...menuSeparatorProps}
      />
    )
  }
)

MenuSeparator.displayName = SEPARATOR_NAME

export default MenuSeparator
