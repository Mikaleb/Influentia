<template>
  <div>
    <h1>Create</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="title"
        :rules="titleRules"
        label="Title"
        required
      ></v-text-field>
      <v-textarea
        v-model="body"
        :rules="bodyRules"
        label="Body"
        required
      ></v-textarea>
      <v-btn color="success" @click="createArticle">Create</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "",
      body: "",
      valid: false,
      titleRules: [
        (v: string) => !!v || "Title is required",
        (v: string) =>
          (v && v.length <= 10) || "Title must be less than 10 characters",
      ],
      bodyRules: [
        (v: string) => !!v || "Body is required",
        (v: string) =>
          (v && v.length <= 10) || "Body must be less than 10 characters",
      ],
    };
  },
  methods: {
    createArticle() {
      // @ts-ignore
      if (this.$refs.form.validate()) {
        this.$store.dispatch("createArticle", {
          title: this.title,
          body: this.body,
        });
      }
    },
  },
});
</script>
