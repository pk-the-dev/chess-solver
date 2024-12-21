import axios from 'axios'

// Initialize API layer for HTTP methods
const apiService = {
  /**
   * This layer handles the GET method call
   * @param url
   * @param params
   * @returns
   */
  get: async (url, params) => {
    try {
      const response = await axios.get(url, { params })
      return [response.status, response.data]
    } catch (error) {
      throw new Error(error.response?.data?.error_description || error)
    }
  },

  /**
   * This layer handles the POST method call
   * @param url
   * @param data - payload for create operation
   * @returns
   */
  post: async (url, data) => {
    try {
      const response = await axios.post(url, data)
      return [response.status, response.data]
    } catch (error) {
      throw new Error(
        error.response?.data?.error_description ||
          error.response?.message ||
          error,
      )
    }
  },
}

export default apiService
