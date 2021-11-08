import { defineComponent } from "vue";
import styles from "./FooterUpper.style";
import footerImage1 from "@/assets/footer-image-1.png";
import footerImage2 from "@/assets/footer-image-2.png";
import footerImage3 from "@/assets/footer-image-3.png";
export default defineComponent({
  name: "FooterUpper",
  props: {},
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
      footerImage1,
      footerImage2,
      footerImage3,
    };
  },
});
