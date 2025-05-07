class User {
  username: string
  password: string
  confirmPassword: string
  type: string
  constructor(
    username: string,
    password: string,
    confirmPassword: string,
    type: string
  ) {
    this.username = username
    this.password = password
    this.confirmPassword = confirmPassword
    this.type = type
  }
}

class LoginUser {
  id: string
  username: string
  type: string
  constructor(
    id: string,
    username: string,
    type: string
  ) {
    this.id = id
    this.username = username
    this.type = type
  }
}

export {User, LoginUser}