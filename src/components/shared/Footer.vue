<template>
  <v-layout row>
    <v-flex xs4></v-flex>
    <v-flex xs4></v-flex>
    <v-flex xs4>
      <v-layout column text-left py-2>
        <v-flex py-1>
          <span>{{ $t('footer.authorField') }} :</span>
          {{ $t('footer.author.name') }}
        </v-flex>
        <v-flex py-1>
          <span>{{ $t('footer.mailField') }} :</span>
          {{ $t('footer.author.mail') }}
        </v-flex>
        <v-flex py-1>
          <span>{{ $t('footer.locationField') }} :</span>
          {{ $t('footer.author.location') }}
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Footer"
};
</script>