import { Html, Head, Main, NextScript } from 'next/document'

import { DIALOG_PORTAL_ROOT_ID } from 'shared/constants/portal'

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <div id={DIALOG_PORTAL_ROOT_ID} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
