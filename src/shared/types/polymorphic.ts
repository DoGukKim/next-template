import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
} from 'react'
import { CombineType } from './combine'

export type PolymorphicRef<E extends ElementType> =
  ComponentPropsWithRef<E>['ref']

export type PolymorphicComponentPropsWithRef<E extends ElementType> =
  CombineType<ComponentPropsWithoutRef<E>, { as?: E }>
