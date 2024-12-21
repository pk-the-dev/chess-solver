import { Color, FENChar } from '../chess-logic/models'
import { Bishop } from '../chess-logic/pieces/bishop'
import { Knight } from '../chess-logic/pieces/knight'
import { Queen } from '../chess-logic/pieces/queen'
import { Rook } from '../chess-logic/pieces/rook'

const convertColumnLetterToYCoord = (string) =>
  string.charCodeAt(0) - 'a'.charCodeAt(0)

const promotedPiece = (piece, playerColor) => {
  if (!piece) return null
  if (piece === 'n')
    return playerColor === Color.White
      ? new Knight(Color.White)
      : new Knight(Color.Black)
  if (piece === 'b')
    return playerColor === Color.White
      ? new Bishop(Color.White)
      : new Bishop(Color.Black)
  if (piece === 'r')
    return playerColor === Color.White
      ? new Rook(Color.White)
      : new Rook(Color.Black)
  return playerColor === Color.White
    ? new Queen(Color.White)
    : new Queen(Color.Black)
}

export const moveFromString = (move, playerColor) => {
  const prevY = convertColumnLetterToYCoord(move[0])
  const prevX = Number(move[1]) - 1
  const newY = convertColumnLetterToYCoord(move[2])
  const newX = Number(move[3]) - 1
  const promotedPieceDetail = promotedPiece(move[4], playerColor)
  return { prevX, prevY, newX, newY, promotedPiece: promotedPieceDetail }
}
