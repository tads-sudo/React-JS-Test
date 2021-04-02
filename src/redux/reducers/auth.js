import * as types from "../constants/action-types";

const initialState = {
  data: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        data: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};
