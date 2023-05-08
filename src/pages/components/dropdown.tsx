import { css } from '@emotion/react'

import DropdownMenu from 'components/Dropdown'

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
      <DropdownMenu>
        <DropdownMenu.Trigger>테스트 합니다.</DropdownMenu.Trigger>
        <DropdownMenu.Items css={items}>
          {mock.map((i) => {
            return (
              <DropdownMenu.Item
                onClick={() => console.log(`WORK${i.id}`)}
                css={item}
                key={i.id}
              >
                {i.name}
              </DropdownMenu.Item>
            )
          })}
        </DropdownMenu.Items>
      </DropdownMenu>
    </main>
  )
}

export default DropdownPage

const mainCSS = css`
  width: 300px;
  height: 300px;
`

const items = css`
  position: absolute;
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

  :hover {
    background-color: rgb(87, 70, 175);
    color: white;
  }
`
