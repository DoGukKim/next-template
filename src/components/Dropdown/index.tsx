import { ReactNode } from 'react'
import { css } from '@emotion/react'

import Items from './Items'
import Item from './Item'
import Menu from 'components/Menu'
import Provider from './context/Provider'
import Trigger from './Trigger'

type DropdownMenuProps = {
  children: ReactNode
}

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  return (
    <Provider>
      <Menu
        css={css`
          position: relative;
        `}
      >
        {children}
      </Menu>
    </Provider>
  )
}

DropdownMenu.Trigger = Trigger
DropdownMenu.Items = Items
DropdownMenu.Item = Item

export default DropdownMenu
