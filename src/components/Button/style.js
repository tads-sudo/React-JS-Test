import { createUseStyles } from "react-jss";
import { color, button_borders, button_sizes, button_types } from "../../theme";

export const useStyles = createUseStyles({
  button: ({
    colorProps,
    sizeProps,
    cornerProps,
    typeProps,
    textColorProps,
  }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    width: button_sizes[sizeProps].width,
    color: color[textColorProps],
    backgroundColor: color[colorProps],
    borderColor: color[colorProps],
    padding: button_sizes[sizeProps].padding,
    borderRadius: button_borders[cornerProps],
    cursor: "pointer",
    transitionDuration: "0.1s",
    ...button_types[typeProps],
    "&:hover": {
      transform: "scale(1.05)",
      transitionDuration: "0.1s",
    },
  }),
});
