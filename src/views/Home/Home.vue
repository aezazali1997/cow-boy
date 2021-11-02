<template>
  <Navbar />
  <Main />
  <ExploreSection />
  <Carousel />
  <BookRide />
  <DiscoverApp />
</template>

<script lang="ts">
import Main from "@/components/MainSection/Main.vue";
import ExploreSection from "@/components/ExploreSection/Explore.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Carousel from "@/components/CarouselSection/Carousel.vue";
import BookRide from "@/components/BookRideSection/BookRide.vue";
import DiscoverApp from "@/components/DiscoverApp/DiscoverApp.vue";
export default {
  name: "Home",
  props: {},
  components: { Navbar, Main, ExploreSection, Carousel, BookRide, DiscoverApp },
};
</script>

<style></style>
