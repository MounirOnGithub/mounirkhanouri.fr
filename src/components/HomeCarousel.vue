<template>
  <agile :options="carouselOptions">
    <div class="slide">slide 1</div>
    <div class="slide">slide 2</div>
    <div class="slide">slide 3</div>
  </agile>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  name: 'HomeCarousel',
  components: {
    agile: VueAgile,
  },
  computed:{
    carouselOptions() {
      return {
        autoplay: true,
        fade: true,
        infinite: true,
        navButtons: false,
        slidesToShow: 3,
      }
    }
  }
}
</script>