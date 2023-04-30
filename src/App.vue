<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      title: "Portfolio",
    }
  },

  components: {
    AppHeader,
  },

};
</script>

<template>
  <AppHeader />
  <h1>{{ title }}</h1>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>