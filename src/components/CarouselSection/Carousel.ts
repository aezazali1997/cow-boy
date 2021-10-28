import { defineComponent, ref } from "vue";
import styles from "./Carousel.style";
import cursorLeft from "@/assets/arrow-left-white.png";
import cursorRight from "@/assets/arrow-right-white.png";
import { images } from "./images";
import redDotImage from "@/assets/redDot.png";
export default defineComponent({
  name: "Carousal",
  props: {},
  components: {},
  setup() {
    const cursor = ref<number>(0);
    const mover = (event: MouseEvent) => {
      cursor.value = event.clientX;
    };
    window.addEventListener("mousemove", mover);
    const classes = styles();
    return {
      classes,
      cursor,
      cursorLeft,
      cursorRight,
      images,
      redDotImage,
    };
  },
});
