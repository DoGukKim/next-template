import { ElementType, forwardRef } from 'react'

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from 'shared/types/polymorphic'

type TypographyElements = 'p' | 'span' | 'h1' | 'h2' | 'h3'
type TypographyProps<E extends ElementType> =
  PolymorphicComponentPropsWithRef<E>

const DEFAULT_ELEMENT = 'p'
const TYPOGRAPHY_NAME = 'Typography'

const Typography = forwardRef(
  <E extends ElementType>(
    {
      as,
      children,
      ...typographyProps
    }: TypographyProps<E | typeof DEFAULT_ELEMENT>,
    forwardedRef: PolymorphicRef<E>
  ) => {
    const Element = as || DEFAULT_ELEMENT
    return (
      <Element ref={forwardedRef} {...typographyProps}>
        {children}
      </Element>
    )
  }
)

Typography.displayName = TYPOGRAPHY_NAME

export default Typography as <E extends TypographyElements>(
  props: TypographyProps<E> & { ref?: PolymorphicRef<E> }
) => ReturnType<typeof Typography>
