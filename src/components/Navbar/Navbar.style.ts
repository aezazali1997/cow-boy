import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  navbar: {
    padding: "0 3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    transition: "all .2s ease-in-out",
    height: 85,
    zIndex: 100,
  },
});
export default styles;
