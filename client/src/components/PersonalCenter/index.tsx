import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, List, Space } from 'antd-mobile'
import Cookies from 'js-cookie'
import { LoginUser } from '../../models/User'
import './index.css'

export default function PersonalCenter() {
  const navigate = useNavigate()

  const loginUserStr = Cookies.get('loginUser')
  if (!loginUserStr) {
    navigate('/login', {replace: true})
    return <div>Please login first.</div>
  }
  const loginUser: LoginUser = JSON.parse(loginUserStr)

  function handleLogout() {
    Cookies.remove('loginUser')
    navigate('/login', {replace: true})
  }
  
  return (
    <div>
      <Space block direction='vertical' align='center' style={{ '--gap': '12px', 'margin': '15px auto' }}>
        <Avatar style={{ '--size': '90px', '--border-radius': '45px' }} src='https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' />
        <div>{loginUser.username}</div>
      </Space>

      <List header='相关信息' style={{ 'marginTop': '10px' }}>
        <List.Item>职位：全栈工程师</List.Item>
        <List.Item>简介：Java / React / MySQL</List.Item>
        <List.Item>薪资：20K</List.Item>
      </List>
      
      <Button block color='danger' size='large' onClick={handleLogout}>
        退出登录
      </Button>
    </div>
  )
}
