import { createUseStyles } from "react-jss";
import { SCREEN_TABLET } from "../../../theme";

export const useStyles = createUseStyles({
  FormControlWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "24px",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    FormControlWrapper: {
      width: "100%",
    },
  },
});
