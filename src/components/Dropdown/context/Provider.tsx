import {
  createContext,
  ReactNode,
  RefObject,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'

type DropdownMenuState = {
  isOpen: boolean
}

type DropdownMenuStatic = {
  triggerId: string
  triggerRef: RefObject<HTMLButtonElement>
}

type DropdownMenuAction = {
  onToggle: () => void
  onClose: () => void
}

type DropdownMenuProviderProps = {
  children: ReactNode
}

export const DropdownMenuActionContext =
  createContext<DropdownMenuAction | null>(null)
export const DropdownMenuStaticContext =
  createContext<DropdownMenuStatic | null>(null)
export const DropdownMenuStateContext = createContext<DropdownMenuState | null>(
  null
)

const Provider = ({ children }: DropdownMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState<DropdownMenuState['isOpen']>(false)

  const onToggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const onClose = useCallback(() => setIsOpen(false), [])

  const actions = useMemo<DropdownMenuAction>(
    () => ({
      onToggle,
      onClose,
    }),
    [onClose, onToggle]
  )

  const triggerRef = useRef<HTMLButtonElement>(null)
  const triggerId = `dropdown-${useId()}`

  const statics = useMemo<DropdownMenuStatic>(
    () => ({
      triggerId,
      triggerRef,
    }),
    [triggerId]
  )

  const states = useMemo<DropdownMenuState>(
    () => ({
      isOpen,
    }),
    [isOpen]
  )

  return (
    <DropdownMenuActionContext.Provider value={actions}>
      <DropdownMenuStaticContext.Provider value={statics}>
        <DropdownMenuStateContext.Provider value={states}>
          {children}
        </DropdownMenuStateContext.Provider>
      </DropdownMenuStaticContext.Provider>
    </DropdownMenuActionContext.Provider>
  )
}

export default Provider
