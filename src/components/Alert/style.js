import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  alert: {
    marginBottom: "2px",
    "& .MuiAlert-message": {
      display: "flex",
      flexDirection: "column",
    },
  },
});
