import React from 'react'
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import Cookies from 'js-cookie'
import { LoginUser } from '../../models/User'
import NavFooter from '../../components/NavFooter'
import Explore from '../../components/Explore'
import Message from '../../components/Message'
import UserCenter from '../../components/UserCenter'
import { navFooterTabs } from '../../constants/MainPageConstants'
import './index.css'

export default function Register() {
  const navigate = useNavigate()
  const location = useLocation()

  let exploreTitle = ''
  let navBarTitle = ''
  const loginUserStr = Cookies.get('loginUser')
  
  if (loginUserStr) {
    const loginUser: LoginUser = JSON.parse(loginUserStr)
    exploreTitle = loginUser.type === 'talent' ? '职位列表' : '大神列表'
  } else {
    navigate('/login', {replace: true})
  }

  let localtionPath = location.pathname
  if (localtionPath === '/') {
    localtionPath = '/userCenter'
  }

  const targetTab = navFooterTabs.filter(item => item.key == localtionPath)[0]
  navBarTitle = targetTab.headerTitle
  if (location.pathname === '/explore') {
    navBarTitle = exploreTitle
  }
  
  return (
    <div className='app'>
      <div className='top'>
        <NavBar backIcon={false}>{navBarTitle}</NavBar>
      </div>
      <div className='body'>
        <Routes>
          <Route path='/explore' element={<Explore />} />
          <Route path='/message' element={<Message />} />
          <Route path='/userCenter' element={<UserCenter />} />
          <Route path='*' element={<UserCenter />}></Route>
        </Routes>
      </div>
      <div className='bottom'>
        <NavFooter />
      </div>
    </div>
  )
}
