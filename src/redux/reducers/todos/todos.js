import { ADD_TODO, DELETE_TODO } from "../../constants";
// import { v4 as uuidv4 } from "uuid";

let initialState = {
  list: {
    mads1: {
      id: "mads1",
      title: "to do 1",
    },
    mads2: {
      id: "mads2",
      title: "to do 2",
    },
    mads3: {
      id: "mads3",
      title: "to do 3",
    },
    mads4: {
      id: "mads4",
      title: "to do 4",
    },
    mads5: {
      id: "mads5",
      title: "to do 5",
    },
  },
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.id]: {
            id: action.payload.id,
            title: action.payload.title,
          },
        },
      };

    case DELETE_TODO:
      const currentState = { ...state };
      delete currentState.list[action.payload.id];
      return currentState;

    default:
      return state;
  }
};
