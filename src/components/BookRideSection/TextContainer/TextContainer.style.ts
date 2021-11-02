import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  wrapper: {
    width: "30%",
    transform: "translate(-100px,-80px)",
  },
  heading: {
    fontSize: 60,
    color: "#333",
    textTransform: "capitalize",
    fontFamily: "Arial",
    marginBottom: 0,
  },
  frame: {
    color: "#333",
    width: "70%",
    textAlign: "center",
    fontSize: "20px",
    "&:first-letter": {
      textTransform: "capitalize",
    },
  },
  btnWrapper: {
    marginBottom: "1rem",
    "& button": {
      background: "#afafac",
      borderRadius: "15rem",
      padding: ".75rem 2.5rem",
      margin: "0 1rem",
      border: "none",
      cursor: "pointer",
      transition: "all .2s ease-in",
      color: "white",
      fontSize: 18,
      fontFamily: 800,
      "&:hover": {
        background: "#fff",
        color: "#333",
      },
    },
  },
  fee: {
    fontSize: 17,
    color: "#333",
    width: "60%",
    textAlign: "center",
    marginTop: "1rem",
    display: "inline-block",
  },
});
export default styles;
