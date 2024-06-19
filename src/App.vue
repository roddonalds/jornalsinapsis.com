<template>
  <v-app>
    <v-app-bar color="white" app>
      <v-toolbar-title class="title">Jornal Sinapsis</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mr-2" icon to="/inicio">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn class="mr-2" to="/inicio">INÍCIO</v-btn>
      <v-btn class="mr-2" to="/noticias">REPORTAGEM</v-btn>
      <v-btn class="mr-2" to="/videos">VÍDEOS</v-btn>
      <v-btn class="mr-2" to="/critica">GALERIA</v-btn>
      <v-btn class="mr-2"  to="/podcast">PODCAST</v-btn>
      <v-spacer></v-spacer>
      <v-text-field placeholder="Search" solo clearable flat hide-details
        prepend-inner-icon="mdi-magnify"></v-text-field>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>


</style>
