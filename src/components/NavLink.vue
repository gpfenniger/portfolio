<template>
  <router-link :to="to" class="nav-wrapper" :active="isActive()">
    {{ value }}
  </router-link>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    to: String,
    value: String
  },
  methods: {
    isActive() {}
  }
};
</script>

<style>
.nav-wrapper {
  background-color: #3b4252;
  padding: 5px;
  margin: 0 15px 15px;
  border-radius: 5px;
  text-decoration: none;
  color: #d8dee9;
  flex: 1;
}
.nav-wrapper:hover {
  background-color: #5e81ac;
  color: #d8dee9;
}
.router-link-exact-active {
  background-color: #81a1c1;
  color: #3b4252;
}
</style>
