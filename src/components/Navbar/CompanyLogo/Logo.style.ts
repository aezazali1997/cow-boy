import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  title: {
    fontSize: "2.5rem",
    color: "white",
    fontFamily: "Arial",
    textTransform: "uppercase",
    textDecoration: "none",
    paddingRight: "0",
    "& > sub": {
      fontSize: "1.5rem",
    },
  },
});
export default styles;
