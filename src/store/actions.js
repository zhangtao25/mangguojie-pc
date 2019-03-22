const action = {
  login({commit},payload){
    commit("login",payload)
  },
  setUser({commit},payload){
    commit("setUser",payload)
  },
  clearUser({commit},payload){
    commit("clearUser",payload)
  },
  setUserAvatar({commit},payload){
    commit("setUserAvatar",payload)
  }
}
export default action
