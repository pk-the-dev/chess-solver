const isProd = import.meta.env.PROD
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
  [FENChar.WhitePawn]: isProd ? './assets/pieces/white/pawn.png' : './src/assets/pieces/white/pawn.png',
  [FENChar.WhiteKnight]: isProd ? './assets/pieces/white/knight.png' : './src/assets/pieces/white/knight.png',
  [FENChar.WhiteBishop]: isProd ? './assets/pieces/white/bishop.png' : './src/assets/pieces/white/bishop.png',
  [FENChar.WhiteRook]: isProd ? './assets/pieces/white/rook.png' : './src/assets/pieces/white/rook.png',
  [FENChar.WhiteQueen]: isProd ? './assets/pieces/white/queen.png' : './src/assets/pieces/white/queen.png',
  [FENChar.WhiteKing]: isProd ? './assets/pieces/white/king.png' : './src/assets/pieces/white/king.png',
  [FENChar.BlackPawn]: isProd ? './assets/pieces/black/pawn.png' : './src/assets/pieces/black/pawn.png',
  [FENChar.BlackKnight]: isProd ? './assets/pieces/black/knight.png' : './src/assets/pieces/black/knight.png',
  [FENChar.BlackBishop]: isProd ? './assets/pieces/black/bishop.png' : './src/assets/pieces/black/bishop.png',
  [FENChar.BlackRook]: isProd ? './assets/pieces/black/rook.png' : './src/assets/pieces/black/rook.png',
  [FENChar.BlackQueen]: isProd ? './assets/pieces/black/queen.png' : './src/assets/pieces/black/queen.png',
  [FENChar.BlackKing]: isProd ? './assets/pieces/black/king.png' : './src/assets/pieces/black/king.png'
}
