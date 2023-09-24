import axios from 'axios'

// const baseUrl = 'http://127.0.0.1:3001/persons'
const baseUrl = '/api/persons'

///// TESTING WITH ASYNC AWAIT SYNTAX
//////////////////////////////////////
const getAllNumbers = async () => {
  try {
    const response = await axios.get(baseUrl)
    return response.data
  } catch (error) {
    throw new Error('💥️ Error In Getting API. Please Try Again Later 💥️')
  }
}

const createNumber = async (newNumber) => {
  try {
    const response = await axios.post(baseUrl, newNumber)
    return response.data
  } catch (error) {
    throw new Error(`💥️ ${error.response.data.message} 💥️`)
  }
}

const updateNumber = async (id, newNumber) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, newNumber)
    return response.data
  } catch (error) {
    throw new Error(`💥️ ${error.response.data.message} 💥️`)
  }
}

const deleteNumber = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
  } catch (error) {
    throw new Error(`💥️ Error in deleting number 💥️`)
  }
}

export default { getAllNumbers, createNumber, updateNumber, deleteNumber }
