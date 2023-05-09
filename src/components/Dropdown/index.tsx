import { ReactNode } from 'react'
import { css } from '@emotion/react'

import Provider from './context/Provider'
import Content from './Content'
import Trigger from './Trigger'
import Item from './Item'

type DropdownProps = {
  children: ReactNode
}

const Dropdown = ({ children }: DropdownProps) => {
  return (
    <Provider>
      <div
        aria-label="dropdown-wrapper"
        css={css`
          position: relative;
        `}
      >
        {children}
      </div>
    </Provider>
  )
}

Dropdown.Trigger = Trigger
Dropdown.Content = Content
Dropdown.Item = Item

export default Dropdown
