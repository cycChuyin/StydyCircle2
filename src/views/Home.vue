<template>
  <component-navbar></component-navbar>
  <router-view></router-view>
  <component-footer></component-footer>
</template>

<script>
import componentNavbar from '@/components/Layout/Navbar.vue'
import componentFooter from '@/components/Layout/Footer.vue'

export default {
  name: 'Home',
  components: {
    componentNavbar,
    componentFooter
  }
}
</script>
