<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <HomeCarousel />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md6 xs12>
        Presentation 1
      </v-flex>
      <v-flex md6 xs12>
        Presentation 2
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HomeCarousel from '@/components/HomeCarousel.vue';

export default {
  name: 'Home',
  components: {
    HomeCarousel,
  }
}
</script>