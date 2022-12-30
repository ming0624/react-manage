export interface IUser {
  id:number
  name:string
}
interface IState {
  user:IUser
}

const InitUserState: IState = {
  user:{
    id: 1,
    name:"admin"
  }
}
export enum IUserActionType {
  INIT,
  CHANGE
}
const user = (state:IState = InitUserState, action:{type:IUserActionType, payload:any}) => {
  switch (action.type) {
    case IUserActionType.INIT:
      return state;
    case IUserActionType.CHANGE:
        return {...state, ...action.payload};
    default:
      return state;
  }
  return state
}

export default user