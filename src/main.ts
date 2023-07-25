import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import { createApp } from 'vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
