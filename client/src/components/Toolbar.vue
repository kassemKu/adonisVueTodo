<template>
  <v-toolbar color="green" dark fixed>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title class="font-weight-bold mr-4">vue todo</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat>
        <v-icon v-text="'playlist_add_check'"></v-icon>
        projects
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to="/register" flat v-if="!isLoggedIn">
        <v-icon v-text="'account_box'" class="mr-1"></v-icon>
        register
      </v-btn>
      <v-btn flat v-if="!isLoggedIn">
        <v-icon v-text="'fingerprint'"></v-icon>
        login
      </v-btn>
      <v-btn flat v-if="isLoggedIn">
        <v-icon v-text="'exit_to_app'" class="mr-1"></v-icon>
        logout
      </v-btn>
      <v-btn flat>
        <v-icon v-text="'ondemand_video'" class="mr-1"></v-icon>
        how this was made
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'toolbar',
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },
};
</script>
