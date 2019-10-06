<template>
  <v-layout column>
    <v-flex>{{ icon }}</v-flex>
    <v-flex text-xs-center>
      <span class="title">
        {{ title }}
      </span>
    </v-flex>
    <v-flex text-xs-center>
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