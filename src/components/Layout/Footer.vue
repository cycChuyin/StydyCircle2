<template>
  <div class="border border-dark">
    <div class="container">
      <img src="@/assets/photo/logo.png" class="mt-5" style="width:239px; height:auto;" />
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
              <h5 class="text-secondary">聯絡我們</h5>
              <div class="border-bottom border-secondary">
                <div class="row align-items-center">
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control border-0 rounded-0 w-100"
                      placeholder="# 想留言跟我說什麼 ..."
                    />
                  </div>
                  <div class="col-4 mb-2 d-flex justify-content-end">
                    <!-- <button type="button" class="btn btn-outline-secondary rounded-pill">傳送</button> -->
                    <!-- <button type="button" class="btn btn-outline-secondary rounded-pill disabled">傳送中</button> -->
                    <button
                      type="button"
                      class="btn btn-dark text-white rounded-pill disabled"
                    >
                      已傳送
                    </button>
                  </div>
                </div>
              </div>
              <ul class="list-unstyled d-flex">
                <li class="nav-item">
                  <a class="nav-link text-secondary" :href="companyInfoes.FacebookLink">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-secondary" :href="companyInfoes.InstagramLink">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-secondary" :href="companyInfoes.LineLink">
                    <i class="fab fa-line"></i>
                  </a>
                </li>
              </ul>
              <!-- login -->
              <!-- <ul class="list-unstyled nav-item mb-2 mb-lg-0 d-flex justify-content-end">
                        <li class="nav-item me-4">
                        <button type="button" class="btn btn-outline-secondary nav-link fw-normal rounded-pill text-secondary">註冊</button>
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
                        <a class="nav-link active text-secondary" aria-current="page" href="#">首頁</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="#">步驟說明</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link text-secondary dropdown-toggle" href="#"
                            data-bs-toggle="collapse" data-bs-target="#listActivityContent" aria-expanded="false">活動目錄</a>
                        <ul class="collapse list-unstyled list-group" id="listActivityContent">
                            <li><a href="#" class="list-group-item list-group-item-action text-secondary fw-light border-0">- 線上讀書會</a></li>
                            <li><a href="#" class="list-group-item list-group-item-action text-secondary fw-light border-0">- 實體讀書會</a></li>
                            <li><a href="#" class="list-group-item list-group-item-action text-secondary fw-light border-0">- 活動工作坊</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="#">個人檔案</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="#">文章分享</a>
                    </li>
            </ul> -->
          <div class="d-md-flex">
            <div class="exloreActivity me-1">
              <h6 class="text-secondary fw-bold">探索活動</h6>
              <ul class="list-group border-0">
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-secondary">線上讀書會</a>
                </li>
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-secondary">實體讀書會</a>
                </li>
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-secondary">活動工作坊</a>
                </li>
              </ul>
            </div>
            <div class="specification mt-md-0 me-1 mt-4">
              <h6 class="text-secondary fw-bold">活動規範</h6>
              <ul class="list-group border-0">
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-secondary">服務條款會</a>
                </li>
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-secondary">隱私權政策</a>
                </li>
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-secondary">使用者條款</a>
                </li>
              </ul>
            </div>
            <div class="specification mt-md-0 mt-4">
              <h6 class="text-secondary fw-bold">關於我們</h6>
              <ul class="list-group border-0">
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-secondary">常見問題</a>
                </li>
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-secondary">關於我們</a>
                </li>
                <li class="list-group-item ps-0 border-0">
                  <a href="#" class="link-secondary">聯絡我們</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p
        class="text-secondary fw-lighter border-top py-4 border-secondary pb-5"
      >
        {{ companyInfoes.Name }} © All Rights Reserved.
      </p>
    </div>
  </div>
</template>

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
      }
    }
  },
  mounted () {
    this.getCompanyData()
  },
  methods: {
    getCompanyData () {
      const api = `${process.env.VUE_APP_API}/company/infoes`
      this.axios.get(api).then((res) => {
        console.log(res)
        this.companyInfoes = res.data
      })
    }
  }
}
</script>
