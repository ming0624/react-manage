// 函数式组件
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { IUser, IUserActionType } from '@/store/reducers/user'
import { Dispatch } from 'redux'
import React from 'react'
interface IProps {
  user?: IUser
  changeName?():void
}
const View:React.FC<IProps> = (props:IProps) => {
  console.log('22222', props.user)
  const changeUsername = () => {
    props?.changeName && props?.changeName()
  }
  return(
    <div>
      函数式组件store-&gt;
      当前登录账号：{props.user?.name}
      <button onClick={changeUsername}>change username2</button>
    </div>
  )
}
const mapStateToProps = (state:rootState) => {
  return {...state.user}
}
const mapDispatchToProps = (dispatch:Dispatch) => ({
    changeName: () => {
      dispatch({
        type: IUserActionType.CHANGE,
        payload: {
          user:{
            name: '我改了函数式名字 admin' + new Date().toLocaleString()
          }
        }
      })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(View)