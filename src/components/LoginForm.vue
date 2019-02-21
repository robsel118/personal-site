
<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Log In</h2>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field label="Email" v-model="user.email" :rules="emailRules" required>
        </v-text-field>
        <v-text-field
          label="Password"
          v-model="user.password"
          :rules="passwordRules"
          :type="'password'"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn color="primary" @click="login">Login</v-btn>
      </v-flex>
    </v-layout>
    <v-snackbar :timeout="6000" :top="true" v-model="showAlert">
      {{ message }}
      <v-btn flat color="pink" v-on:click="showAlert = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '@/utils/interfaces';
import { loginUser, getCurrentUser } from '@/api/auth';

@Component
export default class LoginForm extends Vue {
  showAlert: Boolean = false;

  message: String = '';

  user: User = {
    email: '',
    password: '',
  };

  /* eslint-disable */

  emailRules: any = [
    (v: any) => !!v || 'E-mail is required',
    (v: any) =>
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
      'E-mail must be valid',
  ];

  passwordRules: any = [(v: any) => !!v || 'Password is required'];

  async login() {
    await loginUser(this.user);
  }
}
</script>
