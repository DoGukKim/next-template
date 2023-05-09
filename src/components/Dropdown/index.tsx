import { ReactNode } from 'react'
import { css } from '@emotion/react'

import Menu from './Menu'
import Item from './Item'
import Provider from './context/Provider'
import Trigger from './Trigger'

type DropdownProps = {
  children: ReactNode
}

const Dropdown = ({ children }: DropdownProps) => {
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

Dropdown.Trigger = Trigger
Dropdown.Menu = Menu
Dropdown.Item = Item

export default Dropdown
