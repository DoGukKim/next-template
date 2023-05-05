import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'

import DialogTrigger from './Trigger'
import DialogOverlay from './Overlay'

type DialogAction = {
  onOpenToggle: () => void
}

type DialogValue = {
  contentId: string
  modal: boolean
  open: boolean
  triggerRef: RefObject<HTMLButtonElement>
}

const DialogActionContext = createContext<DialogAction | null>(null)
const DialogValueContext = createContext<DialogValue | null>(null)

type DialogProps = {
  children: ReactNode
  modal?: boolean
}

export const useDialogValue = () => {
  const context = useContext(DialogValueContext)

  if (context === null) {
    throw new Error('context is null')
  }

  return context
}

export const useDialogAction = () => {
  const context = useContext(DialogActionContext)

  if (context === null) {
    throw new Error('context is null')
  }

  return context
}

const Dialog = ({ children, modal = true }: DialogProps) => {
  const [_open, setOpen] = useState<DialogValue['open']>(false)

  const triggerRef = useRef<HTMLButtonElement>(null)
  const triggerId = useId()

  const actions = useMemo<DialogAction>(
    () => ({
      onOpenToggle: () => setOpen((prev) => !prev),
    }),
    []
  )

  const values = useMemo<DialogValue>(
    () => ({
      contentId: `dialog-${triggerId}`,
      open: _open,
      modal: modal,
      triggerRef: triggerRef,
    }),
    [_open, modal, triggerId]
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
Dialog.Overlay = DialogOverlay

export default Dialog
