import { css } from '@emotion/react'

import Dialog from 'components/Dialog'

const DialogPage = () => {
  return (
    <main>
      <Dialog>
        <Dialog.Trigger css={trigger}>다이어로그 버튼</Dialog.Trigger>
        <Dialog.Overlay css={overlay} />
        <Dialog.Close>무제한아닌가요</Dialog.Close>
      </Dialog>
    </main>
  )
}

export default DialogPage

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

const overlay = css`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.44);
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
