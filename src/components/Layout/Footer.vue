<template>
  <div class="bgFooter d-flex align-items-center" style="height: 702px">
    <div class="container">
      <router-link to="/study-circle">
        <img :src="`${this.envUploadLOGO}/logo_thak-tsheh.png`" class="mt-5" />
      </router-link>
      <div
        class="
          row
          flex-md-row-reverse
          justify-content-between
          align-items-center
        "
      >
        <!-- 聯絡我們區塊 -->
        <div class="col-md-8 mt-md-0 mt-5">
          <div class="row justify-content-end">
            <div class="col-xl-6 col-md-8">
              <h5 class="text-dark">聯絡我們</h5>
              <div class="border-bottom border-dark">
                <form
                  @submit.prevent="contactUs"
                  class="row align-items-center"
                >
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control border-0 rounded-0 w-100"
                      placeholder="# 想留言跟我說什麼 ..."
                      v-model="user.Message"
                    />
                  </div>
                  <div class="col-4 mb-2 d-flex justify-content-end">
                    <button
                      type="submit"
                      class="btn btn-outline-dark rounded-pill"
                    >
                      傳送
                    </button>
                    <!-- <button type="submit" class="btn btn-outline-secondary rounded-pill disabled">傳送中</button> -->
                    <!-- <button
                      type="submit"
                      class="btn btn-dark text-white rounded-pill disabled"
                    >
                      已傳送
                    </button> -->
                  </div>
                </form>
              </div>
              <ul class="list-unstyled d-flex">
                <li class="nav-item">
                  <a
                    class="nav-link text-dark"
                    :href="companyInfoes.FacebookLink"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-dark"
                    :href="companyInfoes.InstagramLink"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" :href="companyInfoes.LineLink">
                    <i class="fab fa-line"></i>
                  </a>
                </li>
              </ul>
              <!-- login -->
              <!-- <ul class="list-unstyled nav-item mb-2 mb-lg-0 d-flex justify-content-end">
                        <li class="nav-item me-4">
                        <button type="button" class="btn btn-outline-secondary nav-link fw-normal rounded-pill text-dark">註冊</button>
                        </li>
                        <li class="nav-item">
                        <button type="button" class="btn btn-secondary nav-link fw-normal rounded-pill text-white">登入</button>
                        </li>
                    </ul> -->
            </div>
          </div>
        </div>
        <!-- 右側選單 -->
        <div class="col-md-4 py-md-8 py-md-5 pt-4 py-5">
          <!-- list-group -->
          <!-- <ul class="list-unstyled flex-column g-0">
                    <li class="nav-item ">
                        <a class="nav-link active text-dark" aria-current="page" href="#">首頁</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#">步驟說明</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link text-dark dropdown-toggle" href="#"
                            data-bs-toggle="collapse" data-bs-target="#listActivityContent" aria-expanded="false">活動目錄</a>
                        <ul class="collapse list-unstyled list-group" id="listActivityContent">
                            <li><a href="#" class="list-group-item list-group-item-action text-dark fw-light border-0">- 線上讀書會</a></li>
                            <li><a href="#" class="list-group-item list-group-item-action text-dark fw-light border-0">- 實體讀書會</a></li>
                            <li><a href="#" class="list-group-item list-group-item-action text-dark fw-light border-0">- 活動工作坊</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#">個人檔案</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#">文章分享</a>
                    </li>
            </ul> -->
          <div class="d-md-flex">
            <div class="exloreActivity me-1">
              <h6 class="text-dark fw-bold">探索活動</h6>
              <ul class="list-group border-0">
                <li class="list-group-item ps-0 border-0">
                  <router-link class="link-dark" :to="`/activity/online`"
                    >線上讀書會</router-link
                  >
                </li>
                <li class="list-group-item ps-0 border-0">
                  <router-link class="link-dark" :to="`/activity/entity`"
                    >實體讀書會</router-link
                  >
                </li>
                <li class="list-group-item ps-0 border-0">
                  <router-link class="link-dark" :to="`/activity/workshop`"
                    >活動工作坊</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="specification mt-md-0 me-1 mt-4">
              <h6 class="text-dark fw-bold">活動規範</h6>
              <ul class="list-group border-0">
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-dark">服務條款會</a>
                </li>
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-dark">隱私權政策</a>
                </li>
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-dark">使用者條款</a>
                </li>
              </ul>
            </div>
            <div class="specification mt-md-0 mt-4">
              <h6 class="text-dark fw-bold">關於我們</h6>
              <ul class="list-group border-0">
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-dark">常見問題</a>
                </li>
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-dark">關於我們</a>
                </li>
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-dark">聯絡我們</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="text-dark fw-lighter border-top py-4 border-dark pb-5">
        {{ companyInfoes.Name }} © All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.list-group-item {
  background-color: #f8d268;
}
.bgFooter {
  background-image: url(https://thak-tsheh.rocket-coding.com/upload/backgroundimg/bg_footer.png);
}
</style>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      companyInfoes: {
        Name: '公司名稱',
        Email: 'Email',
        FacebookLink: 'Facebook',
        InstagramLink: 'Instagram',
        LineLink: 'Line'
      },
      user: {
        Message: ''
      },
      // logo 的環境變數路徑
      envUploadLOGO: ''
    }
  },
  created () {
    // 宣告變數為環境變數的路徑，方便 HTML 可以換圖片
    this.envUploadLOGO = `${process.env.VUE_APP_LOGO}`
    // console.log(this.envUploadLOGO)
  },
  mounted () {
    this.getCompanyData()
  },
  methods: {
    getCompanyData () {
      // 1-6 公司資料
      this.$apiHelper.get('api/company/infoes').then((res) => {
        // console.log(res)
        if (res.data.Status) {
          this.companyInfoes = res.data.Data
        }
      })
    },
    contactUs () {
      console.log('聯絡我')
      const Token = localStorage.getItem('JwtToken')
      console.log(Token)
      // 1-5 聯絡我們功能（JWT）
      this.$apiHelper.post('api/users/contact-us', this.user).then((res) => {
        // const Token = localStorage.getItem('JwtToken')
        console.log(res)
        if (res.data.Status) {
          const getJwtToken = res.data.JwtToken
          localStorage.setItem('JwtToken', getJwtToken)
        }
      })
    },
    // 向三個主題頁面傳遞狀態觸發事件
    changeType (type) {
      console.log('changeType')
      console.log(type)
      this.$emit('emit-changetype', type)
    }
  }
}
</script>
