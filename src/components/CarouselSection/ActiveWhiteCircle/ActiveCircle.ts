import { defineComponent } from "vue";
import styles from "./ActiveCircle.style";
import { images } from "@/shared/images";
export default defineComponent({
  name: "ActiveCircle",
  props: {},
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
      images,
    };
  },
});
