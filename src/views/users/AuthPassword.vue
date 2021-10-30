<template>
  <!-- 驗證舊密碼頁面 -->
  <!-- banner -->
  <div class="loginBannerBG py-10">
    <div class="container">
      <h2 class="text-secondary text-center mb-5 fw-light fs-1">
        - 驗證舊密碼 -
      </h2>
      <!-- 內容 -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div
            class="border border-secondary border-widths-2 rounded-6 px-6 py-7"
          >
            <div class="d-flex align-items-end mb-3">
              <h3 class="text-secondary fs-4 fw-normal me-3 mb-0">
                現在的密碼
              </h3>
              <p class="fs-7 text-secondary fw-light m-0">
                ＊請先輸入目前登入之密碼，以便重置新密碼
              </p>
            </div>
            <form @submit="authPassword">
              <div class="row">
                <div class="col-md-9">
                  <input
                    type="password"
                    class="
                      form-control
                      rounded-pill
                      position-relative
                      ps-3
                      border-0
                      form-control-darkGray
                      me-
                    "
                    id="inputOldPassword"
                    placeholder=""
                    v-model="user.Password"
                  />
                </div>
                <div class="col-md-3">
                  <button
                    class="btn btn-secondary rounded-pill w-100 text-white"
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
      }
    }
  },
  methods: {
    authPassword () {
      console.log('authPassword')
      // const api = `${process.env.VUE_APP_API}/api/users/login`
      // console.log(api)
      // POST請求
      //   this.$apiHelper
      //     .post('api/users/login', this.user)
      //     .then((res) => {
      //       console.log(res)
      //       const getJwtToken = res.data.JwtToken
      //       this.userTokenData.JwtToken = getJwtToken
      //       console.log(this.userTokenData.JwtToken, getJwtToken)
      //       localStorage.setItem('JwtToken', getJwtToken)
      //     })
      //     .catch((error) => {
      //       console.log('response: ', error.res.data)
      //       console.log('response: ', error.res.status)
      //       console.log('response: ', error.res.headers)
      //     })

      //   this.$apiHelper.get('api/users/profile-data').then((res) => {
      //     console.log(res)
      //   })
    }
  }
}
</script>
