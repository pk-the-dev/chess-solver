import { useEffect, useRef, useState } from 'react'
import { Row, Col, Image } from 'antd'

import { Color, pieceImagePaths } from '../../../chess-logic/models'
import { useChessBoard } from '../../../context/chess-board/chess-board.context.hook'
import PiecePromotionModal from '../promotion-modal'
import PropTypes from 'prop-types'

const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const cols = ['1', '2', '3', '4', '5', '6', '7', '8']

const ChessBoardComponent = () => {
  let { chessBoard, bestMove } = useChessBoard()

  const clickTimer = useRef(null)

  const [isPromotionActive, setIsPromotionActive] = useState(false)
  const [selectedSquare, setSelectedSquare] = useState({ piece: null })
  const [chessBoardView, setChessBoardView] = useState(
    chessBoard.chessBoardView,
  )

  useEffect(() => {
    if (bestMove && bestMove?.moveCoordinates) {
      if (bestMove.isCastling) {
        let playerColor = bestMove.color === 'w' ? Color.White : Color.Black
        chessBoard.castling(playerColor, bestMove.san)
        setChessBoardView(chessBoard.chessBoardView)
        return
      }

      if (bestMove.isPromotion) {
        const { prevX, prevY, newX, newY, promotedPiece } =
          bestMove.moveCoordinates
        chessBoard.removePiece(prevX, prevY)
        chessBoard.placePiece(promotedPiece, newX, newY)
        setChessBoardView(chessBoard.chessBoardView)
        return
      }

      const { prevX, prevY, newX, newY } = bestMove.moveCoordinates
      chessBoard.movePiece(prevX, prevY, newX, newY)
      setChessBoardView(chessBoard.chessBoardView)
    }
  }, [bestMove, chessBoard])

  const singleClick = (x, y) => {
    clickTimer.current = setTimeout(() => {
      choosingPiece(x, y)
      movingPiece(x, y)
      clickTimer.current = null // Clear the timer
    }, 200) // 200ms delay
  }

  const choosingPiece = (x, y) => {
    const piece = chessBoardView[x][y]
    if (!piece) return
    setSelectedSquare({ piece, x, y })
  }

  const movingPiece = (newX, newY) => {
    if (!selectedSquare.piece) return
    const { x: prevX, y: prevY } = selectedSquare
    chessBoard.movePiece(prevX, prevY, newX, newY)
    setChessBoardView(chessBoard.chessBoardView)
    setSelectedSquare({ piece: null })
  }

  const doubleClick = (x, y) => {
    if (clickTimer.current) {
      clearTimeout(clickTimer.current)
      clickTimer.current = null
    }
    const piece = chessBoardView[x][y]
    setSelectedSquare({ piece, x, y })
    openPawnPromotionDialog()
  }

  const isSquareDark = (x, y) => (x + y) % 2 === 0 // Just a simple check for dark/light squares

  const openPawnPromotionDialog = () => setIsPromotionActive(true)
  const closePawnPromotionDialog = () => {
    setChessBoardView(chessBoard.chessBoardView)
    setIsPromotionActive(false)
    setSelectedSquare({ piece: null })
  }

  const promotePiece = (newPiece) => {
    const { x, y, piece } = selectedSquare
    if (!piece) {
      chessBoard.removePiece(x, y)
    }

    chessBoard.placePiece(newPiece, x, y)
    closePawnPromotionDialog()
  }

  return (
    <div>
      <Row gutter={[16, 16]} align="middle">
        {/* Chess Board */}
        <Col xs={24} md={16}>
          <Row align="middle" justify="center">
            <Col>
              <div className={`chess-board`}>
                {chessBoardView.map((row, x) => (
                  <Row key={x} gutter={0}>
                    {row.map((piece, y) => (
                      <Col
                        key={y}
                        span={3}
                        className={`square ${
                          isSquareDark(x, y) ? 'dark' : 'light'
                        }`}
                        onClick={() => singleClick(x, y)}
                        onDoubleClick={() => doubleClick(x, y)}
                      >
                        <div className={`square-content`}>
                          {piece && (
                            <Image
                              src={pieceImagePaths[piece]}
                              alt={piece}
                              className="piece"
                              preview={false}
                            />
                          )}
                          {y == 0 && <p className="cols">{cols[x]}</p>}
                          {x == 0 && <p className="rows">{rows[y]}</p>}
                        </div>
                      </Col>
                    ))}
                  </Row>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Pawn Promotion Dialog */}
      <PiecePromotionModal
        showModal={isPromotionActive}
        promotePieceColor={chessBoard.playerColor}
        promotePiece={promotePiece}
        closePawnPromotionDialog={closePawnPromotionDialog}
      />
    </div>
  )
}

ChessBoardComponent.propTypes = {
  opponent: PropTypes.string,
  playerSelectedColor: PropTypes.number,
  stockFishStrength: PropTypes.number,
}

export default ChessBoardComponent
