import ajax from './ajax'

export const reqRegister = (user: object) => ajax('/register', user, 'POST')
export const reqLogin = (user: object) => ajax('/login', user, 'POST')