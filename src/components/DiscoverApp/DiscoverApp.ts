import { defineComponent, onMounted, ref } from "vue";
import styles from "./DiscoverApp.style";
import left1 from "@/assets/media-left-1.png";
import left2 from "@/assets/media-left-2.png";
import moveLeft1 from "@/assets/move-left-1.png";
import moveLeft2 from "@/assets/move-left-2.png";
import moveLeft3 from "@/assets/move-left-3.png";
import moveLeft4 from "@/assets/move-left-4.png";
import moveLeft5 from "@/assets/move-left-5.png";
import phoneImage from "@/assets/mid.png";
import moveRight1 from "@/assets/move-right-1.png";
import moveRight2 from "@/assets/move-right-2.png";
import moveRight3 from "@/assets/move-right-3.png";
import moveRight4 from "@/assets/move-right-4.png";
import moveRight5 from "@/assets/move-right-5.png";
import right1 from "@/assets/media-right-1.png";
import right2 from "@/assets/media-right-2.png";
export default defineComponent({
  name: "DiscoverApp",
  props: {},
  components: {},
  setup() {
    let elementRight1: HTMLDivElement;
    let elementRight2: HTMLDivElement;
    let elementLeft1: HTMLDivElement;
    let elementLeft2: HTMLDivElement;
    let wrapper: HTMLDivElement;
    const classes = styles();

    onMounted(() => {
      wrapper = document.getElementById("wrapper") as HTMLDivElement;
      const startLimit = ref<number>(
        wrapper.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top
      );
      elementRight2 = document.getElementById(
        "transformRight2"
      ) as HTMLDivElement;
      elementRight1 = document.getElementById(
        "transformRight1"
      ) as HTMLDivElement;
      elementLeft1 = document.getElementById(
        "transformLeft1"
      ) as HTMLDivElement;
      elementLeft2 = document.getElementById(
        "transformLeft2"
      ) as HTMLDivElement;
      document.addEventListener("scroll", () => {
        const diff =
          document.body.getBoundingClientRect().top * -1 - startLimit.value;
        const wrapperHeight =
          wrapper.getBoundingClientRect().bottom -
          wrapper.getBoundingClientRect().top;
        if (diff > 0 && diff < wrapperHeight) {
          console.log(diff);
        }
      });
    });
    return {
      classes,
      left1,
      left2,
      right1,
      right2,
      moveLeft1,
      moveLeft2,
      moveLeft3,
      moveLeft4,
      moveLeft5,
      phoneImage,
      moveRight1,
      moveRight2,
      moveRight3,
      moveRight4,
      moveRight5,
    };
  },
});
