<template>
  <div id="app">
    <Navigation />
    <div id="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

#wrapper {
  margin: auto;
  padding-top: 5%;
  width: 60%;
  height: 80%;
}
</style>
