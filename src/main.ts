import { createApp } from 'vue'
import pinia from './store'
import Router from './router'
import App from './App.vue'
import './styles/tailwind.scss'

const app = createApp(App)
app.use(Router)
app.use(pinia)
app.mount('#app')
