import { defineComponent } from "vue";
import styles from "./Cowboy3Banner.style";
import PreOrder from "@/shared/PreOrder/PreOrder.vue";
export default defineComponent({
  name: "CowBoy3Banner",
  props: {},
  components: { PreOrder },
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
