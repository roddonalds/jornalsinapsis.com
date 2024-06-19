<template>

  <v-container class="mt-5">
    <v-row>

      <v-col 
      cols="12" 
      md="12" 
      :key="post.uid" 
      v-for="(post, index) in posts">
        <v-card class="px-3 py-5 post-card">
          <v-row align="center">
            <v-col cols="1">
              <v-icon large>mdi-file-document-box-multiple-outline</v-icon>
            </v-col>
            <v-col cols="11">
              <h2>{{ post.title }}</h2>
              <p class="subtitle">{{ post.subtitle }}</p>
            </v-col>
          </v-row>
          <v-card-text>
            <p>{{ post.content }}</p>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
  </v-container>

</template>

<script>

import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'Page2',
  data() {
    return {
      posts: [
        {
          uid: uuidv4(),
          title: "MÃES QUE ZELAM PELA MEMÓRIA DE SEUS FILHOS",
          subtitle: "Como a violência social mata o futuro do país?",
          content: "ghghhgorhtgioryheiotguriotu rtfirghfjghfjkghfdi gitirhihtfgproguoggioujgj gjfjgfhgjfhgoiyrgiorutporeru tirpotjuirjt hiorhytoirhugyriougoprrrtoito rjgihrighruetgureghorjhfgporufprutr rotjrihtrihfuihfdoihfkdlfj hroifhruiohf hfhgurgohgifhgfgjihgurhtuhrtjhipjtorpujg hriothruguhhgpfu9urjhfrrrrf fourjfhfbfbiih iuhfuighufg dhhfohefohhof osfuhyofuhrfu uhuhuhgfdsisi siojfiohhfhf jdfhjdgdh dhjhdhdi idohduye ehueyuey eyoyyeyey osiiuuy"
        },
        // Add more posts as needed
      ],
      dialog: false,
      currentVideoUrl: ''
    };
  },
}

</script>

<style scoped>

  .title {
    font-weight: bold;
    font-size: 1.5rem;
    color: #004d40;
  }

  .v-btn {
    margin-right: 10px;
  }

  .subtitle {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .post-card {
    background: rgba(255, 255, 255, 0.87)
  }

</style>