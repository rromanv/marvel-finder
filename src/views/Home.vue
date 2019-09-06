<template>
  <v-container>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-row>
      <v-col>
        <v-text-field
          dark
          outlined
          :disabled="loading"
          label="Search Marvel Character"
          v-model="search"
          v-on:change="searchCharacters()"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <h1>
        {{
          this.searched === ""
            ? "Showing All Characters"
            : `Showing ${this.searched} Results`
        }}
      </h1>
    </v-row>
    <v-row v-if="characters.length > 0">
      <v-col cols="2" v-for="character in characters" :key="character.id">
        <router-link
          class="white--text"
          :to="{ name: 'character', params: { id: character.id } }"
          >{{ character.name }}</router-link
        >
        <v-img
          contain
          :src="`${character.thumbnail.path}.${character.thumbnail.extension}`"
        />
      </v-col>
    </v-row>
    <v-row v-else>
      <h1 class="display-4">Character not found</h1>
      <v-img height="500" contain src="@/assets/notFound.gif"></v-img>
    </v-row>
  </v-container>
</template>

<script>
import marvelService from "@/plugins/marvelService.js";

const apikey = "8bb68efe21944034f6711a75ddf3615a";

export default {
  name: "CharacterList",
  data() {
    return {
      loading: false,
      characters: [],
      search: "",
      searched: ""
    };
  },
  methods: {
    async searchCharacters() {
      this.loading = true;
      if (this.search.length > 0) {
        const response = await marvelService.get("characters", {
          params: { apikey, nameStartsWith: this.search }
        });
        this.characters = response.data.data.results;
        this.searched = this.search;
        this.search = "";
      } else {
        const response = await marvelService.get("characters", {
          params: { apikey }
        });
        this.characters = response.data.data.results;
        this.searched = "";
      }
      this.loading = false;
    }
  },
  created() {
    marvelService
      .get("characters", { params: { apikey } })
      .then(r => (this.characters = r.data.data.results))
      .catch(e => console.log(e));
  }
};
</script>
