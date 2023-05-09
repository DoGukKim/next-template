import { css } from '@emotion/react'

import Menu from 'components/Menu'

const mock = [
  {
    id: 1,
    name: '메뉴 1',
  },
  {
    id: 2,
    name: '메뉴 2',
  },
  {
    id: 3,
    name: '메뉴 3',
  },
]

const MenuPage = () => {
  return (
    <main
      css={css`
        display: flex;
        justify-content: center;
        min-height: 300px;
      `}
    >
      <Menu>
        <Menu.Content
          as="ul"
          aria-orientation="vertical"
          direction="column"
          role="menu"
          css={menu}
        >
          {mock.map((i) => {
            return (
              <Menu.Item as="li" role="menuitem" css={item} key={i.id}>
                {i.name}
              </Menu.Item>
            )
          })}
        </Menu.Content>
      </Menu>
    </main>
  )
}

export default MenuPage

const menu = css`
  width: max-content;
  min-width: 220px;
  background-color: white;
  border-radius: 6px;
  padding: 5px;
  box-shadow: rgba(22, 23, 24, 0.35) 0px 10px 38px -10px,
    rgba(22, 23, 24, 0.2) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`

const item = css`
  font-size: 13px;
  line-height: 1;
  color: rgb(87, 70, 175);
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 5px;
  position: relative;
  padding-left: 25px;
  user-select: none;
  outline: none;
  cursor: pointer;

  :hover {
    color: white;
    background-color: rgb(87, 70, 175);
  }
`
