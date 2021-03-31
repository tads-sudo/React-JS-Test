import React from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "./style";

export const Textfield = React.forwardRef(({ ...props }, ref) => {
  const classes = useStyles();

  return <TextField className={classes.textField} inputRef={ref} {...props} />;
});
