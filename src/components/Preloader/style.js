import { createUseStyles } from "react-jss";
import { color, SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  loader: {
    width: "15em",
    height: "60px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: color.BLACK,
    fontSize: "1.25em",
    fontWeight: "bold",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    loader: {
      fontSize: "2.875em",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    loader: {
      fontSize: "3.8125em",
      letterSpacing: "0.0975em",
    },
  },
});
