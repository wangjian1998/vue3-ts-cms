import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../types'
import { accounrLoginRequest } from '@/service/login/login'
import { IAccount } from '@/service/login/types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 实现登录逻辑
      const loginResult = await accounrLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      console.log(loginResult.data.id, loginResult.data.token)
    }
  }
}

export default loginModule
