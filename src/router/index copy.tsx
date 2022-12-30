import App from '../App'
import Home from '../views/defaultLayout'
import About from '../views/about'
// 组件形式的写法
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        {/* 重定向 Navigate */}
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default baseRouter