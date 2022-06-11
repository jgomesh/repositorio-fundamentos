export const LOGIN = 'LOGIN';

export const sendLoginData = (state) => ({
  type: LOGIN,
  userInfo: state,
});