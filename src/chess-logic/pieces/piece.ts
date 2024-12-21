import { Color, FENChar } from '../models'

export abstract class Piece {
  protected abstract _FENChar: FENChar

  constructor(private _color: Color) {}

  public get FENChar(): FENChar {
    return this._FENChar
  }

  public get color(): Color {
    return this._color
  }
}
