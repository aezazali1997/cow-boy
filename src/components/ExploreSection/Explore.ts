import { defineComponent } from "vue";
import styles from "./Explore.style";
import Banner from "./Banner/Banner.vue";
import PreOrder from "@/shared/PreOrder/PreOrder.vue";
export default defineComponent({
  name: "Explore",
  props: {},
  components: { Banner, PreOrder },
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
