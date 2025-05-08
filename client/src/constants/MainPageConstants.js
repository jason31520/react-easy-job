import { EyeOutline, MessageOutline, UserOutline } from 'antd-mobile-icons'

export const navFooterTabs = [
    {
      key: '/explore',
      title: '探索',
      headerTitle: '',
      icon: <EyeOutline />,
    },
    {
      key: '/message',
      title: '消息',
      headerTitle: '消息',
      icon: <MessageOutline />,
    },
    {
      key: '/userCenter',
      title: '我的',
      headerTitle: '用户中心',
      icon: <UserOutline />,
    },
  ]