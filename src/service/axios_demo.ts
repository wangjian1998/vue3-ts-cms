import axios from 'axios'

axios.get('http://123.207.32.32:8000/home/multidata').then((ret) => {
  console.log(ret)
})

// axios拦截
// fn1: 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    console.log('请求成功拦截')
    return config
  },
  (err) => {
    console.log('请求失败拦截')
    return err
  }
)

axios.interceptors.response.use(
  (config) => {
    console.log('响应成功拦截')
    return config
  },
  (err) => {
    console.log('响应失败拦截')
    return err
  }
)
