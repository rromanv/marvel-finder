<template>
  <v-app>
    <v-app-bar app dark class="green darken-2">
      <v-toolbar-title class="headline text-uppercase">
        <span>Marvel</span>
        <span class="font-weight-light">Finder</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content class="grey darken-3 white--text">
      <router-view />
    </v-content>
    <v-footer class="green darken-2 white--text">
      <div class="flex-grow-1"></div>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
