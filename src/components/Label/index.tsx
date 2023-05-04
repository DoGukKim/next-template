import { ComponentPropsWithoutRef, forwardRef } from 'react'

type LabelProps = ComponentPropsWithoutRef<'label'>

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <label ref={forwardedRef} {...props}>
        {children}
      </label>
    )
  }
)

Label.displayName = 'Label'

export default Label
