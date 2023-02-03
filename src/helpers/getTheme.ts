import { Theme } from '../contexts/ThemeContext'

export const getTheme = (): Theme => {
  const theme = window?.localStorage?.getItem('theme') as Theme
  if (theme) return theme

  const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
  if (userMedia.matches) return Theme.DARK

  return Theme.LIGHT
}
