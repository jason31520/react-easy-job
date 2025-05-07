import React, { useState, useEffect } from 'react'
import { TabBar } from 'antd-mobile'
import { useLocation, useNavigate } from 'react-router-dom'
import { EyeOutline, MessageOutline, UserOutline } from 'antd-mobile-icons'

export default function NavFooter() {
  const [activeTab, setActiveTab] = useState<string>('/explore')
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    setActiveTab(location.pathname)
  }, [location.pathname])

  const handleTabChange = (key: string) => {
    setActiveTab(key)
    navigate(key)
  }

  const tabs = [
    {
      key: '/explore',
      title: '探索',
      icon: <EyeOutline />,
    },
    {
      key: '/message',
      title: '消息',
      icon: <MessageOutline />,
    },
    {
      key: '/me',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={activeTab} onChange={(key) => handleTabChange(key)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}