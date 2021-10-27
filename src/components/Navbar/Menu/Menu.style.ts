import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  list: {
    "& > li": {
      display: "inline-block",
      margin: "0 .8rem",
      "& a": {
        color: "#fff",
        textTransform: "uppercase",
        textDecoration: "none",
        fontFamily: "Arial",
        fontSize: ".8rem",
        fontWeight: 700,
        transition: "all .2s ease-in-out",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
  order: {
    background: "#fff",
    color: "gray",
    borderRadius: "20rem",
    border: "black",
    padding: "1rem 2rem",
    marginLeft: "1rem",
    fontWeight: 700,
    transition: "all .2s ease-in-out",
    textDecoration: "none",
    fontFamily: "Arial",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "rgb(45, 47, 45)",
      color: "#fff",
    },
  },
});
export default styles;
