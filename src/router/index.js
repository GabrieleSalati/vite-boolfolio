import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/homepage.vue";
import ContactPage from "../pages/ContactPage.vue";

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
    ],
});

export { router };