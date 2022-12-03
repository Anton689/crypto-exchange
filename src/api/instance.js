import axios from 'axios'

// TODO pass to ENV
export const instance = axios.create({
  baseURL: 'https://api.changenow.io/v1/'
})
