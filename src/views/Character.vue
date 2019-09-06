<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-btn to="/">
          <v-icon left>
            mdi-transfer-left
          </v-icon>
          Return
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-img
          contain
          :src="`${character.thumbnail.path}.${character.thumbnail.extension}`"
        />
      </v-col>
      <v-col cols="8">
        <h1 class="display-4">{{ character.name }}</h1>
        <p class="body-1">{{ character.description }}</p>
        <p class="headline">Appears in this comics:</p>
        <ul>
          <li v-for="comic in character.comics.items" :key="comic.uri">
            {{ comic.name }}
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import marvelService from "@/plugins/marvelService.js";

const apikey = "8bb68efe21944034f6711a75ddf3615a";

export default {
  name: "CharacterDetails",
  data() {
    return {
      character: {}
    };
  },
  created() {
    marvelService
      .get(`characters/${this.$route.params.id}`, { params: { apikey } })
      .then(r => (this.character = r.data.data.results[0]))
      .catch(e => console.log(e));
  }
};
</script>
