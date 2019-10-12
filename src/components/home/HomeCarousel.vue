<template>
  <carousel :autoplay="true" :autoplay-hover-pause="true" :per-page="1">
    <slide>
      <v-img src="https://via.placeholder.com/1500x500" />
    </slide>
    <slide>
      <v-img src="https://via.placeholder.com/1500x500" />
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "HomeCarousel",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {};
  }
};
</script>
