<template>
  <div>
    <!-- show article if possible (free or article bought) -->
    <ArticleId v-if="article" :article="article" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapGetters } from "vuex"
// import { getArticle } from "@/api/article"

export default Vue.extend({
  name: "ArticlePage",
  components: {
    ArticleId: () => import("@/components/Article/_id.vue"),
  },
  async asyncData({ store, route }) {
    // const article = await getArticle(route.params.id)
    // store.commit("article/setArticle", article)
    // return { article }
  },
  computed: {
    ...mapGetters("article", ["article"]),
  },
})
</script>
