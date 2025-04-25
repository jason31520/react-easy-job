import {AUTH_SUCCESS, ERROR_MSG} from './action-types'
import {reqRegister, reqLogin} from '../api'
import {User} from '../models/User'

const authSuccess = (user: object) => ({type: AUTH_SUCCESS, data: user})
const errorMsg = (msg: string) => ({type: ERROR_MSG, data: msg})

export function register(user: User) {
  if (!user.username || !user.password || !user.type) {
    return errorMsg('Username, password and type are required to register a user.')
  }

  if (user.password !== user.confirmPassword) {
    return errorMsg('Password and confirmPassword must be the same.')
  }

  return async (dispatch: (arg0: { type: string; data: any }) => void) => {
    const response = await reqRegister(user)
    const result = response.data
    if (result.code === 0) {
      dispatch(authSuccess(result.dta))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}

export function login(user: User) {
  if (!user.username || !user.password) {
    return errorMsg('Username and password are required to login.')
  }
  return async (dispatch: (arg0: { type: string; data: any }) => void) => {
    const response = await reqLogin(user)
    const result = response.data
    if (result.code === 0) {
      dispatch(authSuccess(result.dta))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}