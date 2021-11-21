<template>
  <!-- 註冊頁 -->
  <div class="pt-10">
    <!-- banner -->
    <div class="bg-secondary py-10">
      <div class="container">
        <h2 class="text-dark text-center mb-5 display-6 fw-bold">- 註冊 -</h2>
        <!-- Signup -->
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="border border-dark border-widths-2 rounded-6 px-6 py-7">
              <!-- 表單內容 -->
              <form @submit.prevent="signUp">
                <!-- 驗證信箱 - 初始狀態 -->
                <div class="mb-4">
                  <div class="d-flex justify-content-between">
                    <label for="emailAddress" class="form-label fs-4 text-dark"
                      >電子信箱</label
                    >
                    <!-- 驗證信箱 - 錯誤訊息 -->
                    <div
                      class="errorMessenger text-danger d-flex mt-2"
                      :class="{ 'd-none': !isError }"
                    >
                      <span class="material-icons fs-6 me-1">error</span>
                      <p class="fs-8 mb-0">
                        {{ ErrorText }}
                      </p>
                    </div>
                  </div>
                  <div class="input-group">
                    <input
                      type="email"
                      id="emailAddress"
                      class="
                        border-0
                        rounded-pill
                        ps-3
                        position-relative
                        form-control-lightYellow
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

                <!-- 密碼 -->
                <div class="mb-4">
                  <label for="signUpPassword" class="form-label fs-4 text-dark"
                    >密碼</label
                  >
                  <div class="input-group">
                    <input
                      type="password"
                      class="
                        form-control-lightYellow
                        border-0
                        rounded-pill
                        py-13
                      "
                      id="signUpPassword"
                      placeholder=""
                      v-model="user.Password"
                    />
                  </div>
                  <div class="errorMessenger text-dark d-flex mt-2">
                    <span class="material-icons fs-6 me-1"> error </span>
                    <p class="fs-8">密碼長度必須大於8個字元</p>
                  </div>
                </div>
                <!-- 確認密碼 -->
                <div class="mb-5">
                  <label
                    for="signUpConfirmPassword"
                    class="form-label fs-4 text-dark"
                    >確認密碼</label
                  >
                  <div class="input-group">
                    <input
                      type="password"
                      class="
                        form-control-lightYellow
                        border-0
                        rounded-pill
                        position-relative
                        py-13
                      "
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
                    class="
                      mb-5
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="form-check mt-2">
                      <input
                        type="checkbox"
                        class="form-check-input rounded-0 border-0"
                        id="agree"
                        ref="checkAgreeBtn"
                        @click="checkAgreeBtn"
                      />
                      <label class="form-check-label fw-light fs-8" for="agree">
                        我已同意平台服務規範、隱私權政策、讀冊平台會員服務條款
                      </label>
                      <div
                        class="errorMessenger text-danger d-flex mt-2"
                        :class="{ 'd-none': isCheck }"
                      >
                        <span class="material-icons fs-6 me-1"> error </span>
                        <p class="fs-8">請閱讀平台服務規範</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 註冊按鈕 - 2-2-4 通知驗證信箱 -->
                <!-- Button trigger modal -->
                <button
                  type="submit"
                  class="btn btn-dark rounded-pill text-white w-100 py-13"
                >
                  註冊
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 註冊成功的彈跳視窗 -->
  <auth-mail-modal ref="AuthMailModal"></auth-mail-modal>
</template>

<script>
import AuthMailModal from '../../components/Modal/AuthMailＭodal.vue'
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
      isError: false,
      isCheck: true,
      ErrorText: ''
    }
  },
  components: {
    AuthMailModal
  },
  methods: {
    // 登出
    signUp () {
      const checkAgreeBtn = this.$refs.checkAgreeBtn
      // 查看有無勾選狀態
      const checkStatus = checkAgreeBtn.checked
      if (checkStatus === true) {
        console.log('sign up')
        // 2-1 未開通註冊+發信
        // POST請求
        this.$apiHelper.post('api/users/sign-up', this.user).then((res) => {
          if (res.data.Status) {
            console.log(res.data.Message)
            this.$refs.AuthMailModal.showModal()
            this.isError = false
          } else {
            console.log(res.data.Message)
            this.isError = true
            this.ErrorText = res.data.Message
          }
        })
      } else {
        // 如果沒有勾選
        this.isCheck = false
      }
    },
    // 檢查是否有勾選同意
    checkAgreeBtn () {
      if (this.isCheck === false) {
        this.isCheck = true
      }
    }
  }
}
</script>
