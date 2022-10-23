<template>
  <article :key="article.id">
    <h2>{{ article.title }}</h2>
    <p>{{ article.body }}</p>
  </article>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
})
</script>
