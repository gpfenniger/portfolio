<template>
  <div class="section">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: String
  }
};
</script>
