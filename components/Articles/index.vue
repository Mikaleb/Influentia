<template>
  <div>
    <h1 class="text-center">Articles</h1>

    <div v-for="article in articles.slice(articleNb.start, articleNb.end)">
      <article :key="article.id">
        <h2>{{ article.title }}</h2>
        <p>{{ article.body }}</p>
      </article>
    </div>
    <v-pagination v-model="page" :length="pageLength"></v-pagination>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Articles",
  data() {
    return {
      nbArticlePerPage: 5,
      articleNb: {
        start: 0,
        end: 5,
      },
      page: 1,
    };
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    },
    pageLength() {
      const articlesLength = this.$store.state.articles.length;
      // @ts-ignore
      return Math.ceil(articlesLength / this.nbArticlePerPage);
    },
  },
  mounted() {
    this.$store.dispatch("getArticles");
  },
  watch: {
    page() {
      this.articleNb.start = (this.page - 1) * this.nbArticlePerPage;
      this.articleNb.end = this.articleNb.start + this.nbArticlePerPage;
    },
  },
});
</script>
