<template>
  <v-container>
    <h2>Login</h2>
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

      <v-btn color="success" class="mr-4" @click="login">
        Login
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
        email: "shizhaolee96@gmail.com",
        name: "shizhao",
        password: "123456"
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      required,
      minLength,
      maxLength
    };
  },

  methods: {
    async login() {
      try {
        this.$auth.loginWith("local", {
          data: this.userInfo
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>
