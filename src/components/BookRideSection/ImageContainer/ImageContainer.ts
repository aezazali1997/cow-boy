import { defineComponent } from "vue";
import styles from "./ImageContainer.style";
import Image from "@/assets/bicycle3.png";
export default defineComponent({
  name: "ImageContainer",
  props: {},
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
      Image,
    };
  },
});
