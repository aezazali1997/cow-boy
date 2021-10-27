import { defineComponent, ref } from "vue";
import styles from "./Navbar.style";
import Logo from "./CompanyLogo/Logo.vue";
import Menu from "./Menu/Menu.vue";
export default defineComponent({
  name: "Navbar",
  props: {},
  components: {
    Logo,
    Menu,
  },
  setup() {
    const scrollPos = ref<number>(0);
    const scrollHandler = () => {
      scrollPos.value = document.body.getBoundingClientRect().top * -1;
    };
    window.addEventListener("scroll", scrollHandler);
    const classes = styles();
    return {
      classes,
      scrollPos,
    };
  },
});
