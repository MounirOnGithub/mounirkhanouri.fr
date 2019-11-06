<template>
  <v-layout row>
    <v-flex xs4></v-flex>
    <v-flex xs4></v-flex>
    <v-flex xs4>
      <v-layout column text-left py-2>
        <v-flex py-1>
          <v-icon>{{ authorIcon }}</v-icon>
          {{ $t('footer.author.name') }}
        </v-flex>
        <v-flex py-1>
          <v-icon>{{ mailIcon }}</v-icon>
          {{ $t('footer.author.mail') }}
        </v-flex>
        <v-flex py-1>
          <v-icon>{{ locationIcon }}</v-icon>
          {{ $t('footer.author.location') }}
        </v-flex>
      </v-layout>
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