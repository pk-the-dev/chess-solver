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
  [FENChar.WhitePawn]: './src/assets/pieces/white/pawn.png',
  [FENChar.WhiteKnight]: './src/assets/pieces/white/knight.png',
  [FENChar.WhiteBishop]: './src/assets/pieces/white/bishop.png',
  [FENChar.WhiteRook]: './src/assets/pieces/white/rook.png',
  [FENChar.WhiteQueen]: './src/assets/pieces/white/queen.png',
  [FENChar.WhiteKing]: './src/assets/pieces/white/king.png',
  [FENChar.BlackPawn]: './src/assets/pieces/black/pawn.png',
  [FENChar.BlackKnight]: './src/assets/pieces/black/knight.png',
  [FENChar.BlackBishop]: './src/assets/pieces/black/bishop.png',
  [FENChar.BlackRook]: './src/assets/pieces/black/rook.png',
  [FENChar.BlackQueen]: './src/assets/pieces/black/queen.png',
  [FENChar.BlackKing]: './src/assets/pieces/black/king.png',
}
