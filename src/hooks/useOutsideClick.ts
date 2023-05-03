import { RefObject, useEffect } from 'react'

type Props = {
  ref: RefObject<HTMLElement>
  callback: () => void
}

const useOutsideClick = ({ ref, callback }: Props) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target instanceof Element &&
        !ref.current.contains(event.target)
      ) {
        callback()
      }
    }

    document.body.addEventListener('click', handleClick)
    return () => document.body.removeEventListener('click', handleClick)
  }, [ref, callback])
}

export default useOutsideClick
