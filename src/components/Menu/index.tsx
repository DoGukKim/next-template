import { ReactNode } from 'react'

import MenuContent from './Content'
import MenuItem from './Item'

type MenuProps = {
  children: ReactNode
}

const Menu = ({ children }: MenuProps) => {
  return <>{children}</>
}

Menu.Content = MenuContent
Menu.Item = MenuItem

export default Menu
