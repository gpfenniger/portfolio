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

<script>
export default {
  name: "Projects",
  data: () => {
    return {
      projects: [
        {
          title: "Writing Organizer",
          link: "https://github.com/gpfenniger/worldbuilding-app",
          tech: ["Vue", "Vuetify", "Node", "Mongoose", "MongoDB"],
          status: "In Progress",
          description:
            "I started building this web application to help organize my own writing. Many of the tools avaliable did not work across platforms or were not what I was looking for, and so I set out to build my own."
        },
        {
          title: "Bookshelf",
          tech: ["React", "Node", "Postgres", "TypeScript"],
          link: "",
          status: "In Progress",
          description:
            "This project helps to track what books I am reading and allows the user to create lists and add bookmarks. Eventually I hope to use this project as part of an IoT device."
        },
        {
          title: "Personal Blog",
          status: "School Project",
          tech: ["React", "Node", "Mongoose", "MongoDB"],
          link: "google.com",
          description:
            "This full stack web application was built for Langara's CPSC 2600 class. For the project I designed a simple blog, complete with a primitive login system."
        }
      ]
    };
  },
  methods: {
    statusClasses: status => {
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
};
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
