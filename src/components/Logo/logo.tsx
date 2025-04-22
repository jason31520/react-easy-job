import React from 'react'
import {Image} from 'antd-mobile'
import logo from './logo.jpg'
import './logo.less'

export default function Logo() {
  return (
    <div className="logo-container">
      <Image src={logo} />
    </div>
  )
}
