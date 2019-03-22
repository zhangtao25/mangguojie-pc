function restApiErrorHandler(err, reject) {
  reject(window.gApp.$errMsg(err.response.data.errid))
}

export default {
  restApiErrorHandler
}
