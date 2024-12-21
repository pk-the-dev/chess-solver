import { FENChar, Color } from '../models'
import { Piece } from './piece'

export class Rook extends Piece {
  private _hasMoved: boolean = false
  protected override _FENChar: FENChar

  constructor(private pieceColor: Color) {
    super(pieceColor)
    this._FENChar =
      pieceColor === Color.White ? FENChar.WhiteRook : FENChar.BlackRook
  }

  public get hasMoved(): boolean {
    return this._hasMoved
  }

  public set hasMoved(_) {
    this._hasMoved = true
  }
}
