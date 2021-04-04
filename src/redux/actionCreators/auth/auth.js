import { LOGIN, LOGOUT } from "../../constants";

export const login = (userdata) => {
  return {
    type: LOGIN,
    payload: userdata,
  };
};

export const logout = {
  type: LOGOUT,
};
