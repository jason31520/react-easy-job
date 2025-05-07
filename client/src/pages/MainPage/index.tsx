import React from 'react'
import { useEffect } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import Cookies from 'js-cookie'
import NavFooter from '../../components/NavFooter'
import Explore from '../../components/Explore'
import Message from '../../components/Message'
import PersonalCenter from '../../components/PersonalCenter'

import './index.css'

export default function Register() {
  const navigate = useNavigate()
  const userId = Cookies.get('userid')
  useEffect(() => {
    if (!userId) {
      navigate('/login', {replace: true})
    }
  })

  const userType = 'talent'
  const homeTitle = userType == 'talent' ? 'Boss' : 'Talent'
  
  return (
    <div className="app">
      <div className="top">
        <NavBar backIcon={false}>{homeTitle}</NavBar>
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
