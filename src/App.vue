<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left clipped-right>
      <v-toolbar-title style="min-width: 150px">Test BTS</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>

    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from "./components/Snackbar";

export default {
  name: "App",

  components: {
    Snackbar,
  },

  data: () => ({
    //
  }),
};
</script>
