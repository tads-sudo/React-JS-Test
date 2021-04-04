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
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    width: button_sizes[sizeProps].width,
    color: color[textColorProps],
    backgroundColor: color[colorProps],
    borderColor: color[colorProps],
    padding: button_sizes[sizeProps].padding,
    borderRadius: button_borders[cornerProps],
    cursor: "pointer",
    ...button_types[typeProps],
    "&:disabled": {
      backgroundColor: color.GRAY,
      borderColor: color.GRAY,
      cursor: "not-allowed",
      ...button_types[typeProps],
    },
  }),
});
