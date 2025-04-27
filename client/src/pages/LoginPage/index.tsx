import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {
  NavBar, 
  Space,
  List,
  Form,
  Input,
  Button
} from 'antd-mobile'
import Cookies from 'js-cookie'
import Logo from '../../components/Logo/logo'
import {useAppSelector, useAppDispatch} from '../../hooks/common'
import {changeUsername, changePassword} from '../../redux/user/userSlice'
import {reqLogin} from '../../api'

export default function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.user.value)

  function handleChangeUserName(username: string) {
    dispatch(changeUsername(username))
  }

  function handleChangePassword(password: string) {
    dispatch(changePassword(password))
  }

  function handleLoginUser() {
    if (!user.username || !user.password) {
      alert('Please fill information.')
      return
    }

    reqLogin(user)
    .then(response => {
      const responseData = response.data
      if (responseData.code == 0) {
        Cookies.set('userid', responseData.data['_id'])
        navigate('/main', {replace: true})
      } else {
        alert('Login failed: ' + responseData.msg)
      }
    })
    .catch(err => {
      console.log('Failed to login: ', err.message)
    })
  }

  return (
    <div>
      <NavBar backIcon={false}>Easy&nbsp;Job</NavBar>
      <Logo />
        <List>
          <Form layout='horizontal' initialValues={user}>
            <Form.Item label='用户名' name='username'>
              <Input placeholder='请输入用户名' clearable onChange={val => {handleChangeUserName(val)}} />
            </Form.Item>
            <Form.Item label='密码' name='password'>
              <Input placeholder='请输入密码' clearable type='password' onChange={val => {handleChangePassword(val)}} />
            </Form.Item>
          </Form>
        </List>
        <Space direction='vertical' block>
          <Button block color='primary' onClick={handleLoginUser}>登录</Button>
          <NavLink to='/register'><Button block>还没有账户</Button></NavLink>
        </Space>
    </div>
  )
}
