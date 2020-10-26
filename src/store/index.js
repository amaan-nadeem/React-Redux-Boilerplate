import { combineReducers } from 'redux'
import LoginActions from './actions/LoginActions'
import loginReducer from './reducers/loginReducer'

const appReducer = combineReducers({
  user: loginReducer,
})

const rootReducer = (state, action) => {
  if (action.type === LoginActions.LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
