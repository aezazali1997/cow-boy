import { defineComponent } from "vue";
import styles from "./Footer.style";
import FooterLower from "./FooterLower/FooterLower.vue";
import FooterUpper from "./FooterUpper/FooterUpper.vue";
export default defineComponent({
  name: "Footer",
  props: {},
  components: {
    FooterLower,
    FooterUpper,
  },
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
