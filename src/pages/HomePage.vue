<script>

import axios from "axios";
import ProjectsList from "../components/ProjectsList.vue";

export default {
    data() {
        return {
            projects: [],
        }
    },

    components: {
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
    <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped></style>