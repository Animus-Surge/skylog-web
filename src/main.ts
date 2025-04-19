import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Plugin imports
import App from './App.vue'
import router from './router'

// Styles imports 
import './assets/main.css'

// Create application instance
const app = createApp(App)

// Plugin initialization
app.use(createPinia())
app.use(router)

// Mount the app
app.mount('#app')
