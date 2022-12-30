import React , { Component }from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { rootState } from '@/store'
import { IUser, IUserActionType } from '@/store/reducers/user'

interface IProps {
  user?: IUser
  changeName?():void
}

class Example extends Component<IProps>{
  changeUsername = () => {
    this.props?.changeName && this.props?.changeName()
  }
  render(){
    console.log('props---',this.props);
    return(
      <div>
        Class组件store-&gt;
        当前登录用户:{this.props.user?.name}
        <button onClick={this.changeUsername}>change username1</button>
      </div>
    )
  }
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
            name: '我改了Class名字 admin' + new Date().toLocaleString()
          }
        }
      })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Example)