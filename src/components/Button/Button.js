import React from "react";
import { useStyles } from "./style";

export const Button = React.forwardRef(
  (
    {
      children,
      color = "PRIMARY",
      size = "LG",
      corner = "0",
      disabled = false,
      buttonType = "OUTLINE",
      textColor = "WHITE",
      ...props
    },
    ref
  ) => {
    const classes = useStyles({
      colorProps: color,
      sizeProps: size,
      cornerProps: corner,
      typeProps: buttonType,
      textColorProps: textColor,
    });
    return (
      <button className={classes.button} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
