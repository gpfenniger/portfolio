<template>
  <div class="section container">
    <h3>{{ title }}</h3>
    <code v-html="content"></code>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getSection } from "@/services.ts";

export default Vue.extend({
  name: "Section",
  props: {
    title: String,
    link: String
  },
  data: () => {
    return {
      content: ""
    };
  },
  beforeMount() {
    this.updateContent();
  },
  beforeUpdate() {
    this.updateContent();
  },
  methods: {
    setContent(content: string) {
      this.content = content;
    },
    updateContent() {
      getSection(this.link)
        .then((data: string) => {
          this.setContent(data);
        })
        .catch(e => console.error(e));
    }
  }
});
</script>

<style>
.section {
  margin-left: 10px;
  width: 100%;
}
</style>
