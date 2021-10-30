import axios from 'axios'

const baseURL = `${process.env.VUE_APP_API}`

const axiosInstance = axios.create({ baseURL })

axiosInstance.interceptors.request.use(
  (config) => {
    // 從 localStorage 將 token 取出
    const token = localStorage.getItem('JwtToken')

    // 如果 token 存在的話，則帶入到 headers 當中
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

export default axiosInstance
