import React from "react";
import { useStyles } from "./style";

export const InputFieldWrapper = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.inputFieldWrapper} {...props}>
      {children}
    </div>
  );
};
