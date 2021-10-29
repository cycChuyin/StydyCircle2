import { createApp } from 'vue'
import 'bootstrap'
// import 'swiper'
// import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import axios from 'axios'
import apiHelper from './static/helpers.js'
// import axios from './static/axios.js'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(apiHelper)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
