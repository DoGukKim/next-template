/**
 * @description
 * 두 제네릭 타입을 결합하고, 충돌이 발생할 경우 두 번째 제네릭 속성 타입을 우선시합니다.
 */
export type CombineType<Type, OverrideType> = OverrideType &
  Omit<Type, keyof OverrideType>
