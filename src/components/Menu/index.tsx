import { ComponentPropsWithoutRef } from 'react'

import MenuItems from './Items'
import MenuItem from './Item'
import MenuSeparator from './Separator'

type MenuProps = ComponentPropsWithoutRef<'div'>

const Menu = ({ children }: MenuProps) => {
  return <div aria-label="menu-wrapper">{children}</div>
}

Menu.Items = MenuItems
Menu.Item = MenuItem
Menu.Separator = MenuSeparator

export default Menu
