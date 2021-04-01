import React from "react";
import { useStyles } from "./style";

export const FormControlWrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.FormControlWrapper}>{children}</div>;
};
