<script>
export default {
    props: {
        projects: Array,
    },
};
</script>

<template>
    <div class="card" v-for="project in projects">
        <img src="{{ project.image }}" class="card-img-top" alt="Picture">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <h6>{{ project.technology.label }}</h6>
            <h6>{{ project.types.label }}</h6>
            <p class="card-text">{{ project.description }}</p>
            <a href="#" class="btn btn-primary">Details</a>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>