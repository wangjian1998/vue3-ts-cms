import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
// import './service/axios_demo'
import hyRequest from './service'
import 'normalize.css'
import './assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { setupStore } from './store'
//表单验证插件z
// import Validation from '@/components/rules'
// import Validation from '@/components/FormRule'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// app.config.globalProperties.$rules = Validation
app.use(store)
setupStore()
app.use(router)
app.use(ElementPlus)
// app.use(Validation)
app.mount('#app')
// console.log(Validation)

// interface dataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// hyRequest
//   .get<dataType>({
//     url: '/home/multidata',
//     // method: 'GET',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.success)
//     console.log(res.returnCode)
//   })
