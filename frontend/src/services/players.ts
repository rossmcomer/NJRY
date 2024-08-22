import axios from '../util/apiClient'
const baseUrl = '/players'

const getAllInjuries = async () => {
  const response = await axios.get(baseUrl)
  console.log(response)
  return response.data
}

export default { getAllInjuries }
