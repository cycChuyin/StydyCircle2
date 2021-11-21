<template>
  <div class="position-relative">
    <nav
      class="navbar navbar-expand-lg py-5 bg-transparent bgNav"
      style="height: 181px; margin-bottom: -96px"
    >
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                :to="`/activity/online`"
                class="nav-link fw-lig text-dark active"
                aria-current="page"
                @click="changeType('online')"
              >
                線上讀書會
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="`/activity/entity`"
                class="nav-link fw-lig text-dark"
                aria-current="page"
                @click="changeType('entity')"
              >
                實體讀書會
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="`/activity/workshop`"
                class="nav-link fw-lig text-dark"
                aria-current="page"
                @click="changeType('workshop')"
              >
                活動工作坊
              </router-link>
            </li>
          </ul>
          <!-- 右側 -->
          <ul class="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li class="nav-item">
              <router-link
                type="button"
                class="nav-link text-dark"
                :to="`/activities/search/9/1/-1/-1/-1/0/${this.allSearch}`"
              >
                <span class="material-icons d-flex align-items-center">
                  search
                </span>
              </router-link>
            </li>
            <!-- login -->
            <li class="nav-item" :class="{ 'd-none': isLogin }">
              <ul class="list-unstyled nav-item d-flex mb-2 mb-lg-0">
                <li class="nav-item ms-7">
                  <router-link
                    to="/sign-up"
                    class="nav-link text-dark px-3 py-2"
                  >
                    註冊
                  </router-link>
                </li>
                <li class="nav-item ms-7">
                  <router-link
                    to="/login"
                    type="button"
                    class="
                      btn btn-dark
                      nav-link
                      fw-bold
                      rounded-pill
                      text-white
                      px-3
                      py-2
                    "
                    >登入</router-link
                  >
                </li>
              </ul>
            </li>
            <!-- 登入後 + dropdown -->
            <li class="nav-item dropdown" :class="{ 'd-none': isSighOut }">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  :src="UserInfoData.UserImgUrl"
                  alt="memberPhoto"
                  class="rounded-pill memberPhoto-40"
                />
              </a>
              <ul
                class="
                  dropdown-menu dropdown-menu-end
                  p-0
                  rounded-top rounded-4
                  shadow
                "
                aria-labelledby="navbarDropdown"
              >
                <li class="text-center text-dark">
                  <router-link
                    :to="`/profile/my-activity/${UserInfoData.Id}`"
                    class="
                      dropdown-item
                      py-3
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                  >
                    <span class="material-icons pe-2">person</span>
                    個人檔案
                  </router-link>
                </li>
                <li class="text-center text-dark">
                  <a
                    class="
                      dropdown-item
                      py-3
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                    href="#"
                  >
                    <span class="material-icons pe-2">event_note</span>
                    探索活動</a
                  >
                </li>
                <li class="text-center text-dark">
                  <router-link
                    to="/auth-password"
                    class="
                      dropdown-item
                      py-3
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                  >
                    <span class="material-icons pe-2">settings</span>
                    重設密碼
                  </router-link>
                </li>
                <li class="text-center text-dark px-32 py-0">
                  <hr class="dropdown-divider m-0" />
                </li>
                <li class="text-center text-dark">
                  <a
                    class="dropdown-item py-3"
                    href="#"
                    @click.prevent="signOut"
                    >登出
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-link to="/study-circle">
      <img
        :src="`${this.envUploadLOGO}/logo_thak-tsheh.png`"
        class="position-absolute top-50 start-50 translate-middle"
        style="height: 85px"
      />
    </router-link>
  </div>
</template>

<style lang="scss">
.bgNav {
  background-image: url(https://thak-tsheh.rocket-coding.com/upload/backgroundimg/bg_nav_shadow_final.png);
  // background-image: url(https://thak-tsheh.rocket-coding.com/upload/backgroundimg/bg_nav.png);
}
</style>

<script>
export default {
  data () {
    return {
      lostTokenData: {},
      UserInfoData: {},
      isLogin: false,
      isSighOut: true,
      UserId: '',
      // logo 的環境變數路徑
      envUploadLOGO: '',
      allSearch: 'all'
    }
  },
  created () {
    // 宣告變數為環境變數的路徑，方便 HTML 可以換圖片
    this.envUploadLOGO = `${process.env.VUE_APP_LOGO}`
    // console.log(this.envUploadLOGO)
    console.log(this.$route)
    // this.UserId = JSON.parse(localStorage.getItem('UserId'))
    this.UserId = this.$route.params.UserId
    const isLoggin = localStorage.getItem('JwtToken')
    console.log(typeof isLoggin)
    if (!isLoggin || isLoggin === 'undefined') {
      this.isLogin = false
      this.isSighOut = true
    } else {
      // 1-8 GET請求 - Navbar 個人資料+頭貼 (JWT)
      this.$apiHelper.get('api/users/profile-data').then((res) => {
        console.log(res)
        if (res.data.Status) {
          console.log(res.data)
          const token = res.data.JwtToken
          localStorage.setItem('JwtToken', token)
          // 使用者 Id 存到 localStorage，等在個人檔案時可取出
          const UserId = res.data.Data.Id
          localStorage.setItem('UserId', UserId)
          // 將使用者基本資料存入 UserInfoData
          this.UserInfoData = res.data.Data
          console.log(this.UserInfoData)

          // 頭貼路徑
          const UserImgUrl = `${process.env.VUE_APP_USERIMG}/${res.data.Data.Image}?2021`
          this.UserInfoData.UserImgUrl = UserImgUrl
          // console.log(this.UserInfoData)

          // 狀態切換
          this.isLogin = true
          this.isSighOut = false
        }
      })
    }
  },
  methods: {
    signOut () {
      console.log('signOut')
      localStorage.removeItem('JwtToken')
      localStorage.removeItem('UserId')
      //   DEL請求
      this.$apiHelper
        .delete('api/users/logout')
        .then((res) => {
          // console.log(res.data.JwtToken)
          // const lostToken = res.data.JwtToken
          // localStorage.setItem('JwtToken', lostToken)
          this.lostTokenData = res.data
        })
        .catch((error) => {
          console.log('response: ', error.res.data)
        })
      this.isLogin = !this.isLogin
      this.isSighOut = !this.isSighOut
      // console.log(this.isLogin, this.isSighOut)
      this.$router.push('/study-circle')
    },
    // 向三個主題頁面傳遞狀態觸發事件
    changeType (type) {
      console.log('changeType')
      console.log(type)
      this.$emit('emit-changetype', type)
    }
  },
  mounted () {}
}
</script>
