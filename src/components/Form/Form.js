import React from "react";
import { useStyles } from "./style";

export const Form = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <form className={classes.form} {...props}>
      {children}
    </form>
  );
};

export default Form;
