import { defineComponent } from "vue";
import styles from "./Main.style";
import OfferBar from "./OfferBar/OfferBar.vue";
import Banner from "./Banner/Banner.vue";
export default defineComponent({
  name: "MainSection",
  props: {},
  components: { OfferBar, Banner },
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
