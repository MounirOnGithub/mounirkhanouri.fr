<template>
  <v-layout column text-xs-center>
    <v-flex>{{ icon }}</v-flex>
    <v-flex class="title">
      <span>
        {{ title }}
      </span>
    </v-flex>
    <v-flex>
      <span>
        {{ description }}
      </span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Presentation',
  props: {
    icon: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
  },
}
</script>