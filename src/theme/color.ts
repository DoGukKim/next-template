import { ColorScheme, ColorTheme, Mode } from './type'

const LIGHT: ColorScheme = {
  black: '#000000',
  white: '#FFFFFF',
  grey: {
    100: '#f2f4f6',
    200: '#e5e8eb',
    300: '#d1d6db',
    400: '#b0b8c1',
    500: '#8b95a1',
    600: '#6b7684',
    700: '#4e5968',
    800: '#333d4b',
    900: '#191f28',
  },
}

const DARK: ColorScheme = {
  black: '#000000',
  white: '#FFFFFF',
  grey: {
    100: '#191f28',
    200: '#333d4b',
    300: '#4e5968',
    400: '#6b7684',
    500: '#8b95a1',
    600: '#b0b8c1',
    700: '#d1d6db',
    800: '#e5e8eb',
    900: '#f2f4f6',
  },
}

const COLOR_THEME: ColorTheme = {
  light: LIGHT,
  dark: DARK,
}

export const getColorTheme = (mode: Mode) => ({
  color: COLOR_THEME[mode],
})
