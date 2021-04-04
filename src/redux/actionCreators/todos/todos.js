import { ADD_TODO, DELETE_TODO } from "../../constants";
import { v4 as uuidv4 } from "uuid";

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    id: uuidv4(),
    title,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
