import { defineComponent, ref } from "vue";
import styles from "./OfferBar.style";
import { OFFERS } from "@/constants";
export default defineComponent({
  name: "OfferBar",
  props: {},
  components: {},
  setup() {
    const toggleOfferBar = ref(true);
    const offerText = ref<string>(OFFERS[1]);
    let offerToggler = true;
    const classes = styles();
    const closeOfferBar = () => {
      toggleOfferBar.value = !toggleOfferBar.value;
    };
    setInterval(() => {
      offerText.value = offerToggler ? OFFERS[0] : OFFERS[1];
      offerToggler = !offerToggler;
    }, 4000);
    return {
      classes,
      offerText,
      toggleOfferBar,
      closeOfferBar,
    };
  },
});
