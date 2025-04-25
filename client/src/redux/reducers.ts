import {combineReducers} from 'redux'

import {User} from '../models/User'
import {AUTH_SUCCESS, ERROR_MSG} from './action-types'

const initUser = new User('', '', '', '')
function user(state = initUser, action: any) {
  switch(action.type) {
    case AUTH_SUCCESS:
      return {...action.data, redirectTo: '/'}
    case ERROR_MSG:
      return {...state, msg: action.data}
    default:
      return state
  }
}

export default combineReducers({
  user
})