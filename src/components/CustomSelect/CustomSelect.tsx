import React, { FC, useEffect, useState, useCallback, useRef } from 'react'

import './CustomSelect.scss'
import { CustomSelectProps } from './CustomSelect.types'

const CustomSelect: FC<CustomSelectProps> = ({
  defaultText,
  optionsList,
  className,
}) => {
  const [defaultSelectText, setDefaultSelectText] =
    useState<string>(defaultText)
  const [showOptionList, setShowOptionList] = useState<null | boolean>(false)

  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (showOptionList) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    return () => document.removeEventListener('click', handleClickOutside)
  }, [showOptionList])

  const handleClickOutside = useCallback((e: Event) => {
    const target = e.target as any
    const isCustomSelect = target === selectRef.current

    if (!isCustomSelect) {
      setShowOptionList(false)
    }
  }, [])

  const handleListDisplay = useCallback(() => {
    setShowOptionList(prev => !prev)
  }, [])

  const handleOptionClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement
    setShowOptionList(false)
    setDefaultSelectText(target.getAttribute('data-name') as string)
  }, [])

  return (
    <div className={`custom-select-wrapper ${className ? className : ''}`}>
      <div
        ref={selectRef}
        className={
          'custom-select ' + (showOptionList ? 'custom-select_active' : '')
        }
        onClick={handleListDisplay}>
        {defaultSelectText}
      </div>
      {showOptionList && (
        <ul className="custom-select__options">
          {optionsList.map(option => {
            return (
              <li
                className="custom-select__option"
                data-name={option.name}
                key={option.id}
                onClick={handleOptionClick}>
                {option.name}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default CustomSelect
