import axios from 'axios'
import ErrorHandler from './../common/error-handler'

function login(user_email, user_password) {
  return new Promise((resolve, reject) => {
    let req = {
      user_email,
      user_password
    };
    axios.post("/api/auth/common", req).then((res) => {
      resolve(res.data)
    }, res => {
      ErrorHandler.restApiErrorHandler(res, reject)
    })
  })
}

function autoLogin() {
  return new Promise((resolve, reject) => {
    let req = {
      user_phone: localStorage.getItem('user_phone'),
      token: localStorage.getItem('token')
    };
    axios.post("/api/auth/token", req).then((res) => {
      resolve(res.data)
    },res => {
      ErrorHandler.restApiErrorHandler(res, reject)
    })
  })
}

export default {
  login,
  autoLogin
}
