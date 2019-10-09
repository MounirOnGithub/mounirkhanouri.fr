<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>Mounir Khanouri</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="(item, index) in menuItems"
      :key="index"
      text
      :to="item.path"
    >
      <span>{{ item.label }}</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Toolbar',
  data: () => {
    return {
      menuItems: [
        {
          path: '/',
          label: 'Home',
        },
        {
          path: '/about',
          label: 'About'
        }
      ]
    }
  }
}
</script>