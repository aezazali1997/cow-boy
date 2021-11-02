import { defineComponent, onMounted, ref } from "vue";
import styles from "./ImageContainer.style";
import { images } from "@/shared/images";
export default defineComponent({
  name: "ImageContainer",
  props: {
    cursor: {
      type: Number,
      default: 0,
    },
  },

  components: {},

  setup(props) {
    let container: HTMLDivElement;
    const imageInd = ref<number>(0);
    let activeCircle: HTMLSpanElement;
    const classes = styles();
    /* methods */
    const loadImage = () => {
      if (props.cursor < window.screen.width / 2) {
        imageInd.value--;
      } else {
        imageInd.value++;
      }
      if (imageInd.value < 0) {
        imageInd.value = images.length - 1;
      } else if (imageInd.value > images.length - 1) {
        imageInd.value = 0;
      }
      for (let i = 0; i < activeCircle.children.length; i++) {
        activeCircle.children[i].classList.remove(`${classes.value.active}`);
      }
      activeCircle.children[imageInd.value].classList.add(
        `${classes.value.active}`
      );
      container.style.transform = `translateX(-${100 * imageInd.value}%)`;
    };
    onMounted(() => {
      activeCircle = document.getElementById("dotWrapper") as HTMLSpanElement;
      activeCircle.children[0].classList.add(classes.value.active);
      container = document.getElementById("carousel") as HTMLDivElement;
      container.addEventListener("click", loadImage);
    });
    return {
      classes,
      images,
    };
  },
});
