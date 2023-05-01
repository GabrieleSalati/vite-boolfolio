import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/homepage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: '',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },

        {
            path: '/contacts',
            name: 'contacts',
            component: ContactPage,
        },

        {
            path: '/projects/:id',
            name: 'project-detail',
            component: ProjectDetailPage,
        },
    ],
});

export { router };