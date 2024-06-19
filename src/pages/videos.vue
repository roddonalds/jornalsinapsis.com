<template>
  <v-container class="mt-5">
    <v-row>
      <v-col cols="12" md="3" v-for="(link, index) in links" :key="index">
        <v-card @click="openModal(index)">
          <v-img @blur="validateLink(index)"
            :src="getThumbnailUrl(index)" aspect-ratio="16/9"></v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="800">
      <v-card>
        <v-card-title class="headline">Video Preview</v-card-title>
        <v-card-text>
          <iframe
            v-if="currentVideoUrl"
            :src="currentVideoUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            width="100%"
            height="400"
          ></iframe>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'Page3',
  data() {
    return {
      links: Array(6).fill(''),
      dialog: false,
      currentVideoUrl: ''
    };
  },
  methods: {
    validateLink(index) {
      const urlPattern = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
      if (this.links[index] && !urlPattern.test(this.links[index])) {
        alert('Please enter a valid YouTube URL');
        this.links[index] = '';
      }
    },
    openModal(index) {
        const videoId = this.extractVideoId(this.links[index]);
          this.currentVideoUrl = `https://www.youtube.com/embed/${videoId}`;
          this.dialog = true;
    },
    extractVideoId(url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
    },
    getThumbnailUrl(index) {

      const largeThumbnails = [0, 1];
      const smallThumbnails = [2, 3, 4, 5];

      if (largeThumbnails.includes(index)) {
        return `https://via.placeholder.com/320x180.png?text=Thumbnail+${index + 1}`;
      } else if (smallThumbnails.includes(index)) {
        return `https://via.placeholder.com/150x150.png?text=Thumbnail+${index + 1}`;
      }
    }
  }
}

</script>

<style scoped>

.v-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    cursor: pointer;
  }

</style>
