<template>
  <div class="section container">
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

<style>
.section {
  margin-left: 10px;
  width: 100%;
}
</style>
