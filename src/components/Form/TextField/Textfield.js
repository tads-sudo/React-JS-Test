import React from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "./style";

export const Textfield = ({ ...props }) => {
  const classes = useStyles();

  return <TextField className={classes.textField} {...props} />;
};
