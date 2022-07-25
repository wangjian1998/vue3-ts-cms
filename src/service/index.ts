import HYRequest from './request'
// import axios from 'axios'
// axios.defaults.baseURL = '/api/'
const hyRequest = new HYRequest({
  // baseURL: 'http://123.207.32.32:8000/',
  baseURL: 'http://152.136.185.210:5000',
  // baseURL: '/api',
  timeout: 1000,
  interceptors: {
    requestInterceptor: (config) => {
      const token = ''
      if (token) {
        // config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求成功拦截')
      return config
    },
    requestInterceptorCatch(error) {
      console.log('请求失败拦截')

      return error
    },
    responseInterceptor: (res) => {
      console.log('响应成功拦截')

      return res
    },
    responseInterceptorCatch(error) {
      console.log('响应失败拦截')

      return error
    }
  }
})

export default hyRequest
