import { CSSProperties, ElementType, forwardRef } from 'react'
import { css, cx } from '@emotion/css'

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from 'utils/types/polymorphic'
import { CombineType } from 'utils/types/combine'
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
      className,
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
        className={cx(
          css`
            display: grid;
            grid-template-rows: ${templateRows};
            grid-template-columns: ${templateColumns};
            grid-auto-rows: ${autoRows};
            grid-auto-columns: ${autoColumns};
            grid-auto-flow: ${autoFlow};
            gap: ${gap};
          `,
          className
        )}
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
