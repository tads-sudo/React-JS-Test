import React from "react";
import { useStyles } from "./style";

export const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <main className={classes.main}>{children}</main>
    </div>
  );
};
