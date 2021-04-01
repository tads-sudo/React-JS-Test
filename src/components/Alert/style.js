import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  alert: {
    "& .MuiAlert-message": {
      display: "flex",
      flexDirection: "column",
    },
  },
});
