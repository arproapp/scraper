import { createRouter, createWebHistory } from "vue-router";
import routes from './routes'


const router = createRouter({
    history: createWebHistory(),
    routes,
    // Use the HTML5 history API (i.e. normal-looking routes)
    // instead of routes with hashes (e.g. example.com/#/about).
    // This may require some server configuration in production:
    // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
    mode: 'history',


})

export default router
