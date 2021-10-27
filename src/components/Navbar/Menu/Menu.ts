import { defineComponent } from "vue";
import styles from "./Menu.style";
export default defineComponent({
  name: "Menu",
  props: {},
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
