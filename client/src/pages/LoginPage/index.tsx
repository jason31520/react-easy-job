import React from 'react'
import {NavLink} from 'react-router-dom'
import {
  NavBar, 
  Space,
  List,
  Form,
  Input,
  Button
} from 'antd-mobile'
import Logo from '../../components/Logo/logo'
import {useAppSelector, useAppDispatch} from '../../hooks/common'
import {changeUsername, changePassword} from '../../redux/user/userSlice'

export default function Login() {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)

  function handleChangeUserName(username: string) {
    dispatch(changeUsername(username))
  }

  function handleChangePassword(password: string) {
    dispatch(changePassword(password))
  }

  return (
    <div>
      <NavBar backIcon={false}>Easy&nbsp;Job</NavBar>
      <Logo />
        <List>
          <Form layout='horizontal'>
            <Form.Item label='用户名' name='username'>
              <Input placeholder='请输入用户名' clearable onChange={val => {handleChangeUserName(val)}} />
            </Form.Item>
            <Form.Item label='密码' name='password'>
              <Input placeholder='请输入密码' clearable type='password' onChange={val => {handleChangePassword(val)}} />
            </Form.Item>
          </Form>
        </List>
        <Space direction='vertical' block>
          <Button block color='primary'>登录</Button>
          <NavLink to='/register'><Button block>还没有账户</Button></NavLink>
        </Space>
    </div>
  )
}
