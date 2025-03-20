import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import { i18n } from '@/i18n/index';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(i18n);
app.mount('#app');


createApp(App).mount('#app')
