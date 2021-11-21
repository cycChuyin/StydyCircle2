<template>
  <!-- 驗證舊密碼頁面 -->
  <div class="pt-10">
    <!-- banner -->
    <div class="loginBannerBG py-10">
      <div class="container">
        <h2 class="text-dark text-center mb-5 fw-light fs-1">- 驗證舊密碼 -</h2>
        <!-- 內容 -->
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="border border-dark border-widths-2 rounded-6 px-6 py-7">
              <div class="d-flex align-items-end mb-3">
                <h3 class="text-dark fs-4 fw-normal me-3 mb-0">現在的密碼</h3>
                <p class="fs-7 text-dark fw-light m-0">
                  ＊請先輸入目前登入之密碼，以便重置新密碼
                </p>
              </div>
              <form @submit.prevent="authPassword">
                <div class="row">
                  <div class="col-md-9">
                    <input
                      type="password"
                      class="
                        rounded-pill
                        position-relative
                        ps-3
                        border-0
                        form-control-lightYellow
                        py-13
                      "
                      id="inputOldPassword"
                      placeholder=""
                      v-model="user.Password"
                    />
                    <span
                      class="text-danger fs-8 mt-2"
                      :class="{ 'd-none': isError }"
                    >
                      密碼錯誤
                    </span>
                  </div>
                  <div class="col-md-3">
                    <button
                      class="btn btn-dark rounded-pill w-100 text-white py-13"
                      type="submit"
                      id="button-addon2"
                    >
                      確認送出
                    </button>
                  </div>
                </div>
              </form>
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
      userTokenData: {
        JwtToken: ''
      },
      isError: true
    }
  },
  created () {
    const Token = localStorage.getItem('JwtToken')
    console.log(Token)
    if (!Token) {
      this.$router.push('/login')
    }
  },
  methods: {
    authPassword () {
      console.log('authPassword')
      console.log(this.user.Password)
      // POST請求
      this.$apiHelper
        .post('api/users/auth-password', this.user)
        .then((res) => {
          console.log(res)
          const getJwtToken = res.data.JwtToken
          this.userTokenData.JwtToken = getJwtToken
          //   console.log(this.userTokenData.JwtToken, getJwtToken)
          localStorage.setItem('JwtToken', getJwtToken)

          const resStatus = res.status
          console.log(resStatus)
          if (resStatus === 200) {
            return this.$router.push('/reset-password')
          }
        })
        .catch((error) => {
          console.log('response: ', error.res.data)
          this.isError = !this.isError
          console.log(this.isError)
        })
    }
  }
}
</script>
