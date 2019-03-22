
const mutation = {
  login(state,payload){
    state.token = payload.token;
    state.user_email = payload.user_email;
    state.is_login = true;
    localStorage.setItem('token',payload.token);
    localStorage.setItem('user_email',payload.user_email);
  },
  setUser(state,payload){
    state.is_login = true;
    state.token = localStorage.getItem('token');
    state.user_email = localStorage.getItem('user_email');
    console.log(payload)
    state.user_avatar = payload.user_avatar;
  },
  clearUser(state,payload){
    state.token = '';
    state.user_email = '';
    state.is_login = false;
    localStorage.removeItem('token');
    localStorage.removeItem('user_email');
  },
  setUserAvatar(state,payload){
    state.user_avatar = payload;
  }
};

export default mutation
