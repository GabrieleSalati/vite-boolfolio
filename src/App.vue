<script>
import AppHeader from "./components/AppHeader.vue";
import Homepage from "./pages/homepage.vue";

export default {
  data() {
    return {
      title: "Projects",
    }
  },

  components: {
    AppHeader,
    Homepage
  },

};
</script>

<template>
  <AppHeader />
  <h1>{{ title }}</h1>
  <Homepage />
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>