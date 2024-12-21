import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ChessBoard } from '../../chess-logic/chess-board'
import { ChessBoardContext } from './chess-board.context'

// ChessBoardProvider to wrap components that need access to chessboard state
export const ChessBoardProvider = ({ children }) => {
  const chessBoardRef = useRef(null);
  const [bestMove, setBestMove] = useState({})

  if (chessBoardRef.current === null) {  //check if ref is null
    chessBoardRef.current = new ChessBoard(); // Create the ChessBoard instance only once
  }

  return (
    <ChessBoardContext.Provider value={{ chessBoard: chessBoardRef.current, bestMove, setBestMove }}>
      {children}
    </ChessBoardContext.Provider>
  )
}

ChessBoardProvider.propTypes = {
  children: PropTypes.element,
}
