import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  container: {
    maxWidth: "100%",
    height: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    transform: "translateX(0)",
    transition: "transform .7s ease-out",
  },
  image: {
    width: "100%",
    display: "block",
    objectFit: "contain",
  },
  redDot: {
    position: "absolute",
    bottom: 60,
    left: 50,
    width: 200,
    height: 150,
  },
  dot: {
    position: "absolute",
    bottom: 60,
    left: "50%",
    backgroundColor: "white",
    color: "white",
    width: 10,
    height: 10,
    opacity: 0.6,
    borderRadius: "20rem",
    "&:nth-child(2)": {
      left: "52%",
    },
    "&:nth-child(3)": {
      left: "54%",
    },
  },
});
export default styles;
