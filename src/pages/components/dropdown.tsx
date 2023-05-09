import { css } from '@emotion/react'

import Button from 'components/Button'
import Dropdown from 'components/Dropdown'

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

const DropdownPage = () => {
  return (
    <main css={mainCSS}>
      <Dropdown>
        <Dropdown.Trigger>
          {({ isOpen, onToggle }) => (
            <Button css={trigger} onClick={onToggle}>
              {isOpen ? '열림' : '닫힘'}
            </Button>
          )}
        </Dropdown.Trigger>
        <Dropdown.Content
          as="ul"
          aria-orientation="vertical"
          direction="column"
          role="menu"
          css={content}
        >
          {mock.map((i) => (
            <Dropdown.Item as="li" role="menuitem" key={i.id} css={item}>
              {i.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Content>
      </Dropdown>
    </main>
  )
}

export default DropdownPage

const mainCSS = css`
  width: 300px;
  height: 300px;
`

const trigger = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
  color: rgb(87, 70, 175);
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 10px;
  border: rgb(87, 70, 175);
`

const content = css`
  position: absolute;
  top: 110%;
  animation: slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  min-width: 220px;
  background-color: white;
  border-radius: 6px;
  padding: 5px;

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const item = css`
  all: unset;
  font-size: 13px;
  line-height: 1;
  color: rgb(87, 70, 175);
  display: flex;
  align-items: center;
  height: 25px;
  position: relative;
  user-select: none;
  border-radius: 3px;
  padding: 0px 5px 0px 25px;
  cursor: pointer;
  :hover {
    background-color: rgb(87, 70, 175);
    color: white;
  }
`
