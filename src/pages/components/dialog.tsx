import { css } from '@emotion/react'

import Dialog from 'components/Dialog'

const DialogPage = () => {
  return (
    <main>
      <Dialog>
        <Dialog.Trigger css={trigger}>다이어로그 버튼</Dialog.Trigger>
        <Dialog.Overlay css={overlay} />
        <Dialog.Content css={content}>
          <Dialog.Close>무제한아닌가요</Dialog.Close>
        </Dialog.Content>
      </Dialog>
    </main>
  )
}

export default DialogPage

const content = css`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
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
