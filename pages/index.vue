<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <Articles />
    </v-col>
  </v-row>
</template>

<script>
import Articles from "~/components/Articles/index.vue";
export default {
  name: "IndexPage",
  components: { Articles },
};
</script>
