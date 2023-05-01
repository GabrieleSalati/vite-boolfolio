<script>

export default {
    name: "AppHeader",
};
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Portfolio</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <router-link :to="{ name: 'home' }" class="nav-link">
                        Homepage
                    </router-link>
                    <router-link :to="{ name: 'contacts' }" class="nav-link">
                        Contacts
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>