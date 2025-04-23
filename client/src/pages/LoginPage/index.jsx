import {useState} from 'react'
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

export default function Login() {
  const [user, setUser] = useState({})

  function handleChange(name, val) {
    let newUser = {...user}
    newUser[name] = val
    setUser(newUser)
  }

  return (
    <div>
      <NavBar backIcon={false}>Easy&nbsp;Job</NavBar>
      <Logo />
        <List>
          <Form layout='horizontal'>
            <Form.Item label='用户名' name='username'>
              <Input placeholder='请输入用户名' clearable onChange={val => {handleChange('username', val)}} />
            </Form.Item>
            <Form.Item label='密码' name='password'>
              <Input placeholder='请输入密码' clearable type='password' onChange={val => {handleChange('password', val)}} />
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
