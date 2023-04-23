import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Router from './router'
import App from './App.vue'
import './styles/tailwind.scss'
const app=createApp(App)
app.use(Router)
app.use(createPinia())
app.mount('#app')
