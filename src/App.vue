<template>
  <v-app>
    <toolbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '@/components/shared/Toolbar';

export default {
  name: 'App',
  components: {
    toolbar: Toolbar,
  },
  data: () => ({
    //
  }),
};
</script>
