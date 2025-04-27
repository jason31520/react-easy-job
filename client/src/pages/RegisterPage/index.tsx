import React from 'react'
import {NavLink} from 'react-router-dom'
import {
  NavBar, 
  Space,
  List,
  Form,
  Input,
  Radio,
  Button
} from 'antd-mobile'
import Logo from '../../components/Logo/logo'
import {useAppSelector, useAppDispatch} from '../../hooks/common'
import {changeUsername, changePassword, changeConfirmPassword, changeType} from '../../redux/user/userSlice'


export default function Register() {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)

  function handleChangeUserName(username: string) {
    dispatch(changeUsername(username))
  }

  function handleChangePassword(password: string) {
    dispatch(changePassword(password))
  }

  function handleChangeConfirmPassword(confirmPassword: string) {
    dispatch(changeConfirmPassword(confirmPassword))
  }

  function handleChangeType(type: string) {
    dispatch(changeType(type))
  }

  function handleRegisterUser() {
    
  }

  return (
    <div>
      <NavBar backIcon={false}>Easy&nbsp;Job</NavBar>
      <Logo />
        <List>
          <Form layout='horizontal' initialValues={user}>
            <Form.Item label='用户名' name='username'>
              <Input placeholder='请输入用户名' onChange={val => {handleChangeUserName(val)}} />
            </Form.Item>
            <Form.Item label='密码' name='password'>
              <Input placeholder='请输入密码' type='password' onChange={val => {handleChangePassword(val)}} />
            </Form.Item>
            <Form.Item label='确认密码' name='confirmPassword'>
              <Input placeholder='请输入确认密码' type='password' onChange={val => {handleChangeConfirmPassword(val)}} />
            </Form.Item>
            <Form.Item label='用户类型' name='userType'>
              <Radio.Group>
                <Space direction='horizontal' block>
                  <Radio value='talent' block onChange={()=>handleChangeType('talent')}>牛人</Radio>
                  <Radio value='boss' block onChange={()=>handleChangeType('boss')}>老板</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
          </Form>
        </List>
        <Space direction='vertical' block>
          <Button block color='primary' onClick={handleRegisterUser}>注册</Button>
          <NavLink to='/login'><Button block color='success'>已有账号</Button></NavLink>
        </Space>
    </div>
  )
}
