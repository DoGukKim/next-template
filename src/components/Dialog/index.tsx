import { ReactNode } from 'react'

import DialogProvider from './context/Provider'
import DialogClose from './Close'
import DialogOverlay from './Overlay'
import DialogTrigger from './Trigger'
import DialogContent from './Content'

type DialogProps = {
  children: ReactNode
}

const Dialog = ({ children }: DialogProps) => {
  return <DialogProvider>{children}</DialogProvider>
}

Dialog.Close = DialogClose
Dialog.Content = DialogContent
Dialog.Overlay = DialogOverlay
Dialog.Trigger = DialogTrigger

export default Dialog
