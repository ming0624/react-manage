import { ChangeEvent, useEffect, useState } from 'react'
import { Button, Input, Space, message } from 'antd'
import  style from './index.module.scss'
import initDraw from './drawStars.ts'
import captchaImg from '@/assets/react.svg'
import { captchaImgApi, loginApi } from '@/api/login'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigateTo = useNavigate()
  useEffect(() => {
    initDraw()
    window.onresize = () => {
      initDraw()
    }
  },[])

  const [userNameVal, setUserName] = useState('')
  const [passwordVal, setPassword] = useState('')
  const [captchaVal, setCaptcha] = useState('')
  
  const userNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setUserName(e.target.value)
  }
  const passwordChange = (e:ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setPassword(e.target.value)
  }
  const captchaChange = (e:ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setCaptcha(e.target.value)
  }
  //登录
  const btnClick = async () => {
    if (!userNameVal.trim() || !passwordVal.trim()) {
      message.warning('请输入用户名或密码')
      return
    }
    let res = await loginApi({userName: userNameVal, password: passwordVal})

      console.log(res)
      if (res.code == 200) {
        message.success('登录成功，正在跳转...', 1).then(close => {
          localStorage.setItem('Token',res.token)
          navigateTo('/page1')
        })
      }
  }
  const getCaptchaImg = () => {
    console.log(333)
    captchaImgApi().then(res => {
      console.log(res)
    })
  }
  return(
    <div className={style.loginPage}>
      <canvas id='canvas' style={{display:'block'}}></canvas>
      <div className={style.loginBox}>
        <h1 className={style.title}>Admin&nbsp;·&nbsp;管理系统</h1>
        <div className='loginForm'>
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
          <Input placeholder='用户名:admin' maxLength={11} onChange={userNameChange} />
          <Input.Password placeholder='密码:admin123' maxLength={18} onChange={passwordChange} />
          {/* <div className={style.captchaBox}>
            <Input placeholder='验证码' maxLength={6} onChange={captchaChange} />
            <div className={style.captchaImg} onClick={getCaptchaImg}>
              <img height='30' src={captchaImg} alt=''/>
            </div>
          </div> */}
          <Button type="primary" block onClick={btnClick}>登录</Button>
        </Space>
        </div>
      </div>
    </div>
  )
}

export default Login