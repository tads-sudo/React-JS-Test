import React from "react";
import { useHistory } from "react-router-dom";
import {
  Layout,
  Textfield,
  Form,
  FormControlWrapper,
  Button,
  Alert,
} from "../../components";
import { useStyles } from "./style";
import { user } from "../../data";
import { login } from "../../redux/actionCreators";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    username: "",
    password: "",
  };

  const LoginSchema = Yup.object({
    username: Yup.string()
      .required("Required Username")
      .matches(
        /^[aA-zZ0-9]+$/,
        "Username must be alphanumeric characters only"
      ),
    password: Yup.string()
      .required("Required Password")
      .matches(/^[^&^$#]+$/, "Do not use (& ^ $ #) those in password"),
  });

  const onSubmit = (values, helpers) => {
    if (
      values.username !== user.username ||
      values.password !== user.password
    ) {
      return helpers.setErrors({ username: "Invalid username or password" });
    }

    const modifiedUser = { ...user };
    delete modifiedUser.password;
    localStorage.setItem("user", JSON.stringify(modifiedUser));

    dispatch(login(modifiedUser));

    history.push("/todo");
  };

  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    handleBlur,
    touched,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: LoginSchema,
    validateOnChange: false,
  });

  return (
    <Layout>
      <div className={classes.form}>
        <Form onSubmit={handleSubmit}>
          <FormControlWrapper>
            <Textfield
              id="username"
              label="Username"
              name="username"
              variant="outlined"
              onChange={handleChange}
              value={values.username}
              onBlur={handleBlur}
            />
          </FormControlWrapper>
          <FormControlWrapper>
            <Textfield
              id="password"
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
          </FormControlWrapper>
          <Button
            buttonType="FILL"
            corner="8"
            size="STRETCH_XL"
            type="submit"
            style={{ marginBottom: "24px" }}
          >
            Login
          </Button>
          {Object.entries(errors).map((error, errorIndex) => {
            const [key, value] = error;
            if (touched[key]) {
              return (
                <Alert
                  key={`error-${errorIndex}`}
                  icon={false}
                  variant="filled"
                  severity="error"
                >
                  {value}
                </Alert>
              );
            }
            return null;
          })}
        </Form>
      </div>
    </Layout>
  );
};

export default Login;
