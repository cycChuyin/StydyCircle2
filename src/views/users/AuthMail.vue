<template>
  <!-- 註冊開通頁面 -->
  <!-- banner -->
  <div class="loginBannerBG py-10 border-bottom border-dark">
    <div class="container">
      <h2 class="text-secondary text-center mb-5 fw-light fs-1">- 註冊 -</h2>
      <!-- 登入頁內容 -->
      <div class="row justify-content-center">
        <div
          class="
            col-md-6
            border border-md-0 border-secondary border-widths-2
            rounded-6
            px-lg-6 px-md-5 px-5
            py-md-8 py-5
            d-flex
            flex-column
            justify-content-center
          "
        >
          <h4 class="fs-4 text-center text-secondary mb-3">
            恭喜您成功開通帳號！
          </h4>
          <p class="text-secondary text-center mb-32">
            很棒！您終於加入讀冊伙伴的一員了，趕快登入會員吧！
          </p>
          <div class="row justify-content-center">
            <div class="col-md-8">
              <router-link
                to="/login"
                type="button"
                class="btn btn-secondary rounded-pill text-white w-100 py-13"
              >
                回到登入頁
              </router-link>
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
      mailGuid: {
        Guid: ''
      }
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
      // console.log(aryGuid)
      // 下迴圈去搜尋每個資料參數
      for (let i = 0; i <= aryGuid.length - 1; i++) {
        // 如果資料名稱為 guid 的話那就把他取出來
        if (aryGuid[i].split('=')[0] === 'guid') {
          this.mailGuid.Guid = aryGuid[i].split('=')[1]
        }
      }
    }

    // PUT 請求
    this.$apiHelper
      .put('api/users/auth-mail', this.mailGuid)
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log('response: ', error.res.data)
      })
  }
}
</script>
