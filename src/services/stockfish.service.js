import { useState, useEffect } from 'react'
import axios from 'axios'
import { Color, FENChar } from '../chess-logic/models'

let computerColor = Color.White

const useStockfish = (fen, level, getMove, playerColor) => {
  const [bestMove, setBestMove] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const stockFishApi = 'https://stockfish.online/api/s/v2.php'
  const chessApi = 'https://chess-api.com/v1'

  useEffect(() => {
    const fetchBestMoveStockFishAPI = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const queryParams = {
          fen,
          depth: stockfishLevels[level],
        }

        const response = await axios.get(stockFishApi, {
          params: queryParams,
        })

        const { bestmove } = response.data
        const bestMoveString = bestmove.split(' ')[1]
        setBestMove(moveFromStockfishString(bestMoveString))
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    const fetchBestMoveChessAPI = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const body = {
          fen,
          depth: stockfishLevels[level],
        }

        const response = await axios.post(chessApi, body)

        const { move } = response.data
        setBestMove(moveFromStockfishString(move))
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    if (fen && level && getMove) {
      fetchBestMoveChessAPI()
      // fetchBestMoveStockFishAPI()
    }
  }, [fen, level, getMove]) // Re-run effect on fen or level change

  useEffect(() => {
    computerColor = playerColor === Color.White ? Color.Black : Color.White
  }, [playerColor])

  return { bestMove, isLoading, error }
}

const convertColumnLetterToYCoord = (string) =>
  string.charCodeAt(0) - 'a'.charCodeAt(0)

const promotedPiece = (piece) => {
  if (!piece) return null
  if (piece === 'n')
    return computerColor === Color.White
      ? FENChar.WhiteKnight
      : FENChar.BlackKnight
  if (piece === 'b')
    return computerColor === Color.White
      ? FENChar.WhiteBishop
      : FENChar.BlackBishop
  if (piece === 'r')
    return computerColor === Color.White ? FENChar.WhiteRook : FENChar.BlackRook
  return computerColor === Color.White ? FENChar.WhiteQueen : FENChar.BlackQueen
}

const moveFromStockfishString = (move) => {
  const prevY = convertColumnLetterToYCoord(move[0])
  const prevX = Number(move[1]) - 1
  const newY = convertColumnLetterToYCoord(move[2])
  const newX = Number(move[3]) - 1
  const promotedPieceDetail = promotedPiece(move[4])
  return { prevX, prevY, newX, newY, promotedPiece: promotedPieceDetail }
}

export default useStockfish
