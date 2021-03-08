<template>
  <v-snackbar
    v-model="snackbar.show"
    :color="snackbar.color"
    :timeout="snackbar.timeout"
    left
  >
    {{ snackbar.message }}
    <template v-slot:action="{ attrs }">
      <v-btn dark text v-bind="attrs" @click="snackbar.show = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Snackbar",

  computed: {
    ...mapGetters(["snackbar"]),
  },
};
</script>
