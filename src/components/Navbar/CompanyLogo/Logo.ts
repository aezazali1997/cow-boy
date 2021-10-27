import { defineComponent } from "vue";
import styles from "./Logo.style";
export default defineComponent({
  name: "Logo",
  props: {},
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
