import * as types from "../constants/action-types";

export const login = (userdata) => {
  return {
    type: types.LOGIN,
    payload: userdata,
  };
};

export const logout = {
  type: types.LOGOUT,
};
