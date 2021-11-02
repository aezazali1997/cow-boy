import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  active: {
    opacity: "1 !important",
  },
  image: {
    width: "100%",
    display: "block",
  },
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    transform: "translateX(0)",
    transition: "transform 2s ease",
    justifyContent: "flex-start",
  },
});
export default styles;
