import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'

import DialogTrigger from './Trigger'

type DialogAction = {
  onOpenToggle: () => void
}

type DialogValue = {
  open: boolean
  contentId: string
  triggerRef: RefObject<HTMLButtonElement>
}

const DialogActionContext = createContext<DialogAction | null>(null)
const DialogValueContext = createContext<DialogValue | null>(null)

type DialogProps = {
  children: ReactNode
}

export const useDialogValue = () => {
  const context = useContext(DialogValueContext)

  if (context === null) {
    throw new Error('프로바이더 확인해주세요!')
  }

  return context
}

export const useDialogAction = () => {
  const context = useContext(DialogActionContext)

  if (context === null) {
    throw new Error('프로바이더 확인해주세요!')
  }

  return context
}

const Dialog = ({ children }: DialogProps) => {
  const [_open, setOpen] = useState<DialogValue['open']>(false)

  const triggerRef = useRef<HTMLButtonElement>(null)

  const actions = useMemo<DialogAction>(
    () => ({
      onOpenToggle: () => setOpen((prev) => !prev),
    }),
    []
  )

  const values = useMemo<DialogValue>(
    () => ({
      open: _open,
      contentId: '',
      triggerRef: triggerRef,
    }),
    [_open]
  )

  return (
    <DialogActionContext.Provider value={actions}>
      <DialogValueContext.Provider value={values}>
        {children}
      </DialogValueContext.Provider>
    </DialogActionContext.Provider>
  )
}

Dialog.Trigger = DialogTrigger

export default Dialog
