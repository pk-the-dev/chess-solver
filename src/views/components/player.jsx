import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

const PlayerDetails = ({ name }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '8px',
        marginTop: '8px',
        height: '32px',
      }}
    >
      <Avatar icon={<UserOutlined />} />
      <p style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>
        {name}
      </p>
    </div>
  )
}

PlayerDetails.propTypes = {
  name: PropTypes.string.isRequired,
}

export default PlayerDetails
