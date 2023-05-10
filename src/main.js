import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './arch/store';
import './assets/main.css'
import { makeServer } from "./server"

makeServer();

const app = createApp(App)
app.use(pinia);
app.use(router)

app.mount('#app')
