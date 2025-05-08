import React, { useState, useEffect } from 'react'
import { TabBar } from 'antd-mobile'
import { useLocation, useNavigate } from 'react-router-dom'
import { navFooterTabs } from '../../constants/MainPageConstants'

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

  return (
    <TabBar activeKey={activeTab} onChange={(key) => handleTabChange(key)}>
      {navFooterTabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}