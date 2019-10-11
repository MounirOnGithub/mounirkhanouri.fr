<template>
  <agile :autoplay="true">
    <template v-slot:default>
      <v-img class="slide" src="https://via.placeholder.com/1500x500" />
      <v-img class="slide" src="https://via.placeholder.com/1500x500" />
    </template>

    <template slot="prevButton">
      <v-icon>mdi-chevron-left</v-icon>
    </template>
    <template slot="nextButton">
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </agile>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "HomeCarousel",
  components: {
    agile: VueAgile
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>