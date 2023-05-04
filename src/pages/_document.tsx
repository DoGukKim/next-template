import { Html, Head, Main, NextScript } from 'next/document'

import { MODAL_PORTAL_ROOT_ID } from 'shared/constants/portal'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id={MODAL_PORTAL_ROOT_ID} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
