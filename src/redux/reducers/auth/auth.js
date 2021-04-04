import { LOGIN, LOGOUT } from "../../constants";

const initialState = {
  userData: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userData: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};
