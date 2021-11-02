import { defineComponent } from "vue";
import styles from "./TextContainer.style";
export default defineComponent({
  name: "TextContainer",
  props: {},
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
