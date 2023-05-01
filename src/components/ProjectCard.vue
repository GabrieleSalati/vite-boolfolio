<script>

export default {
    props: {
        project: Object,
    },
};
</script>

<template>
    <div class="card">
        <!-- <img :src="project.image" class="card-img-top" alt="Picture"> -->
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <h6>{{ project.technology.label }}</h6>
            <!-- <h6>{{ project.types.labels }}</h6> -->
            <p class="card-text">{{ project.description }}</p>
            <router-link class="btn btn-primary" :to="{
                name: 'project-detail', params: { 'id': project.id }
            }">Details</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>