import { ADD_TODO, DELETE_TODO, SET_TODOS } from "../../constants";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: {
    todo,
  },
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: {
    todos,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
