import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  wrapper: {
    background: "#1d1d1d",
    padding: 0,
  },
  links: {
    padding: "4rem",
    display: "flex",
    justifyContent: "space-between",
    "& div": {
      "& span": {
        fontSize: 22,
        color: "gray",
        display: "inline-block",
        marginBottom: "1rem",
      },
      "& ul": {
        margin: ".5rem 0",
        paddingInlineStart: 0,
        listStyle: "none",
        "& li": {
          color: "#efefef",
          margin: "1rem 0",
          fontSize: 16,
          fontFamily: "Arial",
          fontWeight: 700,
          textTransform: "capitalize",
        },
      },
    },
  },
  form: {
    width: "30%",
  },
  title: {
    fontSize: 52,
    color: "#efefef",
    fontWeight: 500,
    fontFamily: "sans-serif",
    padding: "1rem 4rem",
    margin: 0,
    borderBottom: "1px solid rgba(255,255,255.3)",
    textTransform: "uppercase",
  },
  terms: {},
  termsLinks: {
    display: "flex",
    "& a": {
      display: "block",
      color: "#efefef",
      margin: "0 1rem",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  termAndConditions: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 4rem",
  },
  select: {
    background: "transparent",
    color: "#efefef",
    border: "1px solid gray",
    padding: ".3rem 1rem",
    borderRadius: "5px",
    "&:focus": {
      outline: "none",
    },
    "& option": {
      color: "#000",
    },
  },
  email: {
    background: "transparent",
    color: "#efefef",
    fontSize: "1.2em",
    width: "80%",
    borderRight: "none",
    borderBottom: "1px solid #efefef",
    padding: "5px 0 5px 5px",
    "&:focus": {
      outline: "none",
    },
  },
  submit: {
    fontSize: "1.2em",
    paddingBottom: "5px",
    background: "transparent",
    color: "#efefef",
    border: "none",
    borderBottom: "1px solid #efefef",
    cursor: "pointer",
  },
  "@media screen and (max-width:768px)": {
    links: {
      flexDirection: "column",
    },
  },
});
export default styles;
