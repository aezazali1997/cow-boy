import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  container: {
    background: "#e5e5e1",
    padding: "2rem",
  },
  cowboy: {
    fontSize: 26,
    fontFamily: "Arial",
    color: "#333",
  },
  heading: {
    fontSize: 32,
    color: "#000",
    fontFamily: "Arial",
    fontWeight: 500,
    width: "30%",
  },
  btn: {
    color: "#f8f9f9",
    borderRadius: "15rem",
    padding: "1rem 2rem",
    background: "#333",
    border: "none",
    fontSize: 18,
    cursor: "pointer",
    transition: "all .3s ease",
    "&:first-letter": {
      textTransform: "capitalize",
    },
    "&:hover": {
      color: "#333",
      background: "#f8f9f9",
    },
  },
  imgContainer: {
    display: "flex",
    margin: "1rem 0",
    justifyContent: "center",
    "& div": {
      width: "50%",
      height: "500px",
      overflow: "hidden",
      margin: "0 1rem",
      position: "relative",
      cursor: "pointer",
      "&:after": {
        content: '""',
        position: "absolute",
        background: "rgba(0,0,0,.4)",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        opacity: 0,
        transition: "all .2s ease",
      },
      "&:hover": {
        "& $span": {
          opacity: 1,
          transform: "translate(0)",
        },
        "&:after": {
          opacity: 1,
        },
      },
      "&:nth-child(1)": {
        marginLeft: "0",
      },
      "& img": {
        width: "100%",
        display: "block",
        transform: "scale(1.2)",
      },
      "& h1": {
        fontSize: 30,
        position: "absolute",
        bottom: 10,
        fontFamily: "Arial",
        fontWeight: 700,
        display: "flex",
        left: "30px",
        textTransform: "capitalize",
        color: "#fff",
        zIndex: 1,
      },
      "& span": {
        position: "absolute",
        right: 30,
        bottom: 20,
        color: "#fff",
        fontSize: 40,
        opacity: 0,
        transform: "translateX(-20px)",
        transition: "all .3s ease",
        zIndex: 1,
      },
    },
  },
});
export default styles;
