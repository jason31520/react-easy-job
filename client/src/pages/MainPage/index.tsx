import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function Register() {
  const navigate = useNavigate()
  const userId = Cookies.get('userid')
  console.log('userId', userId)
  useEffect(() => {
    if (!userId) {
      navigate('/login', {replace: true})
    }
  })
  
  return (
    <div>
      Welcome to the main page.
    </div>
  )
}
