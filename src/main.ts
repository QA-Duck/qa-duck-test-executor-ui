import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { modalKey, modalStore } from './store/modules/modal'
import {templateStore, templateKey} from './store/modules/templates'

createApp(App)
.use(templateStore, templateKey)
.use(modalStore, modalKey)
.use(router)
.mount('#app')
