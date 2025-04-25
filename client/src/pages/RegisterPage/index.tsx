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
import {User} from '../../models/User'
import {register} from '../../redux/actions'



let user = new User('', '', '', 'talent')
export default function Register() {
  function changeUserInfo(name: string, val: string) {
    user = {...user, [name]: val}
    console.log(user)
  }

  function changeUserType(type: string) {
    changeUserInfo('type', type)
  }

  function registerUser() {
    register(user)
  }

  return (
    <div>
      <NavBar backIcon={false}>Easy&nbsp;Job</NavBar>
      <Logo />
        <List>
          <Form layout='horizontal' initialValues={user}>
            <Form.Item label='用户名' name='username'>
              <Input placeholder='请输入用户名' onChange={val => {changeUserInfo('username', val)}} />
            </Form.Item>
            <Form.Item label='密码' name='password'>
              <Input placeholder='请输入密码' type='password' onChange={val => {changeUserInfo('password', val)}} />
            </Form.Item>
            <Form.Item label='确认密码' name='confirmPassword'>
              <Input placeholder='请输入确认密码' type='password' onChange={val => {changeUserInfo('confirmPassword', val)}} />
            </Form.Item>
            <Form.Item label='用户类型' name='userType'>
              <Radio.Group>
                <Space direction='horizontal' block>
                  <Radio value='talent' block onChange={()=>changeUserType('talent')}>牛人</Radio>
                  <Radio value='boss' block onChange={()=>changeUserType('boss')}>老板</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
          </Form>
        </List>
        <Space direction='vertical' block>
          <Button block color='primary' onClick={registerUser}>注册</Button>
          <NavLink to='/login'><Button block color='success'>已有账号</Button></NavLink>
        </Space>
    </div>
  )
}
