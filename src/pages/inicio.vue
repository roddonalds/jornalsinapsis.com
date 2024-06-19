<template>
  <v-app>

    <v-main>
      <v-container class="mt-5">
        <v-row>
          <v-col cols="12">
            <v-carousel>
              <v-carousel-item>
                <img src="../assets/1.png" alt="Slide 1">
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col cols="12" md="6">
            <v-card>
              <v-img src="../assets/2.png"></v-img>
              <v-card-title>CINEMA - A captura do sujeito aprisionado em si mesmo pelo sistema</v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-img src="../assets/3.png"></v-img>
              <v-card-title>ENTREVISTA - TRATAMENTOS ALTERNATIVOS - COMO ROMPER COM O CONSERVADORISMO MÉDICO?</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Page1',
}
</script>

<style scoped>

  .title {
    font-weight: bold;
    font-size: 1.5rem;
    color: #004d40;
  }
  .v-app-bar {
    background-color: #e0f7fa !important;
  }
  .v-btn {
    margin-right: 10px;
  }
</style>
