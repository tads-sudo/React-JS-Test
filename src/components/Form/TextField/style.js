import { createUseStyles } from "react-jss";
import { color } from "../../../theme";

export const useStyles = createUseStyles({
  textField: {
    width: "100%",
    "& input": {
      color: color.BLACK,
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "8px",
      caretColor: color.TERTIARY,
    },
    "& label": {
      color: color.GRAY,
    },
    "& label.Mui-focused": {
      color: color.PRIMARY,
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: color.GRAY,
        borderRadius: "8px",
        transitionDuration: "0.2s",
      },
      "&:hover fieldset": {
        borderColor: color.PRIMARY,
        transitionDuration: "0.2s",
      },
      "&.Mui-focused fieldset": {
        borderColor: color.PRIMARY,
      },
    },
  },
});
