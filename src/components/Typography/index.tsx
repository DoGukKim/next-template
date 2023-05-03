import { ElementType, forwardRef } from 'react'

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from 'utils/types/polymorphic'

const DEFAULT_ELEMENT = 'p'

type TypographyElements = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'label'

type TypographyProps<E extends ElementType> =
  PolymorphicComponentPropsWithRef<E>

const Typography = forwardRef(
  <E extends ElementType>(
    { as, children, ...props }: TypographyProps<E | typeof DEFAULT_ELEMENT>,
    forwardedRef: PolymorphicRef<E>
  ) => {
    const Element = as || DEFAULT_ELEMENT
    return (
      <Element ref={forwardedRef} {...props}>
        {children}
      </Element>
    )
  }
)

Typography.displayName = 'Typography'

export default Typography as <E extends TypographyElements>(
  props: TypographyProps<E> & { ref?: PolymorphicRef<E> }
) => ReturnType<typeof Typography>
