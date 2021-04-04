import { createUseStyles } from "react-jss";
import { SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  headingSection: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "auto auto",
    gap: "30px",
    alignSelf: "start",
    width: "100%",
    marginBottom: "30px",
  },
  title: {
    fontSize: "1rem",
    margin: "0",
    height: "none",
    padding: "0.5rem",
  },
  inputAndButton: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: "12px",
    marginBottom: "30px",
  },
  todos: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0",
    margin: "0",
  },
  todo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5px",
    marginBottom: "8px",
  },
  todoText: {
    flex: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "0",
    marginRight: "20px",
    hyphens: "auto",
    wordBreak: "break-all",
  },
  [`@media(min-width:${SCREEN_TABLET.MIN}px)`]: {
    container: {
      width: "75%",
      height: "75%",
    },
    headingSection: {
      display: "flex",
      alignSelf: "start",
      justifyContent: "space-between",
    },
    title: {
      fontSize: "1.6rem",
    },
    inputAndButton: {
      display: "flex",
      width: "100%",
      gap: "80px",
    },
    todo: {
      padding: "0",
    },
  },
  [`@media(min-width:${SCREEN_DESKTOP.MIN}px)`]: {
    container: {
      width: "40%",
      height: "80%",
    },
    todo: {
      "& button": {
        display: "none",
      },
      "&:hover button": {
        display: "flex",
      },
    },
  },
});
