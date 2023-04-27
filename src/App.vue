<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      title: "Hello world"
    }
  },

  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then((response) => { console.log(response) })
    }
  },

  created() {
    this.fetchProjects();
  },

  components: {
    AppHeader: AppHeader,
  },
};
</script>

<template>
  <AppHeader />
  <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped></style>