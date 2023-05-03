import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
} from 'react'

import { Combine } from './util'

export type PolymorphicRef<E extends ElementType> =
  ComponentPropsWithRef<E>['ref']

export type PolymorphicComponentPropsWithRef<E extends ElementType> = Combine<
  ComponentPropsWithoutRef<E>,
  { as?: E }
>
