<template>
  <!-- navbar 導覽列 -->
  <component-navbar :emit-changetype="changeActive(type)"></component-navbar>
  <!-- banner -->
  <div
    :class="{
      bannerOnlineUrl: isOnline,
      bannerEntityUrl: isEntity,
      bannerWorkshopUrl: isWorkShop
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-5 py-9 pt-10" :class="{ 'd-none': !isOnline }">
          <h6 class="text-white display-6 fw-bold mb-3">線上讀書會</h6>
          <p class="text-white fs-4">
            線上讀書會的宗旨是希望閱讀、分享不再局限於地點的距離，不論您是在地球的另一邊，我們都很歡迎大家一起來參加！
          </p>
        </div>
        <div class="col-md-5 py-9 pt-10" :class="{ 'd-none': !isEntity }">
          <h6 class="text-white display-6 fw-bold mb-3">實體讀書會</h6>
          <p class="text-white fs-4">
            實體讀書會就是最原始的宗旨，希望所有熱愛閱讀的讀者們，能夠找到就近又熱愛閱讀的讀友們一同分享與討論，讓讀書變得更有趣！
          </p>
        </div>
        <div class="col-md-5 py-9 pt-10" :class="{ 'd-none': !isWorkShop }">
          <h6 class="text-white display-6 fw-bold mb-3">活動工作坊</h6>
          <p class="text-white fs-4">
            活動工作坊有別於前兩者的讀書會，在活動工作坊中，我們希望可以籍由不同類型的書籍，舉辦更多興趣之活動，讓大家可以身在其中！
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
              :class="{ linkActive: isOnline }"
              class="nav-item rounded-4 rounded-bottom-0"
              aria-current="true"
              aria-selected="true"
              @click="changeActive('Online')"
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
              @click="changeActive('Entity')"
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
              @click="changeActive('Workshop')"
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
.bannerOnlineUrl {
  background-image: url(https://studycircle.rocket-coding.com/upload/banner/online.jpg);
}
.bannerEntityUrl {
  background-image: url(https://studycircle.rocket-coding.com/upload/banner/study.jpg);
}
.bannerWorkshopUrl {
  background-image: url(https://studycircle.rocket-coding.com/upload/banner/activity.jpg);
}
</style>

<script>
import componentNavbar from '@/components/Layout/Navbar.vue'
import componentFooter from '@/components/Layout/Footer.vue'

export default {
  props: ['type'],
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
      console.log(type)
      console.log('我有被觸發喔！')
      if (type === 'Online') {
        this.isOnline = true
        this.isEntity = false
        this.isWorkShop = false
      } else if (type === 'Entity') {
        this.isOnline = false
        this.isEntity = true
        this.isWorkShop = false
      } else if (type === 'Workshop') {
        this.isOnline = false
        this.isEntity = false
        this.isWorkShop = true
      }
    }
  },
  // watch: {
  //   Type (n, old) {
  //     console.log(n, old)
  //   }
  // },
  created () {
    const type = this.type
    if (type === 'Online') {
      this.isOnline = true
      this.isEntity = false
      this.isWorkShop = false
    } else if (type === 'Entity') {
      this.isOnline = false
      this.isEntity = true
      this.isWorkShop = false
    } else if (type === 'Workshop') {
      this.isOnline = false
      this.isEntity = false
      this.isWorkShop = true
    }
  },
  mounted () {
    console.log(this.refs)
  }
}
</script>
