<template>
  <div class="section container">
    <div class="frame">
      <div id="content-wrapper">
        <h3>{{ title }}</h3>
        <div v-html="content"></div>
      </div>
    </div>
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
