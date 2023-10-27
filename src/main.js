import { createApp } from 'vue/dist/vue.esm-bundler' 
import router from './router'
import './style.css'
import App from './App.vue'
import i18n from "./i18n"

createApp(App).
  use(router).
  use(i18n). // <--- 3
  mount('#app')
