class LoginActions {
  static LOGIN = 'LOGIN'
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS'
  static LOGIN_FAILURE = 'LOGIN_FAILURE'
  static LOGOUT = 'LOGOUT'
  static SET_LOGOUT_FALSE = 'SET_LOGOUT_FALSE'
  static RESET_PASSWORD = 'RESET_PASSWORD'
  static RESET_EMAIL = 'RESET_EMAIL'
  static RESET_EMAIL_SENT = 'RESET_EMAIL_SENT'
  static RESET_EMAIL_FAILED = 'RESET_EMAIL_FAILED'

  static login(data) {
    return {
      type: this.LOGIN,
      data,
    }
  }

  static loginSuccess({ data, message }) {
    return {
      type: this.LOGIN_SUCCESS,
      data,
      message,
    }
  }

  static loginFailure({ data, message }) {
    return {
      type: this.LOGIN_FAILURE,
      data,
      message,
    }
  }

  static logout() {
    return {
      type: this.LOGOUT,
    }
  }

  static resetPassword() {
    return {
      type: this.RESET_PASSWORD,
    }
  }

  static resetEmail() {
    return {
      type: this.RESET_EMAIL,
    }
  }

  static resetEmailSent() {
    return {
      type: this.RESET_EMAIL_SENT,
    }
  }

  static resetEmailFailed(message) {
    return {
      type: this.RESET_EMAIL_FAILED,
      payload: { errorMessage: message },
    }
  }

  static setLogoutFalse() {
    return {
      type: this.SET_LOGOUT_FALSE,
    }
  }
}

export default LoginActions
