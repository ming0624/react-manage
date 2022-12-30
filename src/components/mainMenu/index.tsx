import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('Option 1', '/page1', <PieChartOutlined />),
//   getItem('Option 2', '/page2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];
const items: MenuItem[] = [
  {
    label: '栏目1',
    key: '/page1',
    icon: <PieChartOutlined />,
  },
  {
    label: '栏目2',
    key: '/page2',
    icon: <PieChartOutlined />,
  },
  {
    label: '栏目3',
    key: 'page3',
    children: [
      {
        label: '栏目3-1',
        key: '/page3/page3-1',
      },
      {
        label: '栏目3-2',
        key: '/page3/page3-2',
      }
    ]
  }
]
const View: React.FC = () => {
  const currPath = useLocation()
  let firstOpenKey:string = ""
  items.forEach(item => {
    if (item!['children'] != null && item!['children'].length > 0 && item!['children'].find((child:any) => child.key == currPath.pathname)) {
      firstOpenKey = item!.key as string
    } else {
      firstOpenKey = ''
    }
  })
  console.log('firstOpenKey----', firstOpenKey)
  const [openKeys, setOpenKey] = useState([firstOpenKey])
  const navigateTo = useNavigate() // 路由跳转 hook
  const menuClick = (e:any) => {
    console.log(e)
    navigateTo(e.key)
  }
  const handleOpenChange = (keys:string[]) => {
    console.log('keys', keys)
    setOpenKey([keys[keys.length - 1]])
  }
  return (
    <Menu 
      theme="dark" 
      openKeys={openKeys}
      defaultSelectedKeys={[currPath.pathname]} 
      mode="inline" items={items} 
      onClick={menuClick}
      onOpenChange={handleOpenChange}
    />
  );
};

export default View;