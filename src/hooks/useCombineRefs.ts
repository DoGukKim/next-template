import { ForwardedRef } from 'react'
import { MutableRefObject, useCallback } from 'react'

const useCombineRefs = <T extends HTMLElement>(
  ...refs: (MutableRefObject<T> | ForwardedRef<T>)[]
) => {
  const combinedRef = useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (typeof ref === 'function') {
          ref(element)
        } else if (ref !== null) {
          ref.current = element
        }
      })
    },
    [refs]
  )

  return combinedRef
}

export default useCombineRefs
