<template>
  <div class="d-flex align-center fill-height">
    <v-card class="mx-auto" width="400" outlined>
      <v-card-title class="justify-center">Login</v-card-title>

      <v-card-text>
        <v-text-field
          v-model="auth.username"
          label="Username"
          outlined
          single-line
          dense
          clearable
        />

        <v-text-field
          v-model="auth.password"
          label="Password"
          outlined
          single-line
          dense
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        />

        <v-btn primary block color="primary" @click="login(auth)">Login</v-btn>

        <v-btn primary block color="yellow" class="mt-2" to="/register"
          >Register</v-btn
        >
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",

  data: () => ({
    auth: {},
    show: false,
  }),

  methods: {
    ...mapActions(["login"]),
  },
};
</script>
