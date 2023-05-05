import { CSSProperties, ElementType, forwardRef } from 'react'
import { css } from '@emotion/react'

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from 'shared/types/polymorphic'
import { CombineType } from 'shared/types/combine'
import { LayoutElements } from './type'

import { DEFAULT_ELEMENT } from './constant'

type FlexStyleProps = {
  direction: CSSProperties['flexDirection']
  justify: CSSProperties['justifyContent']
  align: CSSProperties['alignItems']
  wrap: CSSProperties['flexWrap']
  gap: CSSProperties['gap']
}

type FlexProps<E extends ElementType> = CombineType<
  PolymorphicComponentPropsWithRef<E>,
  Partial<FlexStyleProps>
>

const Flex = forwardRef(
  <E extends ElementType>(
    {
      as,
      align,
      children,
      direction,
      gap,
      justify,
      wrap,
      ...props
    }: FlexProps<E | typeof DEFAULT_ELEMENT>,
    forwardedRef: PolymorphicRef<E>
  ) => {
    const Element = as || DEFAULT_ELEMENT

    return (
      <Element
        css={css`
          display: flex;
          flex-direction: ${direction};
          align-items: ${align};
          justify-content: ${justify};
          flex-wrap: ${wrap};
          gap: ${gap};
        `}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </Element>
    )
  }
)

Flex.displayName = 'Flex'

export default Flex as <E extends LayoutElements>(
  props: FlexProps<E> & { ref?: PolymorphicRef<E> }
) => ReturnType<typeof Flex>
