import { ComponentPropsWithoutRef, forwardRef } from 'react'

type InputProps = ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }: InputProps, forwardedRef) => {
    return <input ref={forwardedRef} {...props} />
  }
)

Input.displayName = 'Input'

export default Input
