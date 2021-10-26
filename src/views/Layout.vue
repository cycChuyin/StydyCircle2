<template>
<component-navbar></component-navbar>
<activity-carouse></activity-carouse>
<component-footer></component-footer>
<component-swiper></component-swiper>
</template>

<script>
import componentNavbar from '@/components/Layout/Navbar.vue'
import componentFooter from '@/components/Layout/Footer.vue'
import componentSwiper from '@/components/Swiper.vue'
import activityCarouse from '@/components/ActivityCarouse.vue'

export default {
  components: {
    componentNavbar,
    componentFooter,
    componentSwiper,
    activityCarouse
  }
}
</script>
