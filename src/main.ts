import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/router.plugin';
import './style.css';

createApp(App)
    .use(router)
    .mount('#app');