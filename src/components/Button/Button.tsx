import { ComponentPropsWithoutRef, forwardRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <button ref={forwardedRef} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
