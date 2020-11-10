<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <v-icon color="green">mdi-alien</v-icon>
        <h3 class="px-5">Nasa Demo</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="currentUser" @click="logout" text>
        <span class="mr-2">Cerrar sesión</span>
        <v-icon>mdi-lock-open</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase';
import {mapState, mapActions} from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['updateCurrentUser']),
    logout(){
      firebase.auth().signOut().then(() => {
        this.updateCurrentUser(null)
        this.$router.push('/login')
      })
    }
  },
  computed: {
    ...mapState(["currentUser"])
  },

  
};
</script>
