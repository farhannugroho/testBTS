<template>
  <div class="d-flex align-center fill-height">
    <v-card class="mx-auto" width="400" outlined>
      <v-card-title class="justify-center">Register</v-card-title>

      <v-card-text>
        <v-text-field
          v-model="auth.email"
          label="Email"
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

        <v-text-field
          v-model="auth.username"
          label="Username"
          outlined
          single-line
          dense
          clearable
        />

        <v-btn primary block color="primary" @click="register(auth)"
          >Register</v-btn
        >

        <v-btn primary block color="yellow" class="mt-2" to="/"
          >Back to Login</v-btn
        >
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",

  data: () => ({
    auth: {},
    show: false,
  }),

  methods: {
    ...mapActions(["register"]),
  },
};
</script>
