<template>
  <v-container>
    <h2>Register</h2>
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="userInfo.name"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="userInfo.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="userInfo.password"
        :type="showPassword ? 'text' : 'password'"
        :rules="[required('password'), minLength('password', 8)]"
        label="Password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        counter="true"
        @click:append="showPassword = !showPassword"
        required
      ></v-text-field>

      <v-checkbox
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Agree term and services"
        v-model="checked"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="regis">
        Validate
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { required, minLength, maxLength } from "../utils/validations.js";
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        name: "",
        password: "",
        email: "",
        role: "user"
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      checked: false,
      required,
      minLength,
      maxLength
    };
  },

  methods: {
    async regis() {
      try {
        await this.$axios.post("/api/v1/auth/register", this.userInfo);
        this.$auth.loginWith("local", {
          data: this.userInfo
        });
        this.store.dispatch("snackbar/setSnackbar", {
          color: "green",
          text: "Thank you for singning up"
        });
      } catch (error) {
        this.store.dispatch("snackbar/setSnackbar", {
          color: "red",
          text: "There was an error in signup process"
        });
      }
    }
  }
};
</script>
