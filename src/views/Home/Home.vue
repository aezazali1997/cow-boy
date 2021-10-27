<template>
  <Navbar />
  <Main />
  <ExploreSection />
  <Carousel />
</template>

<script lang="ts">
import Main from "@/components/MainSection/Main.vue";
import ExploreSection from "@/components/ExploreSection/Explore.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Carousel from "@/components/CarouselSection/Carousel.vue";
export default {
  name: "Home",
  props: {},
  components: { Navbar, Main, ExploreSection, Carousel },
};
</script>

<style></style>
