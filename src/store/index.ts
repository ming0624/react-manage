import { applyMiddleware, legacy_createStore } from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'
 export type rootState = ReturnType<typeof reducers>
// 方式1 查看redux state跟踪
// const store = legacy_createStore(reducers, composeWithDevTools(applyMiddleware()))

// 方式二 查看redux state跟踪
const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store