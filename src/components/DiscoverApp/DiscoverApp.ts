import { defineComponent } from "vue";
import styles from "./DiscoverApp.style";
import left1 from "@/assets/media-left-1.png";
import left2 from "@/assets/media-left-2.png";
import moveLeft1 from "@/assets/move-left-1.png";
import moveLeft2 from "@/assets/move-left-2.png";
import moveLeft3 from "@/assets/move-left-3.png";
import moveLeft4 from "@/assets/move-left-4.png";
import moveLeft5 from "@/assets/move-left-5.png";
import phoneImage from "@/assets/mid.png";
export default defineComponent({
  name: "DiscoverApp",
  props: {},
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
      left1,
      left2,
      moveLeft1,
      moveLeft2,
      moveLeft3,
      moveLeft4,
      moveLeft5,
      phoneImage,
    };
  },
});
