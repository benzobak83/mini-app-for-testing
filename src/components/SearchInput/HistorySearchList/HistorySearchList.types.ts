import {
  TCoordHeaderSearch,
  THistorySearchItem,
} from '../SearchHeader/SearchHeader.types'

export interface HistorySearchListProps {
  historySearchItems: THistorySearchItem[]
  handleClick: (e: React.MouseEvent) => void
  memoizedStyleValue: TCoordHeaderSearch | null
}
