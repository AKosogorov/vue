<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  a {
    text-decoration: none;
  }

  ul {
    padding: 0 !important;
    list-style: none;
  }

  .v-card {
    height: 100%;
  }
</style>