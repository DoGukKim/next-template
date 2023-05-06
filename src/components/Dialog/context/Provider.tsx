import {
  createContext,
  useCallback,
  useRef,
  useId,
  useMemo,
  useState,

  // Type
  RefObject,
  ReactNode,
} from 'react'

type DialogState = {
  isOpen: boolean
}

type DialogStatic = {
  triggerId: string
  triggerRef: RefObject<HTMLButtonElement>
}

type DialogAction = {
  onToggle: () => void
  onClose: () => void
}

type DialogProviderProps = {
  children: ReactNode
}

export const DialogActionContext = createContext<DialogAction | null>(null)
export const DialogStaticContext = createContext<DialogStatic | null>(null)
export const DialogStateContext = createContext<DialogState | null>(null)

const DialogProvider = ({ children }: DialogProviderProps) => {
  const [isOpen, setIsOpen] = useState<DialogState['isOpen']>(false)

  const onToggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const onClose = useCallback(() => setIsOpen(false), [])

  const actions = useMemo<DialogAction>(
    () => ({
      onToggle,
      onClose,
    }),
    [onToggle, onClose]
  )

  const states = useMemo<DialogState>(
    () => ({
      isOpen,
    }),
    [isOpen]
  )

  const triggerRef = useRef<HTMLButtonElement>(null)
  const triggerId = `dialog-${useId()}`

  const statics = useMemo<DialogStatic>(
    () => ({
      triggerId,
      triggerRef,
    }),
    [triggerId]
  )

  return (
    <DialogActionContext.Provider value={actions}>
      <DialogStaticContext.Provider value={statics}>
        <DialogStateContext.Provider value={states}>
          {children}
        </DialogStateContext.Provider>
      </DialogStaticContext.Provider>
    </DialogActionContext.Provider>
  )
}

export default DialogProvider
