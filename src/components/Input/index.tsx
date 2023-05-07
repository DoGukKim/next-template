import { ComponentPropsWithoutRef, forwardRef } from 'react'

type InputProps = ComponentPropsWithoutRef<'input'>

const INPUT_NAME = 'Input'

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...inputProps }: InputProps, forwardedRef) => {
    return <input ref={forwardedRef} {...inputProps} />
  }
)

Input.displayName = INPUT_NAME

export default Input
