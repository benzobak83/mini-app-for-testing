import React, {
  FC,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react'
import HistorySearchList from '../HistorySearchList'

import './SearchHeader.scss'
import { TCoordHeaderSearch, THistorySearchItem } from './SearchHeader.types'

const SearchHeader: FC = React.memo(() => {
  const [coord, setCoord] = useState<TCoordHeaderSearch | null>(null)
  const [historySearchItems, setHistorySearchItems] = useState<
    THistorySearchItem[]
  >([])
  const [searchIsFocus, setSearchIsFocus] = useState<boolean>(false)

  const searchInput = useRef<HTMLInputElement>(null)

  const memoizedStyleValue = useMemo(() => {
    if (coord) {
      return { left: coord.left, width: coord.width }
    } else return null
  }, [coord])

  const handleResizeWindow = useCallback(() => {
    if (searchInput.current) {
      const { left, width } = searchInput.current.getBoundingClientRect()
      const windowWidth = window.innerWidth
      const wrapperWidth = (
        document.querySelector('.main-wrapper') as HTMLElement
      ).getBoundingClientRect().width

      const coord = (wrapperWidth - windowWidth) / 2 + left
      setCoord({ left: coord, width })
    }
  }, [])

  const onFocus = useCallback(() => {
    setSearchIsFocus(true)
  }, [])
  const onBlur = useCallback(() => {
    setTimeout(() => setSearchIsFocus(false), 100)
  }, [])

  const handleClickItem = useCallback((e: React.MouseEvent) => {
    if (searchInput.current) {
      const target = e.target as HTMLLIElement
      searchInput.current.value = target.textContent as string
    }
  }, [])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const target = e.target as HTMLInputElement
      const key = e.key
      if (key === 'Enter' && !historySearchItems.includes(target.value)) {
        setHistorySearchItems(prev => [...prev, target.value])
      }
    },
    [historySearchItems]
  )

  useEffect(() => {
    if (searchIsFocus) {
      handleResizeWindow()
      window.addEventListener('resize', handleResizeWindow)
    } else {
      window.removeEventListener('resize', handleResizeWindow)
    }

    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [searchIsFocus])

  useEffect(() => {
    const historyItems = window.localStorage.getItem('history-search-items')
    if (historyItems) {
      setHistorySearchItems(JSON.parse(historyItems))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(
      'history-search-items',
      JSON.stringify(historySearchItems)
    )
  }, [historySearchItems])

  useEffect(() => {
    if (searchIsFocus) {
      window.addEventListener('keydown', handleKeyDown)
    } else {
      window.removeEventListener('keydown', handleKeyDown)
    }

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [searchIsFocus, historySearchItems])

  return (
    <>
      <input
        type="text"
        ref={searchInput}
        className="search-input"
        placeholder="Search"
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div
        className={`search-history ${
          !searchIsFocus && 'search-history_hidden'
        }`}>
        <HistorySearchList
          historySearchItems={historySearchItems}
          handleClick={handleClickItem}
          memoizedStyleValue={memoizedStyleValue}
        />
      </div>
    </>
  )
})

export { SearchHeader }
