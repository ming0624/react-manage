// react与hooks 结合
import { useSelector, useDispatch} from 'react-redux'
import {rootState} from '../../store'
import { IUserActionType } from '../../store/reducers/user'
const View = () => {
  const {user} = useSelector((state:rootState) => state.user)
  const dispatch = useDispatch()
  const changeUsername = () => {
    dispatch({
      type: IUserActionType.CHANGE,
      payload: {
        user:{
          name: '我改了hooks名字 admin' + new Date().toLocaleString()
        }
      }
    })
  }
  return(
    <>
      hooks:store-&gt;{user.name}
      <button onClick={changeUsername}>change username3</button>
    </>
  )
}

export default View