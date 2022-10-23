<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div>
        <h1 class="text-center">Articles</h1>

        <div v-for="article in articles.slice(articleNb.start, articleNb.end)">
          <article-id :article="article"></article-id>
        </div>
        <v-pagination v-model="page" :length="pageLength"></v-pagination>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import ArticleId from '~/components/Article/_id.vue'

export default {
  name: 'ArticlesIndex',
  components: {
    ArticleId,
  },
  data() {
    return {
      nbArticlePerPage: 5,
      articleNb: {
        start: 0,
        end: 5,
      },
      page: 1,
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles
      console.log(
        '🚀 ~ file: index.vue ~ line 37 ~ articles ~ this.$store',
        this.$store
      )
    },
    pageLength() {
      const articlesLength = this.$store.state.articles.length
      return Math.ceil(articlesLength / this.nbArticlePerPage)
    },
  },
  watch: {
    page() {
      this.articleNb.start = (this.page - 1) * this.nbArticlePerPage
      this.articleNb.end = this.articleNb.start + this.nbArticlePerPage
    },
  },
  mounted() {
    // @ts-ignore
    this.$store.dispatch('getArticles')
  },
}
</script>
