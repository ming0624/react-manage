import { useState, useEffect } from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import { Outlet, useRoutes, Link, useLocation, useNavigate } from 'react-router-dom'
import routes from './router'
import { message } from 'antd'
function ToLogin() {
  const navigateTo = useNavigate()
  useEffect(()=> {
    navigateTo('/login')
    message.warning('登录已过期，请登录！')
  },[])
  return(
    <></>
  )
}
function ToPage() {
  const navigateTo = useNavigate()
  useEffect(()=> {
    navigateTo('/page1')
    message.success('你已登录')
  },[])
  return(
    <></>
  )
}
function BeforeRouterEnter () {
  const RouteLink = useRoutes(routes)
  const location = useLocation()
  const token = localStorage.getItem('Token')
  if (location.pathname == '/login' && token) {
    return <ToPage />
  }

  if (location.pathname !== '/login' && !token) {
    return <ToLogin />
  }
  return RouteLink
}
function App() {
  
  return (
    <div className="App">
      {/* 顶级组件
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Link to='/home'>home</Link> | <Link to="/about">about</Link> | <Link to="/user">user</Link> */}
      {/* <Outlet></Outlet> */}
      {/* {RouteLink} */}
      <BeforeRouterEnter />
    </div>
  )
}

export default App
