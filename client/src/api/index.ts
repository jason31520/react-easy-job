import ajax from './ajax'
import {User} from '../models/User'

export const reqRegister = (user: User) => ajax('/register', user, 'POST')
export const reqLogin = (user: User) => ajax('/login', user, 'POST')