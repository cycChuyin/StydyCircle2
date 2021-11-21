<template>
  <!-- banner -->
  <div class="loginBannerBG py-10">
    <div class="container">
      <h2 class="text-dark text-center mb-5 fw-light fs-1">
        - 重置密碼 -
      </h2>
      <!-- 重置密碼內容 -->
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div
            class="border border-dark border-widths-2 rounded-6 px-6 py-7"
          >
            <form @submit.prevent="resetPassword">
              <div class="mb-3">
                <label
                  for="inputNewPassword"
                  class="text-dark fs-4 fw-normal me-3 mb-2"
                  >新密碼</label
                >
                <input
                  type="password"
                  class="
                    form-control
                    rounded-pill
                    position-relative
                    ps-3
                    border-0
                    form-control-darkGray
                    py-13
                    mb-1
                  "
                  id="inputNewPassword"
                  placeholder=""
                  v-model="user.Password"
                />
                <span class="fs-7 fw-light text-dark mt-1"
                  >＊密碼必須為 8 個字元及至少一個大寫字母</span
                >
              </div>
              <div class="mb-5">
                <label
                  for="inputCheckPassword"
                  class="text-dark fs-4 fw-normal me-3 mb-2"
                  >確認密碼</label
                >
                <input
                  type="password"
                  class="
                    form-control
                    rounded-pill
                    position-relative
                    ps-3
                    border-0
                    form-control-darkGray
                    py-13
                  "
                  id="inputCheckPassword"
                  placeholder=""
                  v-model="user.CheckPassword"
                />
              </div>

              <button
                class="btn btn-dark rounded-pill w-100 text-white py-13"
                type="submit"
                id="button-addon2"
              >
                確認送出
              </button>
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
        Password: '',
        CheckPassword: ''
      },
      mailReset: {
        Guid: '',
        CheckPassword: '',
        Password: ''
      },
      userTokenData: {}
    }
  },
  created () {
    // 取得 mailGuid 邏輯
    // 先取得網址字串
    const verifyLink = location.href
    // console.log(verifyLink)
    // 尋找網址列中是否有資料傳遞(QueryString)
    if (verifyLink.indexOf('?') !== -1) {
      // 在此直接將各自的參數資料切割放進ary中
      // string verifyLink = @"https://" + urlHost + @"/#auth-mail?guid=" + mailGuid;
      const aryGuid = verifyLink.split('?')
      // 此時ary的內容為：
      // ary[0] = 'urlHost'，ary[1] = 'guid= + mailGuid;'
      console.log(aryGuid)
      // 下迴圈去搜尋每個資料參數
      for (let i = 0; i <= aryGuid.length - 1; i++) {
        // 如果資料名稱為 guid 的話那就把他取出來
        if (aryGuid[i].split('=')[0] === 'guid') {
          this.mailReset.Guid = aryGuid[i].split('=')[1]
          console.log(this.mailReset)
        }
      }
    }

    const Token = localStorage.getItem('JwtToken')
    const mailGuid = this.mailReset.Guid
    console.log(Token, mailGuid)
    if (!Token && mailGuid.length === 0) {
      this.$router.push('/login')
    }
  },
  methods: {
    resetPassword () {
      console.log('resetPassword')
      const mailGuid = this.mailReset.Guid
      console.log(mailGuid)
      if (mailGuid.length === 0) {
        // POST請求
        this.$apiHelper
          .post('api/users/login-reset-password', this.user)
          .then((res) => {
            console.log(res)
            this.userTokenData = res.data
            const getJwtToken = res.data.JwtToken
            console.log(this.userTokenData, getJwtToken)
            localStorage.setItem('JwtToken', getJwtToken)
          })
      } else {
        this.mailReset.Password = this.user.Password
        this.mailReset.CheckPassword = this.user.CheckPassword
        console.log(this.mailReset)
        // POST請求
        this.$apiHelper
          .post('api/users/mail-reset-password', this.mailReset)
          .then((res) => {
            console.log(res)
          })
      }
    }
  }
}
</script>
