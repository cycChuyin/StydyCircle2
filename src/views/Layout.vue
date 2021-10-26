<template>
<component-navbar></component-navbar>
<component-footer></component-footer>
</template>

<script>
import componentNavbar from '@/components//Layout/Navbar.vue'
import componentFooter from '@/components/Layout/Footer.vue'

export default {
  components: {
    componentNavbar,
    componentFooter
  }
}
</script>
