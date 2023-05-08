import { ReactNode } from 'react'

import Menu from 'components/Menu'
import Trigger from './Trigger'
import Items from './Items'

import Provider from './context/Provider'

type DropdownMenuProps = {
  children: ReactNode
}

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  return (
    <Provider>
      <Menu>{children}</Menu>
    </Provider>
  )
}

DropdownMenu.Trigger = Trigger
DropdownMenu.Items = Items

export default DropdownMenu
