import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  wrapper: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
  },
  logoBottom: {
    position: "absolute",
    bottom: 120,
    left: 80,
    width: 200,
    height: 150,
  },
});
export default styles;
