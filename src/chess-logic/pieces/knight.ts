import { FENChar, Color } from '../models'
import { Piece } from './piece'

export class Knight extends Piece {
  protected override _FENChar: FENChar

  constructor(private pieceColor: Color) {
    super(pieceColor)
    this._FENChar =
      pieceColor === Color.White ? FENChar.WhiteKnight : FENChar.BlackKnight
  }
}
