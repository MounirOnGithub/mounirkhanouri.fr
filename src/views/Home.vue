<template>
  <v-layout row text-center>
    <v-flex xs12>
      <carousel />
    </v-flex>
    <v-flex md6 xs12 px-12>
      <presentation
        :title="$t('presentation.first.title')"
        :description="$t('presentation.first.description')"
      />
    </v-flex>
    <v-flex md6 xs12 px-12>
      <presentation
        :title="$t('presentation.second.title')"
        :description="$t('presentation.second.description')"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import Presentation from "@/components/home/Presentation";
import HomeCarousel from "@/components/home/HomeCarousel";

export default {
  name: "Home",
  components: {
    presentation: Presentation,
    carousel: HomeCarousel
  }
};
</script>
