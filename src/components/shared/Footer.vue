<template>
  <v-layout row text-center py-5>
    <v-flex xs12 md4>
      <v-icon>{{ authorIcon }}</v-icon>
      {{ $t('footer.author.name') }}
    </v-flex>
    <v-flex xs12 md4>
      <v-icon>{{ mailIcon }}</v-icon>
      {{ $t('footer.author.mail') }}
    </v-flex>
    <v-flex xs12 md4>
      <v-icon>{{ locationIcon }}</v-icon>
      {{ $t('footer.author.location') }}
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      authorIcon: "mdi-account-card-details",
      mailIcon: "mdi-gmail",
      locationIcon: "mdi-crosshairs-gps"
    };
  }
};
</script>