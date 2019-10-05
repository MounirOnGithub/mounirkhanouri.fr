<template>
  <v-toolbar>
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-btn v-for="(item, index) in menuItems" :key="index" :to="item.path" primary depressed text>
      <span>{{ item.label }}</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
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