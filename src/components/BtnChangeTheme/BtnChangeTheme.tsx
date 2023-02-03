import React, { FC, useCallback } from 'react'
import { Theme, useThemeContext } from '../../contexts/ThemeContext'
import { BtnChangeThemeProps } from './BtnChangeTheme.types'

const BtnChangeTheme: FC<BtnChangeThemeProps> = ({ children }) => {
  const { setTheme } = useThemeContext()

  const handleClick = useCallback(() => {
    setTheme(prev => {
      if (prev === Theme.DARK) {
        return Theme.LIGHT
      } else {
        return Theme.DARK
      }
    })
  }, [])
  return (
    <button className="change-theme" onClick={handleClick}>
      {children}
    </button>
  )
}

export { BtnChangeTheme }
