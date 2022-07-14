import axios from "axios"

const API_URL = "/json-export-test"

export const getPlacesData = async () => {
  try {
    const { data } = await axios.get(API_URL)
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
