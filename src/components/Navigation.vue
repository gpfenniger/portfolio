<template>
  <div id="nav">
    <h3>Pages</h3>
    <NavLink
      v-for="(link, index) in links"
      :to="link.to"
      :value="link.value"
      :key="index"
    />
  </div>
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
#nav {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 30px;
  width: 300px;

  background-color: #4c566a;
  border-radius: 5px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-top: 15px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
