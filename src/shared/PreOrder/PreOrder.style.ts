import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    hegiht: 50,
    borderTop: "1px solid rgba(255,255,255,.2)",
    background: "transparent",
    padding: "0 3rem",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all .2s ease-in-out",
    "&:hover": {
      background: "#333333",
      border: "none",
      cursor: "pointer",
    },
    "& h2": {
      color: "#fff",
      fontFamily: "Arial",
    },
  },
});
export default styles;
