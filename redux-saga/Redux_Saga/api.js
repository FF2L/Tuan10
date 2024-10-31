import axios from 'axios'

const api_url = 'https://6714624d690bf212c7614a5a.mockapi.io/Test'

export const getItem = async () => {
  return await axios.get(api_url)
}

export const addItem = async (item) => {
  return await axios.post(api_url,item)
}
export const updateItem = async (item) => {
  return await axios.put(`${api_url}/${item.id}`,item)
}
export const deleteItem = async (id) => {
  return await axios.delete(`${api_url}/${id}`)
}

export default{
  getItem,
  addItem,
  updateItem,
  deleteItem
}