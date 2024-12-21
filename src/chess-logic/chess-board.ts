import { FENConverter } from './FENConverter'
import { Color, FENChar } from './models'
import { Bishop } from './pieces/bishop'
import { King } from './pieces/king'
import { Knight } from './pieces/knight'
import { Pawn } from './pieces/pawn'
import { Piece } from './pieces/piece'
import { Queen } from './pieces/queen'
import { Rook } from './pieces/rook'

export class ChessBoard {
  private chessBoard: (Piece | null)[][]
  private readonly chessBoardSize: number = 8
  private FENConverter = new FENConverter()

  constructor() {
    this.chessBoard = [
      [
        new Rook(Color.White),
        new Knight(Color.White),
        new Bishop(Color.White),
        new Queen(Color.White),
        new King(Color.White),
        new Bishop(Color.White),
        new Knight(Color.White),
        new Rook(Color.White),
      ],
      [
        new Pawn(Color.White),
        new Pawn(Color.White),
        new Pawn(Color.White),
        new Pawn(Color.White),
        new Pawn(Color.White),
        new Pawn(Color.White),
        new Pawn(Color.White),
        new Pawn(Color.White),
      ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [
        new Pawn(Color.Black),
        new Pawn(Color.Black),
        new Pawn(Color.Black),
        new Pawn(Color.Black),
        new Pawn(Color.Black),
        new Pawn(Color.Black),
        new Pawn(Color.Black),
        new Pawn(Color.Black),
      ],
      [
        new Rook(Color.Black),
        new Knight(Color.Black),
        new Bishop(Color.Black),
        new Queen(Color.Black),
        new King(Color.Black),
        new Bishop(Color.Black),
        new Knight(Color.Black),
        new Rook(Color.Black),
      ],
    ]
  }

  public get chessBoardView(): (FENChar | null)[][] {
    return this.chessBoard.map((row) => {
      return row.map((piece) => (piece instanceof Piece ? piece.FENChar : null))
    })
  }

  public placePiece(piece: any, x: number, y: number): void {
    if (this.areCoordsValid(x, y)) {
      this.chessBoard[x][y] = piece
    }
  }

  public removePiece(x: number, y: number): void {
    if (this.areCoordsValid(x, y)) {
      this.chessBoard[x][y] = null
    }
  }

  public movePiece(
    prevX: number,
    prevY: number,
    newX: number,
    newY: number,
  ): void {
    if (this.areCoordsValid(prevX, prevY) && this.areCoordsValid(newX, newY)) {
      const piece = this.chessBoard[prevX][prevY]
      this.chessBoard[prevX][prevY] = null
      this.chessBoard[newX][newY] = piece
    }
  }

  private areCoordsValid(x: number, y: number): boolean {
    return (
      x >= 0 && y >= 0 && x < this.chessBoardSize && y < this.chessBoardSize
    )
  }

  public showBoardAsFen = (playerColor: Color, castlingAvailable: string) => {
    let boardAsFEN = this.FENConverter.convertBoardToFEN(
      this.chessBoard,
      playerColor,
      castlingAvailable
    )

    return boardAsFEN
  }

  public castling = (playerColor: Color, move: String) => {
    const rowForCastling = playerColor === Color.Black ? 0 : 7

    if (move === 'O-O-O') {
      // Queenside Castling
      const newRookPos = 3
      const newKingPos = 2
      this.movePiece(rowForCastling, 0, rowForCastling, newRookPos) // Move rook
      this.movePiece(rowForCastling, 4, rowForCastling, newKingPos) // Move king
    } else if (move === 'O-O') {
      // Kingside Castling
      const newRookPos = 5
      const newKingPos = 6
      this.movePiece(rowForCastling, 7, rowForCastling, newRookPos) // Move rook
      this.movePiece(rowForCastling, 4, rowForCastling, newKingPos) // Move king
    } else {
      console.error('Invalid castling move or castling not possible!')
    }
  }
}
