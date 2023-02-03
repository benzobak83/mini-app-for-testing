import React, { createContext, SetStateAction, useContext } from 'react'

export enum Theme {
  'DARK' = 'dark',
  'LIGHT' = 'light',
}
export type TTHemeContext = {
  theme: Theme
  setTheme: React.Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<TTHemeContext>({
  theme: Theme.LIGHT,
  setTheme: () => {},
})

export const useThemeContext = () => useContext(ThemeContext)
