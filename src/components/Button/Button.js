import React from "react";
import { useStyles } from "./style";

export const Button = ({
  children,
  color = "PRIMARY",
  size = "LG",
  corner = "0",
  disabled = false,
  buttonType = "OUTLINE",
  textColor = "WHITE",
  ...props
}) => {
  const classes = useStyles({
    colorProps: color,
    sizeProps: size,
    cornerProps: corner,
    typeProps: buttonType,
    textColorProps: textColor,
  });
  return (
    <button className={classes.button} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
