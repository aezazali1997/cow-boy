import { defineComponent, ref } from "vue";
import styles from "./Carousel.style";
import cursorLeft from "@/assets/arrow-left-white.png";
import cursorRight from "@/assets/arrow-right-white.png";
import redDotImage from "@/assets/redDot.png";
import { images } from "@/shared/images";
import ImageContainer from "./ImageContainer/ImageContainer.vue";
import ActiveCircle from "./ActiveWhiteCircle/ActiveCircle.vue";
export default defineComponent({
  name: "Carousal",
  props: {},
  components: { ImageContainer, ActiveCircle },
  setup() {
    const cursor = ref<number>(0);
    const mover = (event: MouseEvent) => {
      cursor.value = event.clientX;
    };
    window.addEventListener("mousemove", mover);
    const classes = styles();
    return {
      classes,
      cursorLeft,
      cursorRight,
      redDotImage,
      images,
      cursor,
    };
  },
});
