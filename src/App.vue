<template>
  <v-app>
    <AppHeader/>
    <v-main class="grey lighten-2">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>

import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader
  },
};
</script>

<style>
.v-application a {
  color: inherit !important;
  text-decoration: none;
}
</style>
