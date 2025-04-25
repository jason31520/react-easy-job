export class User {
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