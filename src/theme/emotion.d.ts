import '@emotion/react'
import { ColorScheme } from './type'

declare module '@emotion/react' {
  export interface Theme {
    color: ColorScheme
  }
}
