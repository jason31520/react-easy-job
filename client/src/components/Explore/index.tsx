import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { List } from 'antd-mobile'
import { LoginUser } from '../../models/User'
import { UserType } from '../../constants/UserConstants'
import { reqListUser } from '../../api'

export default function Explore() {
  const navigate = useNavigate()

  const loginUserStr = Cookies.get('loginUser')
  if (!loginUserStr) {
    navigate('/login', {replace: true})
    return <div>Please login first.</div>
  }
  const loginUser: LoginUser = JSON.parse(loginUserStr)

  const userType = loginUser.type
  const exploreUserType = userType === UserType.TALENT ? UserType.BOSS : UserType.TALENT
  
  reqListUser(exploreUserType)
  .then(response => {
    const users = response.data.data
  })

  return (
    <div>
      <List>
        <List.Item>111</List.Item>
        <List.Item>222</List.Item>
      </List>
    </div>
  )
}
