import React from "react";
import { Alert as AlertComponent } from "@material-ui/lab";
import { useStyles } from "./style";

export const Alert = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <AlertComponent className={classes.alert} {...props}>
      {children}
    </AlertComponent>
  );
};
