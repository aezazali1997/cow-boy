import { defineComponent } from "vue";
import styles from "./Banner.style";
import img from "@/assets/bicycle.png";
import PreOrder from "@/shared/PreOrder/PreOrder.vue";
export default defineComponent({
  name: "Banner",
  props: {},
  components: { PreOrder },
  setup() {
    const classes = styles();
    return {
      classes,
      img,
    };
  },
});
