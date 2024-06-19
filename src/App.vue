<template>
  <v-app>

    <v-app-bar color="white" app id="appbar">

      <v-toolbar-title class="title">Jornal Sinapsis</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="mr-2" icon to="/inicio">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn class="mr-2 pa-3" style="height: 80px; padding: 15px !important" to="/noticias">
        <v-icon size="larger">mdi-camera-gopro</v-icon> NOTÍCIAS</v-btn>
      <v-btn class="mr-2 pa-3" style="height: 80px; padding: 15px !important" to="/videos">
        <v-icon size="larger">mdi-folder-play</v-icon> VÍDEOS</v-btn>
      <v-btn class="mr-2 pa-3" style="height: 80px; padding: 15px !important" to="/critica">
        <v-icon size="larger">mdi-home-circle</v-icon> GALERIA</v-btn>
      <v-btn class="mr-2 pa-3" style="height: 80px; padding: 15px !important" to="/podcast">
        <v-icon>mdi-podcast</v-icon> PODCAST</v-btn>
      <v-btn class="mr-2 pa-3" style="height: 80px; padding: 15px !important" to="/sobre">
        <v-icon size="larger">mdi-information-outline</v-icon> SOBRE
      </v-btn>

      <v-spacer></v-spacer>

      <v-text-field placeholder="Search" solo clearable flat hide-details
        prepend-inner-icon="mdi-magnify"></v-text-field>

    </v-app-bar>

    <v-main>
      <router-view id="main"></router-view>
    </v-main>
  </v-app>

</template>

<script>

  export default {
    name: 'App'
  }

</script>

<style>

  #appbar {
    width: 90% !important;
    background-color: #c7b147 !important;
  }

    #appbar .v-icon {
      font-size: 200% !important;
      margin-right: 14px !important
    }

  #appbar .v-icon, #appbar {
    color: rgba(36, 33, 33, 0.521) !important;
  }
  
  .v-main {
    background-color: #487881 !important;
  }

</style>
