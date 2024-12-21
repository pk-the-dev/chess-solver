import { Color } from './models'
import { Piece } from './pieces/piece'

export class FENConverter {
  public convertBoardToFEN(
    board: (Piece | null)[][],
    activePlayerColor: Color,
    castlingRights: string,
  ): string {
    let fenString: string = ''

    for (let rank = 7; rank >= 0; rank--) {
      let fenRank: string = ''
      let emptySquareCount = 0

      for (const piece of board[rank]) {
        if (!piece) {
          emptySquareCount++
          continue
        }

        if (emptySquareCount !== 0) {
          fenRank += String(emptySquareCount)
        }

        emptySquareCount = 0
        fenRank += piece.FENChar
      }

      if (emptySquareCount !== 0) {
        fenRank += String(emptySquareCount)
      }

      fenString += rank === 0 ? fenRank : fenRank + '/'
    }

    const activePlayer: string = activePlayerColor === Color.White ? 'w' : 'b'
    fenString += ' ' + activePlayer
    fenString += ' ' + castlingRights
    fenString += ' -' // En passant target square (always '-' in this case)
    fenString += ' ' + 0 // Halfmove clock (set to 0 for initial position)
    fenString += ' ' + 1 // Fullmove number (starts at 1)
    return fenString
  }
}
