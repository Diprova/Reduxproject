import {
  LOAD_USERS,
  REGISTER_SUCCES,
  REGISTER_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT,
} from "../action/types";

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: true,
  token: localStorage.getItem("token"),
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USERS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCES:
    case REGISTER_SUCCES:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        isAuthenticated: false,
        loading: false,
        user: {},
      };

    default:
      return state;
  }
}
