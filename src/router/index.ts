import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'Main',
            component: () => import('../pages/MainPage.vue')
        },
        {
            path: '/links',
            name: "Links",
            component: () => import('../pages/LinksPage.vue')
        }
    ]
})

export default router