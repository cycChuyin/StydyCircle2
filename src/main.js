import { createApp } from 'vue'
import 'bootstrap'
// import 'swiper'
// import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)
app.mount('#app')
