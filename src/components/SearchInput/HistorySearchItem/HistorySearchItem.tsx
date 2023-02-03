import React, { FC } from 'react'

export interface HistorySearchItemProps {
  text: string
  handleClick: (e: React.MouseEvent) => void
}

const HistorySearchItem: FC<HistorySearchItemProps> = ({
  text,
  handleClick,
}) => {
  return (
    <li className="search-history__item" onClick={handleClick}>
      {text}
    </li>
  )
}

export { HistorySearchItem }
