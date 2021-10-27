import { defineComponent } from "vue";
import styles from "./PreOrder.style";
export default defineComponent({
  name: "PreOrder",
  props: { bicycleTitle: String },
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
