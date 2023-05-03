import { createContext, useMemo, useState, ReactNode, useContext } from 'react'
import { ThemeProvider as EmotionProvider, Global } from '@emotion/react'

import { reset } from './reset'
import { Mode } from './type'
import { getColorTheme } from './color'

type ThemeAction = {
  setMode: () => void
}

type ThemeValue = {
  mode: Mode
}

type Props = {
  children: ReactNode
}

const ThemeActionContext = createContext<ThemeAction | null>(null)
const ThemeValueContext = createContext<ThemeValue | null>(null)

export const useThemeAction = () => {
  const context = useContext(ThemeActionContext)
  if (context === undefined) {
    throw new Error('it must be used within a ThemeActionProvider')
  }
  return context
}

const ThemeProvider = ({ children }: Props) => {
  const [_mode, _setMode] = useState<Mode>('light')

  const actions = useMemo<ThemeAction>(
    () => ({
      setMode: () => _setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  )

  const values = useMemo(() => ({ mode: _mode }), [_mode])

  return (
    <ThemeActionContext.Provider value={actions}>
      <ThemeValueContext.Provider value={values}>
        <Global styles={reset(getColorTheme(_mode))} />
        <EmotionProvider theme={getColorTheme(_mode)}>
          {children}
        </EmotionProvider>
      </ThemeValueContext.Provider>
    </ThemeActionContext.Provider>
  )
}

export default ThemeProvider
