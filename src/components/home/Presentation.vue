<template>
  <v-layout column my-7>
    <v-flex pt-7>
      <v-icon x-large :color="icon.color">{{ icon.type }}</v-icon>
    </v-flex>
    <v-flex class="title py-2">
      <span>{{ title }}</span>
    </v-flex>
    <v-flex px-7>
      <span>{{ description }}</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Presentation",
  props: {
    icon: {
      type: Object,
      default: () => {
        return { type: "", color: "" };
      }
    },
    title: { type: String, default: "" },
    description: { type: String, default: "" }
  }
};
</script>