import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  imgContainer: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    background: "linear-gradient(#9b9385,#dcd8d3)",
  },
  image: {
    width: "100%",
    display: "block",
    transform: "scale(1.8) translateY(300px)",
  },
});
export default styles;
