import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css' // 样式初始化放在最前导入
import '@/assets/style/global.scss'
import App from './App'
// import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <Router /> */}
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  ,
)
