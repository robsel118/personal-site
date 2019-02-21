<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Register</h2>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
          label="Username"
          hint="e.g., johndoe"
          v-model="user.username"
          :rules="[requiredRule]"
          required
        ></v-text-field>
        <v-text-field
          label="Firstname"
          hint="e.g., John"
          v-model="user.firstname"
          :rules="[requiredRule]"
          required
        ></v-text-field>
        <v-text-field
          label="Lastname"
          hint="e.g., Doe"
          v-model="user.lastname"
          :rules="[requiredRule]"
          required
        ></v-text-field>
        <v-text-field
          label="Email"
          hint="e.g., john@doe.com"
          v-model="user.email"
          :rules="[ requiredRule, emailRules]"
          required
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="user.password"
          :rules="[ requiredRule, passwordRule]"
          :type="'password'"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn color="primary" @click="register">Register</v-btn>
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
import { registerUser } from '@/api/auth';

@Component
export default class RegistrationForm extends Vue {
  showAlert = false;

  message = '';

  user: User = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
  };

  /* eslint-disable */

  requiredRule(v: string) {
    return !!v || 'Field is required';
  }

  passwordRule(v: string) {
    return v.length >= 6 || 'Min 6 characters';
  }

  emailRules(v: string) {
    return (
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
      || 'E-mail must be valid'
    );
  }

  async register() {
    await registerUser(this.user);
    console.log('user registered');
  }
}
</script>
