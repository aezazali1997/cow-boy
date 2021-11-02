import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  dot: {
    backgroundColor: "#fff",
    width: 10,
    height: 10,
    opacity: 0.6,
    borderRadius: "20rem",
    margin: "0 1rem",
  },
  dotContainer: {
    display: "flex",
    position: "relative",
    bottom: 250,
    justifyContent: "center",
  },
});
export default styles;
