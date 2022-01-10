import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {templateStore, templateKey} from './store/modules/templates'

createApp(App)
.use(templateStore, templateKey)
.use(router)
.mount('#app')
