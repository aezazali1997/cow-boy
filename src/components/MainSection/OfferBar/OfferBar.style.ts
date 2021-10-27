import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  offerBar: {
    background: "gray",
    width: "100%",
    height: 48,
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    backgroundColor: "rgb(45, 47, 45)",
    transition: "all .3s ease-in-out",
    fontWeight: 500,
    fontFamily: "Suisse Intl, Sans-serif",

    "&:hover": {
      backgroundColor: "#000000",
      cursor: "pointer",
    },
    "& > p": {
      width: "100%",
      textAlign: "center",
    },
    "& > button": {
      background: "transparent",
      color: "#fff",
      marginRight: "25px",
      border: "none",
      transition: "all .3s ease-in",
      cursor: "pointer",
      size: "1.2rem",
      "&:hover": {
        outline: "1px solid #fff",
      },
    },
    "& > p > a": {
      textDecoration: "underline",
      color: "#fff",
    },
  },
});
export default styles;
