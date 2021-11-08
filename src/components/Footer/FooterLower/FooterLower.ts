import { defineComponent } from "vue";
import styles from "./FooterLower.style";
export default defineComponent({
  name: "FooterLower",
  props: {},
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
