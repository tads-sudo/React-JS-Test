import React from "react";
import { useStyles } from "./style";

export const Form = ({ children }) => {
  const classes = useStyles();
  return <form className={classes.form}>{children}</form>;
};

export default Form;
