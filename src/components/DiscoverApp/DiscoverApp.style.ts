import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  wrapper: {
    width: "100%",
    height: "200vh",
    background: "#efefef",
    position: "relative",
  },
  txtWrapper: {
    position: "absolute",
    top: 300,
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },
  heading: {
    margin: 0,
    fontSize: 70,
    color: "#222",
    fontFamily: "sans-serif",
    "&:first-letter": {
      textTransform: "capitalize",
    },
  },
  txt: {
    width: "60%",
    textAlign: "center",
    margin: "1.5rem auto",
    fontSize: 20,
  },
  btn: {
    borderRadius: "20rem",
    color: "#efefef",
    fontSize: 18,
    padding: ".75rem 2rem",
    border: "none",
    textAlign: "center",
    margin: "auto",
    cursor: "pointer",
    background: "#333",
    transition: "all .6s ease",
    "&:hover": {
      background: "#fff",
      color: "#333",
    },
  },
  imageWrapper: {
    position: "absolute",
    top: 600,
    padding: "2rem 0",
    display: "flex",
  },
  mediaLeft: {
    marginLeft: -60,
    marginTop: "10rem",
    marginRight: ".72rem",
    display: "flex",
    flexDirection: "column",
    width: "250px",
    "& img": {
      width: "100%",
      margin: "1rem 0",
      display: "block",
    },
  },
  moveLeft: {
    display: "flex",
    margin: "0 .75rem",
    flexDirection: "column",
    width: 250,
    "& img": {
      width: "100%",
      margin: "1rem 0",
      display: "block",
    },
  },
});
export default styles;
