<template>
  <!-- 忘記密碼頁 -->
  <!-- banner -->
  <div class="loginBannerBG py-10">
    <div class="container">
      <h2 class="text-secondary text-center mb-5 fw-light fs-1">
        - 忘記密碼 -
      </h2>
      <!-- 登入頁內容 -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div
            class="border border-secondary border-widths-2 rounded-6 px-6 py-7"
          >
            <div class="d-flex align-items-end mb-3">
              <h3 class="text-secondary fs-4 fw-normal me-3 mb-0">
                會員的電子信箱
              </h3>
              <p class="fs-7 text-secondary fw-light m-0">
                ＊請輸入註冊之電子信箱，隨後會收到重置密碼的郵件
              </p>
            </div>
            <form @submit.prevent="forgetPassword">
              <div class="row">
                <div class="col-9">
                  <input
                    type="email"
                    class="
                      form-control
                      rounded-pill
                      position-relative
                      ps-3
                      border-0
                      form-control-darkGray
                    "
                    id="loginUsername"
                    placeholder="thaktsheh@email.com"
                    v-model="user.Account"
                  />
                </div>
                <div class="col-3">
                  <!-- <button class="btn btn-secondary rounded-pill w-100 text-white" type="button" id="button-addon2">送出</button> -->

                  <!-- popUp - 設定完成視窗  -->
                  <!-- Button trigger modal -->
                  <button
                    type="submit"
                    class="btn btn-secondary rounded-pill text-white w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    送出
                  </button>
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div
                        class="
                          modal-content
                          px-8
                          py-5
                          rounded-4
                          position-relative
                          shadow-sm
                          p-3
                          mb-5
                          bg-body
                          rounded
                        "
                      >
                        <button
                          type="button"
                          class="btn-close position-absolute top-29 end-29"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                        <p class="fs-4 text-secondary mb-4">
                          請前往電子信箱點擊連結並重置密碼！
                        </p>
                        <router-link
                          to="/login"
                          class="btn btn-secondary rounded-pill text-white"
                          data-bs-dismiss="modal"
                        >
                          確定
                        </router-link>
                      </div>
                    </div>
                  </div>
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
    forgetPassword () {
      console.log('forgetPassword')
      // PUT請求
      this.$apiHelper
        .put('api/users/forget-password-mail', this.user)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.error(error)
          console.log('response: ', error.res.data)
          console.log('response: ', error.res.status)
          console.log('response: ', error.res.headers)
          console.log('response: ', error.res.Message)
        })

      // this.$apiHelper.get('api/users/profile-data').then((res) => {
      //   console.log(res)
      // })
    }
  }
}
</script>
