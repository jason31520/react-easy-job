import React from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import Cookies from 'js-cookie'
import { LoginUser } from '../../models/User'
import NavFooter from '../../components/NavFooter'
import Explore from '../../components/Explore'
import Message from '../../components/Message'
import PersonalCenter from '../../components/PersonalCenter'

import './index.css'

export default function Register() {
  const navigate = useNavigate()
  const loginUserStr = Cookies.get('loginUser')
  let exploreTitle
  if (loginUserStr) {
    const loginUser: LoginUser = JSON.parse(loginUserStr);
    exploreTitle = loginUser.type == 'talent' ? 'Boss' : 'Talent'
  } else {
    navigate('/login', {replace: true})
  }
  
  return (
    <div className="app">
      <div className="top">
        <NavBar backIcon={false}>{exploreTitle}</NavBar>
      </div>
      <div className="body">
        <Routes>
          <Route path='/explore' element={<Explore />} />
          <Route path='/message' element={<Message />} />
          <Route path='/me' element={<PersonalCenter />} />
        </Routes>
      </div>
      <div className="bottom">
        <NavFooter />
      </div>
    </div>
  )
}
