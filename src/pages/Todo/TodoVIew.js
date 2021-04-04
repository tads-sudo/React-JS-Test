import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useStyles } from "./style";
import { logout, addTodo, deleteTodo } from "../../redux/actionCreators";
import { Layout, Button, Form, Textfield } from "../../components";

const TodoView = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { auth, todos } = useSelector((state) => state);

  const todosAsArray = useMemo(() => Object.values(todos.list), [todos]);

  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("user");

    dispatch(logout);

    history.push("/login");
  };

  const todoSchema = Yup.object({
    todo: Yup.string().required("Please input todo"),
  });

  const onSubmit = ({ todo }, helper) => {
    const todoItem = {
      id: uuidv4(),
      title: todo,
    };
    dispatch(addTodo(todoItem));
    localStorage.setItem(
      "todos",
      JSON.stringify({
        ...todos.list,
        [todoItem.id]: {
          id: todoItem.id,
          title: todoItem.title,
        },
      })
    );

    helper.resetForm();
  };

  const initialValues = {
    todo: "",
  };

  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    onSubmit,
    initialValues,
    validationSchema: todoSchema,
    validateOnChange: false,
  });

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.headingSection}>
          <h1 className={classes.title}>{auth.userData.username} todo list</h1>
          <Button onClick={handleLogout} buttonType="FILL" corner="8" size="SM">
            Logout
          </Button>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className={classes.inputAndButton}>
            <Textfield
              id="todo"
              label="To do"
              name="todo"
              variant="outlined"
              onChange={handleChange}
              value={values.todo}
              onBlur={handleBlur}
              error={touched.todo && !!errors.todo}
              helperText={touched.todo && errors.todo}
            />
            <Button buttonType="FILL" corner="8" size="XL" type="submit">
              Add
            </Button>
          </div>
        </Form>
        <ul className={classes.todos}>
          {todosAsArray.map((todo) => {
            return (
              <li key={todo.id} className={classes.todo}>
                <p className={classes.todoText}>{todo.title}</p>
                <Button
                  buttonType="FILL"
                  color="ERROR"
                  size="SM"
                  corner="8"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default TodoView;
