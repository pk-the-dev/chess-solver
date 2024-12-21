import { Modal, Row, Col, Image } from 'antd'
import PropTypes from 'prop-types'

import { Color, FENChar, pieceImagePaths } from '../../chess-logic/models'
import { Queen } from '../../chess-logic/pieces/queen'
import { Rook } from '../../chess-logic/pieces/rook'
import { Bishop } from '../../chess-logic/pieces/bishop'
import { Knight } from '../../chess-logic/pieces/knight'
import { Pawn } from '../../chess-logic/pieces/pawn'

const PiecePromotionModal = ({
  showModal,
  promotePiece,
  closePawnPromotionDialog,
}) => {
  const promotionWhitePieces = [
    { pieceChar: FENChar.WhiteQueen, piece: new Queen(Color.White) },
    { pieceChar: FENChar.WhiteRook, piece: new Rook(Color.White) },
    { pieceChar: FENChar.WhiteBishop, piece: new Bishop(Color.White) },
    { pieceChar: FENChar.WhiteKnight, piece: new Knight(Color.White) },
    { pieceChar: FENChar.WhitePawn, piece: new Pawn(Color.White) },
  ]
  const promotionBlackPieces = [
    { pieceChar: FENChar.BlackQueen, piece: new Queen(Color.Black) },
    { pieceChar: FENChar.BlackRook, piece: new Rook(Color.Black) },
    { pieceChar: FENChar.BlackBishop, piece: new Bishop(Color.Black) },
    { pieceChar: FENChar.BlackKnight, piece: new Knight(Color.Black) },
    { pieceChar: FENChar.BlackPawn, piece: new Pawn(Color.Black) },
  ]

  return (
    <Modal
      title="Promote Pawn"
      open={showModal}
      onCancel={closePawnPromotionDialog}
      footer={null}
    >
      <Row gutter={[16, 16]} justify="center">
        {promotionWhitePieces.map((piece) => (
          <Col key={piece.pieceChar} span={4}>
            <Image
              src={`${pieceImagePaths[piece.pieceChar]}`}
              alt={piece.pieceChar}
              onClick={() => promotePiece(piece.piece)}
              className="promotion-piece"
              preview={false}
            />
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} justify="center">
        {promotionBlackPieces.map((piece) => (
          <Col key={piece.pieceChar} span={4}>
            <Image
              src={`${pieceImagePaths[piece.pieceChar]}`}
              alt={piece.pieceChar}
              onClick={() => promotePiece(piece.piece)}
              className="promotion-piece"
              preview={false}
            />
          </Col>
        ))}
      </Row>
    </Modal>
  )
}

PiecePromotionModal.propTypes = {
  showModal: PropTypes.bool,
  promotePiece: PropTypes.func,
  closePawnPromotionDialog: PropTypes.func,
}

export default PiecePromotionModal
