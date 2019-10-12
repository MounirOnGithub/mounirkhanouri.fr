<template>
  <v-app>
    <toolbar />
    <v-content>
      <v-container fluid py-0>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "@/components/shared/Toolbar";

export default {
  name: "App",
  components: {
    toolbar: Toolbar
  },
  data: () => ({
    //
  })
};
</script>
