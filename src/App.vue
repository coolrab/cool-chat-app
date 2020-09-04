<template>
  <v-app>
    <Navbar />
    <v-main class="ma-4">
      <!-- <Welcome/> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
