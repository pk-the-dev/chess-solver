import apiService from './api-service'

const URL = 'https://chess-api.com/v1'

export const getBestMoveFromChessAPI = async (data) => {
  try {
    const [status, response] = await apiService.post(URL, data)
    if (status !== 200) {
      throw response
    }
    const { move, san, piece, promotion, from, to, isCastling, isPromotion, isCapture, color } = response
    return { move, san, piece, promotion, from, to, isCastling, isPromotion, isCapture, color }
  } catch (error) {
    console.error('Unable to Login', error)
    throw error
  }
}
