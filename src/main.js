import { createApp } from 'vue'
import 'bootstrap'
// import 'swiper'
// import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import swiper, { Navigation, Pagination, Autoplay } from 'swiper'
// import axios from 'axios'
import apiHelper from './static/helpers.js'
// import emitter from './static/mitt.js'
// import axios from './static/axios.js'
// import VueAxios from 'vue-axios'

// Import component
import Loading from 'vue3-loading-overlay'
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// app.use(apiHelper)
// app.use(VueAxios, axios)
// app.config.globalProperties.$emitter = emitter
app.config.globalProperties.$apiHelper = apiHelper
app.component('loading', Loading)
app.use(router)
app.mount('#app')
