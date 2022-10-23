<template>
    <div>
      <ArticleCreate></ArticleCreate>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue"
  export default Vue.extend({
    name: "ArticleCreatePage",
    components: {
      ArticleCreate: () => import("@/components/Article/create.vue"),
    },
  })
  </script>
  