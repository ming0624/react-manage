import Axios, { AxiosRequestConfig } from 'axios'

// 创建axios实例
const instance = Axios.create({
  baseURL: 'https://www.fastmock.site/mock/9750393c2a9c5ab64d408c0c522d728d/test',
  timeout: 200000
})

// 请求拦截
instance.interceptors.request.use((config) => {
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截

instance.interceptors.response.use(res => {
  return res.data
},err => {
  return Promise.reject(err)
})

export default instance