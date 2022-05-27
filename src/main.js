import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import './assets/scss/config/default/app.scss';
import '@vueform/slider/themes/default.css';

createApp(App)
    .use(router)
    .use(createPinia())
    .mount("#app");