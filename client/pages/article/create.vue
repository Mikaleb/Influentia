<template>
  <div>
    <Articles-Create></Articles-Create>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ArticleCreatePage",
  components: {
    ArticlesCreate: () => import("~/components/Article/create.vue"),
  },
});
</script>
