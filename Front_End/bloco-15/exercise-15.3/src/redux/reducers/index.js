import { LOGIN } from "../actions";

const INITIAL_STATE = {
  logged: false,
}

const userLoggedReducer = (state = INITIAL_STATE, action) => {
  const { userInfo } = action;
  switch (action.type) {
  case LOGIN:
    return {
      ...userInfo,
    }
  default:
    return state;
  }
}

export default userLoggedReducer;
