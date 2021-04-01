import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Layout,
  Textfield,
  Form,
  FormControlWrapper,
  Button,
  Alert,
} from "../../components";

const initialValues = {
  username: "",
  password: "",
};

const onSubmit = (values, helpers) => {
  if (values.username !== "myaccount" || values.password !== "123456") {
    return helpers.setErrors({ username: "Invalid username and password" });
  }
  console.log("go to todo page");
};

const LoginSchema = Yup.object({
  username: Yup.string()
    .required("Required Username")
    .matches(/^[aA-zZ0-9]+$/, "Username must be alphanumeric characters only"),
  password: Yup.string()
    .required("Required Password")
    .matches(/^[^&^$#]+$/, "Do not use (& ^ $ #) those in password"),
});

const Login = () => {
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

  // console.log("Form Values", values);
  // console.log("Form Errors", errors);
  // console.log("Visited Fields", touched);

  return (
    <Layout>
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
          // disabled={Object.entries(errors).length > 0}
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
        })}
      </Form>
    </Layout>
  );
};

export default Login;
