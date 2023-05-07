import { ComponentPropsWithoutRef, forwardRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'>

const BUTTON_NAME = 'Button'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...buttonProps }, forwardedRef) => {
    return (
      <button ref={forwardedRef} {...buttonProps}>
        {children}
      </button>
    )
  }
)

Button.displayName = BUTTON_NAME

export default Button
