import apiService from './api-service'

const URL = 'https://stockfish.online/api/s/v2.php'

export const getBestMoveFromStockFishAPI = async (queryParams) => {
  try {
    const [status, response] = await apiService.get(URL, queryParams)
    if (status !== 200) {
      throw response
    }
    const { bestmove } = response
    const bestMoveString = bestmove.split(' ')[1]
    return bestMoveString
  } catch (error) {
    console.error('Unable to Login', error)
    throw error
  }
}
