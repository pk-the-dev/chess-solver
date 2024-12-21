export enum Color {
  White,
  Black,
}

export enum FENChar {
  WhitePawn = 'P',
  WhiteKnight = 'N',
  WhiteBishop = 'B',
  WhiteRook = 'R',
  WhiteQueen = 'Q',
  WhiteKing = 'K',
  BlackPawn = 'p',
  BlackKnight = 'n',
  BlackBishop = 'b',
  BlackRook = 'r',
  BlackQueen = 'q',
  BlackKing = 'k',
}

export const pieceImagePaths: Readonly<Record<FENChar, string>> = {
  [FENChar.WhitePawn]: './chess-solver/src/assets/pieces/white/pawn.png',
  [FENChar.WhiteKnight]: './chess-solver/src/assets/pieces/white/knight.png',
  [FENChar.WhiteBishop]: './chess-solver/src/assets/pieces/white/bishop.png',
  [FENChar.WhiteRook]: './chess-solver/src/assets/pieces/white/rook.png',
  [FENChar.WhiteQueen]: './chess-solver/src/assets/pieces/white/queen.png',
  [FENChar.WhiteKing]: './chess-solver/src/assets/pieces/white/king.png',
  [FENChar.BlackPawn]: './chess-solver/src/assets/pieces/black/pawn.png',
  [FENChar.BlackKnight]: './chess-solver/src/assets/pieces/black/knight.png',
  [FENChar.BlackBishop]: './chess-solver/src/assets/pieces/black/bishop.png',
  [FENChar.BlackRook]: './chess-solver/src/assets/pieces/black/rook.png',
  [FENChar.BlackQueen]: './chess-solver/src/assets/pieces/black/queen.png',
  [FENChar.BlackKing]: './chess-solver/src/assets/pieces/black/king.png',
}
