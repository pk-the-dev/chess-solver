import ChessBoardComponent from '../components/chess-board'
import '../../styles/pages/friendship-match.scss'
import { Button, Col, Radio, Row, Popover, Flex, Checkbox } from 'antd'
import { InfoCircleTwoTone } from '@ant-design/icons'
import { getBestMoveFromChessAPI } from '../../api/chess-api'
import { useChessBoard } from '../../context/chess-board/chess-board.context.hook'
import { Color } from '../../chess-logic/models'
import { moveFromString } from '../../utils/utils'
import { useState } from 'react'
import InfoContent from '../components/info-content'

const LandingPage = () => {
  const { chessBoard, bestMove, setBestMove } = useChessBoard()
  const [playerColor, setPlayerColor] = useState(Color.White)

  const [castlingOptions, setCastlingOptions] = useState({
    K: true, // White O-O
    Q: true, // White O-O-O
    k: true, // Black O-O
    q: true, // Black O-O-O
  })

  const handleCastlingChange = (value, checked) => {
    setCastlingOptions({ ...castlingOptions, [value]: checked })
  }

  const getBestMoveChessAPI = async () => {
    let fen = chessBoard.showBoardAsFen(playerColor, getCastlingString())
    let data = {
      fen,
      depth: 15,
    }
    let {
      move,
      san,
      piece,
      promotion,
      from,
      to,
      isCastling,
      isPromotion,
      isCapture,
    } = await getBestMoveFromChessAPI(data)
    let moveCoordinates = moveFromString(move, playerColor)
    setBestMove({
      move,
      san,
      piece,
      promotion,
      from,
      to,
      isCastling,
      isPromotion,
      isCapture,
      moveCoordinates,
    })
  }

  const handleChange = (event) => {
    setPlayerColor(event.target.value)
  }

  const getCastlingString = () => {
    let castlingString = "";
  
    if (castlingOptions.K) {
      castlingString += "K";
    }
    if (castlingOptions.Q) {
      castlingString += "Q";
    }
    if (castlingOptions.k) {
      castlingString += "k";
    }
    if (castlingOptions.q) {
      castlingString += "q";
    }
  
    return castlingString || "-"; // Return "-" if no castling rights
  }

  return (
    <div className="chess-game-container">
      <Popover placement="bottomRight" content={InfoContent}>
        <Button
          color="default"
          variant="text"
          style={{ position: 'absolute', right: 10, top: 40 }}
        >
          <InfoCircleTwoTone />
        </Button>
      </Popover>

      <Flex
        vertical
        justify="center"
        align="center"
        style={{ width: '100vw', height: '100vh' }}
      >
        <ChessBoardComponent />

        <Row
          gutter={[16, 16]}
          align="middle"
          justify="center"
          style={{ marginBlockStart: 32 }}
        >
          <Col>
            Get move for &nbsp;&nbsp;
            <Radio.Group
              value={playerColor}
              onChange={handleChange}
              size="large"
            >
              <Radio.Button value={Color.White}>White</Radio.Button>
              <Radio.Button value={Color.Black}>Black</Radio.Button>
            </Radio.Group>
          </Col>
          <Col>
            <Button
              size="large"
              color="default"
              variant="outlined"
              onClick={getBestMoveChessAPI}
            >
              Get Best Move
            </Button>
          </Col>
        </Row>

        <Row
          gutter={[16, 16]}
          style={{ width: 400, textAlign: 'center', marginBlockStart: 32 }}
        >
          <Col span={24} style={{ fontWeight: 'bold' }}>
            Available Castling
          </Col>
          <Col span={6}>
            <Checkbox
              value="K"
              checked={castlingOptions.K}
              onChange={(e) => handleCastlingChange('K', e.target.checked)}
            >
              White O-O
            </Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox
              value="Q"
              checked={castlingOptions.Q}
              onChange={(e) => handleCastlingChange('Q', e.target.checked)}
            >
              White O-O-O
            </Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox
              value="k"
              checked={castlingOptions.k}
              onChange={(e) => handleCastlingChange('k', e.target.checked)}
            >
              Black O-O
            </Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox
              value="q"
              checked={castlingOptions.q}
              onChange={(e) => handleCastlingChange('q', e.target.checked)}
            >
              Black O-O-O
            </Checkbox>
          </Col>
        </Row>

        <Row
          gutter={[16, 16]}
          align="middle"
          justify="center"
          style={{
            marginBlockStart: 32,
            border: '1px solid gray',
            borderRadius: 16,
            padding: 16,
            width: 400,
            minHeight: 120,
            background: 'rgba(138, 138, 138, 0.1)',
          }}
        >
          <Col span={24} style={{ textAlign: 'center' }}>
            The best move for{' '}
            {playerColor === Color.White ? 'white ' : 'black '}is:
            <div>
              {' '}
              <span style={{ fontWeight: 'bolder' }}>
                {bestMove.san}
              </span> [ {bestMove.piece} : {bestMove.from} - {bestMove.to} ]{' '}
            </div>
          </Col>
          <Col>
            {bestMove.isPromotion && (
              <div>
                Promote the piece to{' '}
                {bestMove.moveCoordinates.promotedPiece._FENChar}
              </div>
            )}
          </Col>
        </Row>
      </Flex>
    </div>
  )
}

export default LandingPage
