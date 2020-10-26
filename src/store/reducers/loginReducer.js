import LoginActions from 'store/actions/LoginActions'

const initialState = {
  success: false,
  isLoading: false,
  isError: false,
  successMessage: null,
  errorMessage: null,
  userData: null,
  isLogout: false,
  isLoggedIn: false,
  resetPassword: false,
  isResetEmailSent: false,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginActions.LOGIN:
      return {
        ...state,
        isLoading: true,
        isError: false,
        success: false,
      }
    case LoginActions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: action.data,
        successMessage: action.message,
        isError: false,
        success: true,
        isLoggedIn: true,
        errorMessage: null,
      }
    case LoginActions.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.message,
        isError: true,
        success: false,
      }
    case LoginActions.RESET_PASSWORD:
      return {
        ...state,
        resetPassword: !state.resetPassword,
      }
    case LoginActions.RESET_EMAIL_SENT:
      return {
        ...state,
        isResetEmailSent: !state.isResetEmailSent,
      }
    case LoginActions.SET_LOGOUT_FALSE:
      return {
        ...state,
        isLogout: false,
      }

    default:
      return state
  }
}

export default loginReducer
