import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  form: {
    display: "flex",
    width: "90%",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    form: {
      display: "flex",
      width: "50%",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    form: {
      display: "flex",
      width: "25%",
    },
  },
});
