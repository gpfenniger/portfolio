<template>
  <div class="section">
    <h3>{{ title }}</h3>
    <code v-html="content"></code>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: String,
    content: String
  }
};
</script>
