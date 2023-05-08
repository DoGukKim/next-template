import { Html, Head, Main, NextScript } from 'next/document'

import {
  DIALOG_PORTAL_ROOT_ID,
  DROPDOWN_PORTAL_ROOT_ID,
} from 'shared/constants/portal'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id={DIALOG_PORTAL_ROOT_ID} />
        <div id={DROPDOWN_PORTAL_ROOT_ID} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
