<template>
  <!-- 註冊頁 -->
  <!-- banner -->
  <div class="signUpBannerBG py-10">
    <div class="container">
      <h2 class="text-secondary text-center mb-5 fw-light">- 註冊 -</h2>
      <!-- Signup -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div
            class="border border-secondary border-widths-2 rounded-6 px-6 py-7"
          >
            <!-- 表單內容 -->
            <form @submit.prevent="signUp">
              <!-- 驗證信箱 - 初始狀態 -->
              <div class="mb-4">
                <label for="emailAddress" class="form-label fs-4 text-secondary"
                  >電子信箱</label
                >
                <div class="input-group">
                  <input
                    type="email"
                    id="emailAddress"
                    class="
                      form-control
                      border-0
                      rounded-pill
                      ps-3
                      position-relative
                      form-control-darkGray
                      py-13
                    "
                    placeholder="thak_tsheh@gmail.com"
                    aria-label="thak_tsheh@gmail.com"
                    aria-describedby="button-addon2"
                    required
                    autofocus
                    v-model="user.Account"
                  />
                </div>
              </div>
              <!-- 驗證信箱 - 錯誤訊息 -->
              <!-- <div class="errorWaringMessenger">
                <div class="mb-4">
                  <div class="d-flex justify-content-between">
                    <label for="emailAddress" class="form-label text-dark"
                      >電子信箱</label
                    >
                    <div class="errorMessenger text-danger d-flex mt-2">
                      <span class="material-icons fs-6 me-1">error</span>
                      <p class="fs-8 mb-0">
                        此電子信箱已註冊，請使用新的信箱註冊
                      </p>
                    </div>
                  </div>
                  <div class="input-group">
                    <input
                      type="email"
                      class="
                        form-control-danger
                        border-0
                        rounded-pill
                        ps-3
                        position-relative
                      "
                      id="emailAddress"
                      placeholder="thak_tsheh@gmail.com"
                      aria-label="thak_tsheh@gmail.com"
                      aria-describedby="button-addon2"
                    />
                  </div>
                </div>
              </div> -->

              <!-- 驗證信箱 - 已驗證/驗證成功 -->
              <!-- <div class="verifiedSuccess">
                <div class="mb-4">
                  <label for="emailAddress" class="form-label text-dark"
                    >電子信箱</label
                  >
                  <div class="input-group">
                    <input
                      type="email"
                      class="
                        form-control
                        border-0
                        rounded-pill
                        ps-3
                        position-relative
                      "
                      id="emailAddress"
                      placeholder="thak_tsheh@gmail.com"
                      aria-label="thak_tsheh@gmail.com"
                      aria-describedby="button-addon2"
                    />
                    <span
                      class="
                        material-icons
                        position-absolute
                        top-50
                        end-0
                        translate-middle-y
                        text-secondary
                        me-3
                        fs-8
                      "
                      >check_circle_outline</span
                    >
                  </div>
                </div>
              </div> -->

              <!-- 密碼 - 初始狀態 -->
              <div class="mb-4">
                <label for="signUpPassword" class="form-label fs-4">密碼</label>
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control border-0 rounded-pill py-13"
                    id="signUpPassword"
                    placeholder=""
                    v-model="user.Password"
                  />
                </div>
                <div class="errorMessenger text-dark d-flex mt-2">
                  <span class="material-icons fs-6 me-1"> error </span>
                  <p class="fs-8">密碼必須為8個英文字元以及至少一個大寫字母</p>
                </div>
              </div>
              <!-- 密碼 - 已驗證/驗證成功 -->
              <!-- <div class="signupPasswordSuccess">
                <div class="mb-4">
                  <label for="signUpPassword" class="form-label">密碼</label>
                  <div class="input-group">
                    <input
                      type="password"
                      class="
                        form-control
                        border-0
                        rounded-pill
                        position-relative
                      "
                      id="signUpPassword"
                      placeholder=""
                    />
                    <span
                      class="
                        material-icons
                        position-absolute
                        top-50
                        end-0
                        translate-middle-y
                        text-secondary
                        me-3
                        fs-8
                      "
                      >check_circle_outline</span
                    >
                  </div>
                  <div class="errorMessenger text-dark d-flex mt-2">
                    <span class="material-icons fs-6 me-1"> error </span>
                    <p class="fs-8">
                      密碼必須為8個英文字元以及至少一個大寫字母
                    </p>
                  </div>
                </div>
              </div> -->
              <!-- 確認密碼 - 初始狀態 / 成功註冊 -->
              <div class="mb-5">
                <label for="signUpConfirmPassword" class="form-label text-dark"
                  >確認密碼</label
                >
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control border-0 rounded-pill position-relative py-13"
                    id="signUpConfirmPassword"
                    placeholder=""
                  />
                  <span
                    class="
                      material-icons
                      position-absolute
                      top-50
                      end-0
                      translate-middle-y
                      text-success
                      me-3
                      fs-8
                    "
                    >check_circle_outline</span
                  >
                </div>
                <div
                  class="mb-5 d-flex justify-content-between align-items-center"
                >
                  <div class="form-check mt-2">
                    <input
                      type="checkbox"
                      class="form-check-input rounded-0 border-0"
                      id="agree"
                    />
                    <label class="form-check-label fw-light fs-8" for="agree">
                      我已同意平台服務規範、隱私權政策、讀冊平台會員服務條款
                    </label>
                  </div>
                </div>
              </div>
              <!-- 註冊按鈕 - 初始狀態 -->
              <!-- <button
                type="submit"
                class="
                  btn btn-disabled
                  w-100
                  disabled
                  text-dark
                  border-0
                  rounded-pill
                "
              >
                註冊
              </button> -->
              <!-- 註冊按鈕 - 2-2-4 通知驗證信箱 -->
              <!-- Button trigger modal -->
              <button
                type="submit"
                class="btn btn-secondary rounded-pill text-white w-100 py-13"
              >
                註冊
              </button>
            </form>
            <!-- popUp - 設定完成視窗  -->
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
                  <p class="fs-4 text-secondary mb-4 text-center">
                    恭喜您成功註冊會員！
                  </p>
                  <p class="text-secondary mb-4">
                    系統已發送驗證信至您的信箱，請至電子信箱驗證信箱以啟用會員資格，方可享有參加活動之權利。
                  </p>
                  <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">重新登入</button> -->
                  <a
                    href="#"
                    class="btn btn-secondary rounded-pill text-white py-13"
                    data-bs-dismiss="modal"
                    >回到首頁</a
                  >
                </div>
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
      userTokenData: {
        JwtToken: ''
      }
    }
  },
  methods: {
    signUp () {
      console.log('sign up')
      // POST請求
      this.$apiHelper
        .post('api/users/sign-up', this.user)
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
