import { CSSProperties, ElementType, forwardRef } from 'react'
import { css } from '@emotion/react'

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from 'shared/types/polymorphic'
import { CombineType } from 'shared/types/combine'
import { LayoutElements } from './type'

import { DEFAULT_ELEMENT } from './constant'

type GridStyleProps = {
  templateRows: CSSProperties['gridTemplateRows']
  templateColumns: CSSProperties['gridTemplateColumns']
  autoRows: CSSProperties['gridAutoRows']
  autoColumns: CSSProperties['gridAutoColumns']
  autoFlow: CSSProperties['gridAutoFlow']
  gap: CSSProperties['gap']
}

type GridProps<E extends ElementType> = CombineType<
  PolymorphicComponentPropsWithRef<E>,
  Partial<GridStyleProps>
>

const Grid = forwardRef(
  <E extends ElementType>(
    {
      as,
      autoRows,
      autoColumns,
      autoFlow,
      children,
      gap,
      templateRows,
      templateColumns,
      ...props
    }: GridProps<E | typeof DEFAULT_ELEMENT>,
    forwardedRef: PolymorphicRef<E>
  ) => {
    const Element = as || DEFAULT_ELEMENT

    return (
      <Element
        css={css`
          display: grid;
          grid-template-rows: ${templateRows};
          grid-template-columns: ${templateColumns};
          grid-auto-rows: ${autoRows};
          grid-auto-columns: ${autoColumns};
          grid-auto-flow: ${autoFlow};
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

Grid.displayName = 'Grid'

export default Grid as <E extends LayoutElements>(
  props: GridProps<E> & { ref?: PolymorphicRef<E> }
) => ReturnType<typeof Grid>
