import App from '@/App'
import React, { lazy } from 'react'
import DefaultLayout from '@/views/defaultLayout'
import Login from '@/views/Login'
const About = lazy(() => import('@/views/about'))
const User = lazy(() => import('@/views/user'))
const Page1 = lazy(() => import('@/views/page1'))
const Page2 = lazy(() => import('@/views/page2'))
const Page301 = lazy(() => import('@/views/page301'))
// 组件形式的写法
import { Navigate } from 'react-router-dom'
const loadingComp =(comp:JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>
   {comp}
  </React.Suspense>
)
const routes = [
  {
    path: '/',
    element: <Navigate to="/page1" />
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/page1',
        element: loadingComp(<Page1 />)
      },
      {
        path: '/page2',
        element: loadingComp(<Page2 />)
      },
      {
        path: '/page3/page3-1',
        element: loadingComp(<Page301 />)
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to="/page1" />
  }
]


export default routes