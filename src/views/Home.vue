<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <HomeCarousel />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md6 xs12 text-xs-center>
        <presentation 
          :icon="firstPresentation.icon"
          :title="firstPresentation.title"
          :description="firstPresentation.description"
        />
      </v-flex>
      <v-flex md6 xs12>
        <presentation 
          :icon="secondPresentation.icon"
          :title="secondPresentation.title"
          :description="secondPresentation.description"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HomeCarousel from '@/components/HomeCarousel.vue';
import Presentation from '@/components/home/Presentation.vue';

export default {
  name: 'Home',
  components: {
    HomeCarousel,
    presentation: Presentation,
  },
  data() {
    return {
      firstPresentation: {
        icon: '',
        title: this.$t('presentation.first.title'),
        description: this.$t('presentation.first.description'),
      },
      secondPresentation: {
        icon: '',
        title: this.$t('presentation.second.title'),
        description: this.$t('presentation.second.description'),
      }
    }
  },
}
</script>