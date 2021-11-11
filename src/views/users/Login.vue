<template>
  <!-- banner -->
  <div class="loginBannerBG py-10 border-bottom border-dark">
    <div class="container">
      <h2 class="text-secondary text-center mb-5 fw-light fs-1">- 登入 -</h2>
      <!-- 登入頁內容 -->
      <div class="row justify-content-center">
        <div
          class="
            col-lg-8 col-md-10
            border border-md-0 border-secondary border-widths-2
            rounded-6
            px-lg-6 px-md-5 px-5
            py-md-8 py-5
          "
        >
          <div class="row flex-md-row flex-column align-items-center">
            <!-- 右側表單 -->
            <div class="col pe-0">
              <div class="pe-md-7 border-0 border-end border-secondary">
                <form @submit.prevent="logIn">
                  <div class="mb-3">
                    <label
                      for="loginUsername"
                      class="form-label fs-4 text-secondary"
                      >電子信箱</label
                    >
                    <div class="input-group">
                      <input
                        type="email"
                        id="loginUsername"
                        class="
                          form-control
                          rounded-pill
                          position-relative
                          ps-3
                          border-0
                          form-control-darkGray
                          py-13
                        "
                        placeholder="thaktsheh@email.com"
                        required
                        autofocus
                        v-model="user.Account"
                      />
                    </div>
                  </div>
                  <div class="mb-2">
                    <label
                      for="loginPassword"
                      class="form-label fs-4 text-secondary"
                      >密碼</label
                    >
                    <div class="input-group">
                      <input
                        type="password"
                        id="loginPassword"
                        class="
                          form-control
                          rounded-pill
                          position-relative
                          ps-3
                          border-0
                          py-13
                        "
                        placeholder="Password"
                        required
                        v-model="user.Password"
                      />
                      <span
                        class="
                          material-icons
                          text-secondary
                          position-absolute
                          top-50
                          end-0
                          translate-middle-y
                          pe-3
                        "
                        data-bs-container="body"
                        data-bs-toggle="popover"
                        data-bs-placement="top"
                        data-bs-content="Top popover"
                        >help_outline</span
                      >
                    </div>
                  </div>
                  <div
                    class="
                      mb-5
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input rounded-0 border-0"
                        id="rememberMe"
                      />
                      <label
                        class="form-check-label fw-light fs-8"
                        for="rememberMe"
                      >
                        記住我的帳號
                      </label>
                    </div>
                    <router-link
                      to="/forget-password"
                      class="text-decoration-underline text-dark fs-8 fw-light"
                    >
                      忘記密碼
                    </router-link>
                  </div>
                  <button
                    type="submit"
                    class="
                      btn btn-secondary
                      w-100
                      text-white
                      rounded-pill
                      py-13
                    "
                  >
                    登入
                  </button>
                </form>
                <p class="fs-7 mt-2">
                  還不是會員嗎？快來
                  <router-link
                    to="/sign-up"
                    class="linkforSignUp undoMember text-decoration-underline"
                  >
                    免費註冊會員
                  </router-link>
                  吧！
                </p>
              </div>
              <!-- <div class="col-xl-3 col-md-2 border-end border-secondary"></div> -->
            </div>
            <!-- 左側登入方式 -->
            <div class="col mt-md-0 mt-5">
              <div
                class="
                  row
                  justify-content-md-end justify-content-center
                  ps-md-7
                "
              >
                <ul class="list-unstyled flex-column g-0">
                  <li class="rounded-pill bg-light mx-auto mb-4 px-xxl-7 px-4">
                    <a
                      href="#"
                      class="
                        loginMethod
                        text-secondary
                        fw-loght
                        btn
                        d-flex
                        align-items-center
                        py-13
                      "
                    >
                      <i class="fab fa-facebook-square pe-md-32 pe-3"></i>
                      使用 Facebook 登入</a
                    >
                  </li>
                  <li class="rounded-pill bg-light mx-auto mb-4 px-xxl-7 px-4">
                    <a
                      href="#"
                      class="
                        loginMethod
                        text-secondary
                        fw-loght
                        btn
                        d-flex
                        align-items-center
                        py-13
                      "
                    >
                      <i class="fab fa-google pe-md-32 pe-3"></i>
                      使用 Google 登入</a
                    >
                  </li>
                  <li class="rounded-pill bg-light mx-auto px-xxl-7 px-4">
                    <a
                      href="#"
                      class="
                        loginMethod
                        text-secondary
                        fw-loght
                        btn
                        d-flex
                        align-items-center
                        py-13
                      "
                    >
                      <i class="fab fa-line pe-md-32 pe-3"></i>
                      使用 Line 登入</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        Account: '',
        Password: ''
      },
      // 登入後接收的 Token 資訊
      userTokenData: {
        Status: '',
        JwtToken: ''
      }
    }
  },
  methods: {
    logIn () {
      // POST請求
      // 2-2 會員登入（ * 取得刷新的 Token ）
      this.$apiHelper
        .post('api/users/login', this.user)
        .then((res) => {
          // console.log(res.data.Status)
          if (res.data.Status) {
            // console.log('login')
            this.userTokenData = res.data
            const getJwtToken = res.data.JwtToken
            // console.log(this.userTokenData)
            localStorage.setItem('JwtToken', getJwtToken)
            // this.$router.push('/study-circle')
            location.href = '/'
          }
        })
        .catch((error) => {
          console.log('response: ', error.res.data)
          console.log('response: ', error.res.status)
          console.log('response: ', error.res.headers)
        })

      // this.$apiHelper.get('api/users/profile-data').then((res) => {
      //   console.log(res)
      // })
    }
  }
}
</script>
