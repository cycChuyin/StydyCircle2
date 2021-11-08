<template>
  <!-- navbar 導覽列 -->
  <component-navbar></component-navbar>
  <!-- banner -->
  <div class="banner bg-searchselect">
    <div class="container">
      <div class="row">
        <div class="col-md-5 py-9 pt-10">
          <h6 class="text-secondary display-6 fw-bold mb-3">線上讀書會</h6>
          <p class="text-secondary fs-4">
            線上讀書會的宗旨是希望閱讀、分享不再局限於地點的距離，不論您是在地球的另一邊，我們都很歡迎大家一起來參加！
          </p>
        </div>
      </div>
      <!-- 頁籤 -->
      <div class="row justify-content-start">
        <div class="col-md-6">
          <!-- 頁籤 -->
          <ul
            class="
              nav nav-tabs
              d-flex
              justify-content-start
              list-unstyled
              border-0
            "
          >
            <li
              class="nav-item rounded-4 rounded-bottom-0"
              :class="{ linkActive: isOnline }"
              aria-current="true"
              aria-selected="true"
              @click="changeActive('online')"
            >
              <router-link
                class="nav-link px-32 py-3 rounded-4 rounded-bottom-0"
                type="button"
                :to="`/activity/online`"
                >線上讀書會</router-link
              >
            </li>
            <li
              class="nav-item rounded-4 rounded-bottom-0"
              :class="{ linkActive: isEntity }"
              aria-selected="false"
              @click="changeActive('entity')"
            >
              <router-link
                class="nav-link px-32 py-3 rounded-4 rounded-bottom-0"
                type="button"
                :to="`/activity/entity`"
                >實體讀書會</router-link
              >
            </li>
            <li
              class="nav-item rounded-4 rounded-bottom-0"
              :class="{ linkActive: isWorkShop }"
              aria-selected="false"
              @click="changeActive('workshop')"
            >
              <router-link
                class="nav-link px-32 py-3 rounded-4 rounded-bottom-0"
                type="button"
                :to="`/activity/workshop`"
                >活動工作坊</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>
  <!-- 下方 footer -->
  <component-footer></component-footer>
</template>

<style>
.linkActive {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
  border-bottom: 0;
  font-weight: bold;
}
</style>

<script>
import componentNavbar from '@/components/Layout/Navbar.vue'
import componentFooter from '@/components/Layout/Footer.vue'

export default {
  data () {
    return {
      isOnline: true,
      isEntity: false,
      isWorkShop: false
    }
  },
  components: {
    componentNavbar,
    componentFooter
  },
  methods: {
    changeActive (type) {
      if (type === 'online') {
        this.isOnline = true
        this.isEntity = false
        this.isWorkShop = false
      } else if (type === 'entity') {
        this.isOnline = false
        this.isEntity = true
        this.isWorkShop = false
      } else if (type === 'workshop') {
        this.isOnline = false
        this.isEntity = false
        this.isWorkShop = true
      }
    }
  }
}
</script>
