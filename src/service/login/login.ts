import hyRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './types'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/'
}
export function accounrLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}
