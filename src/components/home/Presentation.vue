<template>
  <v-layout column>
    <v-flex py-1>
      <v-icon x-large>{{ icon }}</v-icon>
    </v-flex>
    <v-flex class="title">
      <span>{{ title }}</span>
    </v-flex>
    <v-flex>
      <span>{{ description }}</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Presentation",
  props: {
    icon: { type: String, default: "" },
    title: { type: String, default: "" },
    description: { type: String, default: "" }
  }
};
</script>