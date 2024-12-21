import { useContext } from 'react'
import { ChessBoardContext } from './chess-board.context'

export const useChessBoard = () => {
  return useContext(ChessBoardContext)
}
