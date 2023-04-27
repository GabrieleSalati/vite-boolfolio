<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import ProjectsList from "./components/ProjectsList.vue";

export default {
  data() {
    return {
      title: "Projects",
      projects: [],
    }
  },

  components: {
    AppHeader: AppHeader,
    ProjectsList: ProjectsList
  },

  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then((response) => { this.projects = response.data; })
    }
  },

  created() {
    this.fetchProjects();
  },

};
</script>

<template>
  <AppHeader />
  <h1>{{ title }}</h1>
  <ProjectsList :projects="projects" />
</template>

<style lang="scss" scoped></style>