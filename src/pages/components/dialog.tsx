import Dialog from 'components/Dialog'

const ModalPage = () => {
  return (
    <main>
      <Dialog>
        <Dialog.Trigger>test</Dialog.Trigger>
      </Dialog>
      <Dialog>
        <Dialog.Trigger>test2</Dialog.Trigger>
      </Dialog>
    </main>
  )
}

export default ModalPage

// background-color: var(--blackA9);
// position: fixed;
// inset: 0;
// animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
