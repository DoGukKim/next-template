export type Mode = 'light' | 'dark'

export type Colors = 'white' | 'black' | 'grey'

export type HasLightnessColors = Extract<Colors, 'grey'>

export type Lightness =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

export type ColorScheme = {
  readonly [P in Colors]: P extends HasLightnessColors
    ? { readonly [L in Lightness]: string }
    : string
}

export type ColorTheme = { [P in Mode]: ColorScheme }
