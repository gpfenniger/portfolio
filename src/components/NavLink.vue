<template>
  <router-link :to="to" class="nav-wrapper">
    {{ value }}
  </router-link>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    to: String,
    value: String
  }
};
</script>

<style>
.nav-wrapper {
  background-color: #81a1c1;
  padding: 5px;
  margin: auto;
  border-radius: 5px;
  width: 90%;
  text-decoration: none;
  color: #434c5e;
}
.nav-wrapper:hover {
  background-color: #5e81ac;
}
.nav-wrapper:active {
  background-color: #88c0d0;
}
</style>
