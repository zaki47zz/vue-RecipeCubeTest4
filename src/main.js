import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery/dist/jquery.min.js'

createApp(App).use(router).mount('#app')