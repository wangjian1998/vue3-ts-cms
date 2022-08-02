import { createStore } from 'vuex'
import login from './login/login'
import { IRootState } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'wj',
      age: 18
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    }
  },
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store

// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// })
