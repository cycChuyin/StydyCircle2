<template>
  <component-navbar></component-navbar>
  <router-link to="/studyCircle">StudyCircle</router-link>｜
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/layout">Layout</router-link>｜
    <router-link to="/searchActivity">searchActivity</router-link> ｜
  </div>
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
