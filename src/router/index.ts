import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Section from "../views/Section.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/education",
    name: "Education",
    component: Section,
    props: {
      title: "Formal Education"
    }
  },
  {
    path: "/professional",
    name: "Professional",
    component: Section,
    props: {
      title: "Professional Expierence"
    }
  },
  {
    path: "/volunteer",
    name: "Volunteer",
    component: Section,
    props: {
      title: "Volunteer Expierence"
    }
  },
  {
    path: "/honours",
    name: "Honours",
    component: Section,
    props: {
      title: "Honours and Awards"
    }
  },
  {
    path: "/skills",
    name: "Skills",
    component: Section,
    props: {
      title: "Technical Skills"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
