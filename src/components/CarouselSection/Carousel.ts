import { defineComponent, ref, onMounted } from "vue";
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
    let container: HTMLDivElement;
    const cursor = ref<number>(0);
    const imageInd = ref<number>(0);
    const mover = (event: MouseEvent) => {
      cursor.value = event.clientX;
    };
    window.addEventListener("mousemove", mover);
    const classes = styles();
    const loadImage = () => {
      if (cursor.value < window.screen.width / 2) {
        imageInd.value--;
        if (imageInd.value === -1) {
          console.log("test");
          container.style.transform = "translateX(-100%)";
        } else {
          console.log("test");
        }
      } else {
        imageInd.value++;
      }
    };
    onMounted(() => {
      container = document.getElementById("carousel") as HTMLDivElement;
      container.addEventListener("click", loadImage);
    });
    return {
      classes,
      cursor,
      cursorLeft,
      cursorRight,
      redDotImage,
      images,
    };
  },
});
