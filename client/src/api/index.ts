import ajax from './ajax'
import {User} from '../models/User'

export const reqRegister = (user: User) => ajax('/user/register', user, 'POST')
export const reqLogin = (user: User) => ajax('/user/login', user, 'POST')
export const reqListUser = (type: string) => ajax(`/user/list`, {type}, 'GET')