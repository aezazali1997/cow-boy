import { defineComponent } from "vue";
import styles from "./BookRide.style";
import ImageContainer from "./ImageContainer/ImageContainer.vue";
import TextContainer from "./TextContainer/TextContainer.vue";
export default defineComponent({
  name: "BookRide",
  props: {},
  components: { ImageContainer, TextContainer },
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
