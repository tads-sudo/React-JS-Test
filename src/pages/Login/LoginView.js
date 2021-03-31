import React from "react";
import {
  Layout,
  Textfield,
  Form,
  InputFieldWrapper,
  Button,
} from "../../components";

const Login = () => {
  return (
    <Layout>
      <Form>
        <InputFieldWrapper>
          <Textfield id="username" label="Username" variant="outlined" />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <Textfield
            id="password"
            label="Password"
            type="password"
            variant="outlined"
          />
        </InputFieldWrapper>
        <Button buttonType="FILL" corner="8" size="STRETCH_XL">
          Login
        </Button>
      </Form>
    </Layout>
  );
};

export default Login;
