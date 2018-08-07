<template>
  <v-container class="register" id="register">
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Register</h1>
        <v-text-field
          label="Email"
          placeholder="Email"
          type="email"
          :value="registerEmail"
          @input="setRegisterEmail"
        ></v-text-field>
        <v-text-field
          label="Password"
          placeholder="Password"
          type="password"
          autocomplete="new-password"
          :value="registerPassword"
          @input="setRegisterPassword"
        ></v-text-field>

        <v-alert type="error" :value="registerError">{{ registerError }}</v-alert>

        <v-btn color="green" dark @click.prevent="register">
          <v-icon v-text="'account_circle'"></v-icon>
          submit
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'register',
  computed: {
    ...mapState('authentication', [
      'registerEmail',
      'registerPassword',
      'registerError',
    ]),
  },
  methods: {
    ...mapMutations('authentication', [
      'setRegisterEmail',
      'setRegisterPassword',
      // 'setRegisterError',
    ]),
    ...mapActions('authentication', [
      'register',
    ]),
  },
};
</script>
