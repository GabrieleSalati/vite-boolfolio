<script>
import AppHeader from "./components/AppHeader.vue";
import HomePage from "./pages/homepage.vue";
import ContactPage from "./pages/ContactPage.vue";

export default {
  data() {
    return {
      title: "Projects",
    }
  },

  components: {
    AppHeader, HomePage, ContactPage
  },

};
</script>

<template>
  <AppHeader />
  <h1>{{ title }}</h1>
  <ProjectsList :projects="projects" />
  <HomePage />
  <ContactPage />
</template>

<style lang="scss" scoped></style>