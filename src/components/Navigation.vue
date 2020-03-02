<template>
  <div id="nav">
    <h3>Pages</h3>
    <router-link to="/">Home</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/education">Education</router-link>
    <router-link to="/professional">Professional Expierence</router-link>
    <router-link to="/volunteer">Volunteer Expierence</router-link>
    <router-link to="/honours">Honours and Awards</router-link>
    <router-link to="/skills">Technical Skills</router-link>
  </div>
</template>

<style>
#nav {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 30px;

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
