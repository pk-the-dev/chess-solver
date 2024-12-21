import { List, Typography } from 'antd'

const InfoContent = () => {
  return (
    <>
      <List>
        <List.Item>
          <Typography.Title level={5}>
            Place the pieces anywhere you want and get the best move.
          </Typography.Title>
        </List.Item>
        <List.Item>
          <Typography.Text>
            Single click to select piece and click on empty square to place.
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text>
            Double click on a piece to promote piece.
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text>
            Double click on a piece to promote piece.
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text>
            Select the castling availability
          </Typography.Text>
        </List.Item>
      </List>
    </>
  )
}

export default InfoContent
