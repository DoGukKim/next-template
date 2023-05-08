import { ForwardedRef, MutableRefObject, useCallback } from 'react'

type PossibleRef<T> = MutableRefObject<T> | ForwardedRef<T>

const setRef = <T>(ref: PossibleRef<T>, node: T) => {
  if (typeof ref === 'function') {
    ref(node)
  } else if (ref !== null && ref !== undefined) {
    ref.current = node
  }
}

export const useMergeRefs = <T>(...refs: PossibleRef<T>[]) => {
  const result = useCallback(
    (node: T) => refs.forEach((ref) => setRef(ref, node)),
    [refs]
  )

  return result
}
