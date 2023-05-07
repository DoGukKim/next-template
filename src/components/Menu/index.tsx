import { ReactNode } from 'react'

import MenuItems from './Items'
import MenuItem from './Item'
import MenuSeparator from './Separator'

type MenuProps = {
  children: ReactNode
}

const Menu = ({ children }: MenuProps) => {
  return <>{children}</>
}

Menu.Items = MenuItems
Menu.Item = MenuItem
Menu.Separator = MenuSeparator

export default Menu
