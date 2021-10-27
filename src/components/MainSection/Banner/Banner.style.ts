import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  imgContainer: {
    width: "100%",
    height: "calc(100vh - 85px)",
    overflow: "hidden",
    background: "linear-gradient(#272926,#323232)",
  },
  image: {
    width: "100%",
    display: "block",
    position: "relative",
    top: 500,
    transform: "scale(1.7)",
  },
  exploreContainer: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > h1": {
      fontSize: "5rem",
      color: "#fff",
      fontFamily: "Arial",
      fontWeight: 400,
      marginBottom: 0,
    },
    "& h3": {
      color: "gray",
      fontWeight: 400,
      fontFamily: "Arial",
    },
    "& button": {
      marginTop: "1rem",
      padding: "1rem 3.5rem",
      fontFamily: "Arial",
      fontWeight: 600,
      fontSize: "1rem",
      background: "gray",
      border: "none",
      borderRadius: "20rem",
      color: "#fff",
      cursor: "pointer",
      transition: "all .3s ease-in-out",
      "&:hover": {
        background: "#fff",
        color: "gray",
      },
    },
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
export default styles;
