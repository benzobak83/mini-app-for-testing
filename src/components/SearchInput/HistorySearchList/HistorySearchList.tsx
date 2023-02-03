import React, { FC } from 'react'
import HistorySearchItem from '../HistorySearchItem'
import { TCoordHeaderSearch } from '../SearchHeader/SearchHeader.types'
import { HistorySearchListProps } from './HistorySearchList.types'

const HistorySearchList: FC<HistorySearchListProps> = ({
  historySearchItems,
  handleClick,
  memoizedStyleValue,
}) => {
  return (
    <ul
      className="search-history__ul"
      style={memoizedStyleValue as TCoordHeaderSearch}>
      {historySearchItems.reverse().map(text => (
        <HistorySearchItem key={text} text={text} handleClick={handleClick} />
      ))}
    </ul>
  )
}

export { HistorySearchList }
