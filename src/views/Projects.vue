<template>
  <div class="section container">
    <h3>My Projects</h3>
    <div id="project-wrapper">
      <div class="project" v-for="(project, index) in projects" :key="index">
        <div>
          <h4>{{ project.title }}</h4>
          <p :class="statusClasses(project.status)">{{ project.status }}</p>
        </div>
        <p>built using {{ project.tech }}</p>
        <p style="flex: 4;">{{ project.description }}</p>
        <a :href="project.link" target="_blank">Source Code</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getProjects } from "@/services.ts";

export default Vue.extend({
  name: "Projects",
  data: () => {
    return {
      projects: []
    };
  },
  beforeMount() {
    getProjects()
      .then((data: any) => {
        this.projects = data;
      })
      .catch((e: any) => console.error(e));
  },
  methods: {
    statusClasses: (status: string) => {
      let result = "status ";
      switch (status) {
        case "In Progress":
          return result + "progress";
        case "School Project":
          return result + "school";
        case "Finished":
          return result + "finished";
      }
      return result;
    }
  }
});
</script>

<style lang="scss">
#project-wrapper {
  overflow: auto;
  height: 86%;
}

.project {
  background-color: #434c5e;
  border: solid 2px #2e3440;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 10px;
  div {
    display: flex;
    flex-direction: row;
  }
  h4 {
    flex: 4;
  }
  a {
    color: #81a1c1;
  }
  a:hover {
    color: #5e81ac;
  }
}

.status {
  color: #2e3440;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 125px;
}

.school {
  background-color: #b48ead;
}

.finished {
  background-color: #a3be8c;
}

.progress {
  background-color: #ebcb8b;
}
</style>
