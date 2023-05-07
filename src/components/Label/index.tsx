import { ComponentPropsWithoutRef, forwardRef } from 'react'

type LabelProps = ComponentPropsWithoutRef<'label'>

const LABEL_NAME = 'Label'

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, ...labelProps }, forwardedRef) => {
    return (
      <label ref={forwardedRef} {...labelProps}>
        {children}
      </label>
    )
  }
)

Label.displayName = LABEL_NAME

export default Label
