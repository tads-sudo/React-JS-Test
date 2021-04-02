import React from "react";
import { useStyles } from "./style";

export const Preloader = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.loader}>LOADING</div>
    </>
  );
};
