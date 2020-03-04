<template>
  <nav>
    <NavLink
      v-for="(link, index) in links"
      :to="link.to"
      :value="link.value"
      :key="index"
    />
  </nav>
</template>

<script>
import NavLink from "@/components/NavLink.vue";

export default {
  name: "Navigation",
  components: {
    NavLink
  },
  data: () => {
    return {
      links: [
        { to: "/", value: "Home" },
        { to: "/projects", value: "Projects" },
        { to: "/education", value: "Education" },
        { to: "/professional", value: "Professional Expierence" },
        { to: "/volunteer", value: "Volunteer Expierence" },
        { to: "/honours", value: "Honours and Awards" },
        { to: "/skills", value: "Technical Skills" }
      ]
    };
  }
};
</script>

<style>
nav {
  display: flex;
  width: 100%;
  text-align: center;
  padding-top: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
