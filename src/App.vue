<template>
  <v-app>
    <toolbar />
    <v-content>
      <v-container fluid py-0>
        <router-view />
        <v-footer>
          <mkhfooter />
        </v-footer>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "@/components/shared/Toolbar";
import Footer from "@/components/shared/Footer";

export default {
  name: "App",
  components: {
    toolbar: Toolbar,
    mkhfooter: Footer
  },
  data: () => ({
    //
  })
};
</script>
