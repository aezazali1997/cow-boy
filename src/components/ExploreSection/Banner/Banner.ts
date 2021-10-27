import { defineComponent } from "vue";
import styles from "./Banner.style";
import img from "@/assets/bicylce2.png";
export default defineComponent({
  name: "Banner",
  props: {},
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
      img,
    };
  },
});
