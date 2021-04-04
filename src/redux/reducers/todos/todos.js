import { ADD_TODO, DELETE_TODO, SET_TODOS } from "../../constants";

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
          [action.payload.todo.id]: {
            id: action.payload.todo.id,
            title: action.payload.todo.title,
          },
        },
      };

    case SET_TODOS:
      return {
        ...state,
        list: action.payload.todos,
      };

    case DELETE_TODO:
      const currentState = { ...state };
      delete currentState.list[action.payload.id];
      return currentState;

    default:
      return state;
  }
};
