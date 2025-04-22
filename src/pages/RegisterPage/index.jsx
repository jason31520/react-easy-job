import {useState} from 'react'
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

export default function Register() {
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
            <Form.Item label='确认密码' name='confirmPassword'>
              <Input placeholder='请输入确认密码' clearable type='password' onChange={val => {handleChange('confirmPassword', val)}} />
            </Form.Item>
            <Form.Item label='用户类型' name='userType'>
              <Radio.Group>
                <Space direction='horizontal' block>
                  <Radio value='1' block>
                    大神
                  </Radio>
                  <Radio value='2' block>
                    老板
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
          </Form>
        </List>
        <Space direction='vertical' block>
          <Button block color='primary'>注册</Button>
          <Button block color='success'>已有账号</Button>
        </Space>
    </div>
  )
}
