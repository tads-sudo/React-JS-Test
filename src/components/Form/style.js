import { createUseStyles } from "react-jss";
import { SCREEN_TABLET } from "../../theme";

export const useStyles = createUseStyles({
  form: {
    display: "flex",
    padding: "0 12px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    form: {
      padding: "0",
    },
  },
});
