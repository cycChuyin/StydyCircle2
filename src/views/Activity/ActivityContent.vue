<template>
  <!-- banner -->
  <div
    class="banner"
    :style="{ backgroundImage: 'url(' + getActivityInfo.Image + ')' }"
  >
    <div class="container">
      <div class="row">
        <div class="col-5 py-10">
          <div class="activityBrief">
            <p class="fs-1 text-light fw-bold">
              {{ getActivityInfo.Name }}
            </p>
          </div>

          <p class="contentTextShadow text-light fw-nomal fs-4">
            {{ getActivityInfo.Summary }}
          </p>
          <p class="fs-6 text-light contentTextShadow">
            {{ getActivityInfo.transStartDate }} Thu.
            {{ getActivityInfo.transStartTime }} -
            {{ getActivityInfo.transEndTime }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- main  -->
  <div class="bg-white pt-5">
    <div class="container">
      <!-- 活動詳情 - 標題區塊 -->
      <h2 class="text-secondary fw-bold mb-4">
        <!-- {{ getActivityInfo.ActivityType }} - {{ getActivityInfo.Name }} -->
        {{ getActivityInfo.ActivityType }} - 活動詳情
      </h2>
      <div class="d-flex">
        <button
          type="button"
          class="
            btn btn-dark
            nav-link
            rounded-pill
            text-white
            d-flex
            align-items-center
            me-3
          "
        >
          <span class="material-icons me-2">bookmark_border</span>收藏活動
        </button>
        <button
          type="button"
          class="
            btn btn-primary
            nav-link
            rounded-pill
            text-dark
            d-flex
            align-items-center
          "
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          :class="{ 'd-none': hadRegister }"
        >
          <span class="material-icons me-2">arrow_forward</span>立即參加
        </button>
        <!-- 5-2 活動頁_活動詳情_已報名 -->
        <button
          type="button"
          class="
            btn btn-primary
            nav-link
            rounded-pill
            text-dark
            d-flex
            align-items-center
            disabled
          "
          :class="{ 'd-none': unRegister }"
        >
          <span class="material-icons me-2">check_circle_outline</span>已報名
        </button>
        <!-- 5-3 活動頁_活動詳情_已結束 -->
        <!-- <button
          type="button"
          class="
            btn btn-primary
            nav-link
            rounded-pill
            text-dark
            d-flex
            align-items-center
          "
        >
          <span class="material-icons me-2">rate_review</span>查看評價
        </button>
        <div class="position-relative">
          <div class="talkbubble"></div>
          <p class="text-secondary m-0 position-absolute top-8 start-24">
            ＼ 感謝支持，活動已結束囉 /
          </p>
        </div> -->
      </div>
      <!-- 活動內文區塊 -->
      <div class="row py-5 justify-content-between">
        <!-- 左邊區塊 -->
        <div class="col-xl-7 col-md-12">
          <h3 class="text-secondary fs-4">活動內容</h3>
          <p class="text-dark lh-base">
            {{ getActivityInfo.ContentText }}
          </p>
          <h3 class="text-secondary mt-32 mb-3 fs-4">報名流程</h3>
          <div class="row">
            <div class="col-8">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <p class="text-secondary m-0 fw-light">開始</p>
                <div class="line border border-secondary px-3"></div>
                <p class="text-secondary m-0 fw-light">結束</p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div class="start">
                  <p class="text-dark mb-1">
                    {{ getActivityInfo.transStartDate }}
                  </p>
                  <p class="text-dark m-0">
                    {{ getActivityInfo.transStartTime }}
                  </p>
                </div>
                <div class="end">
                  <p class="text-dark mb-1">
                    {{ getActivityInfo.transEndDate }}
                  </p>
                  <p class="text-dark mb-1">
                    {{ getActivityInfo.transEndTime }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h3 class="text-secondary mt-32 mb-3 fs-4">主辦單位</h3>
          <p class="text-dark mb-1">{{ getActivityInfo.OrganizerName }}</p>
          <p class="text-dark mb-1">{{ getActivityInfo.OrganizerPhone }}</p>
          <a :href="getOrganizerInfo.OrganizerMail" class="text-dark mb-1">{{
            getActivityInfo.OrganizerMail
          }}</a>
          <h3 class="text-secondary mt-32 mb-3 fs-4">活動備註</h3>
          <p class="text-dark mb-32">
            {{ getActivityInfo.PleaseNote }}
          </p>
          <p class="text-secondary pt-32 border-top border-secondary">
            已有 {{ getActivityInfo.ApplicantNumber }} 人參加｜{{
              getActivityInfo.CollectNumber
            }}
            人收藏
          </p>
          <div class="d-flex">
            <button
              type="button"
              class="
                btn btn-dark
                nav-link
                rounded-pill
                text-white
                d-flex
                align-items-center
                me-3
              "
            >
              <span class="material-icons me-2">bookmark_border</span>收藏活動
            </button>
            <button
              type="button"
              class="
                btn btn-primary
                nav-link
                rounded-pill
                text-dark
                d-flex
                align-items-center
              "
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              :class="{ 'd-none': hadRegister }"
            >
              <span class="material-icons me-2">arrow_forward</span>立即參加
            </button>
            <!-- 5-2 活動頁_活動詳情_已報名 -->
            <button
              type="button"
              class="
                btn btn-primary
                nav-link
                rounded-pill
                text-dark
                d-flex
                align-items-center
                disabled
              "
              :class="{ 'd-none': unRegister }"
            >
              <span class="material-icons me-2">check_circle_outline</span
              >已報名
            </button>
            <!-- 5-3 活動頁_活動詳情_已結束 -->
            <!-- <button
              type="button"
              class="
                btn btn-primary
                nav-link
                rounded-pill
                text-dark
                d-flex
                align-items-center
              "
            >
              <span class="material-icons me-2">rate_review</span>查看評價
            </button> -->
          </div>
        </div>
        <!-- 右邊區塊 -->
        <div class="col-xl-4 col-md-12">
          <div
            class="
              bg-transparent
              border border-dark
              p-40
              rounded-4
              text-secondary
              mb-5
            "
          >
            <div class="d-flex justify-content-between">
              <p class="text-secondary fw-bold fs-4">
                {{ getActivityInfo.transStartDate }}
              </p>
              <p class="text-secondary fw-bold fs-4">Tue.</p>
            </div>
            <div class="d-flex justify-content-between align-items-center m-0">
              <p class="text-secondary fw-light fs-4 mb-0">
                {{ getActivityInfo.transStartTime }}
              </p>
              <div class="line-sm border border-secondary"></div>
              <p class="text-secondary fw-light fs-4 mb-0">
                {{ getActivityInfo.transEndTime }}
              </p>
            </div>
            <h4 class="mt-32 mb-3"></h4>
            <p class="fw-light">費用：{{ getActivityInfo.Price }} / 人</p>
            <p class="fw-light">線上：{{ getActivityInfo.Software }}</p>
            <p class="fw-light">實體：台南市幸福區快樂街 123 號 2 樓</p>
          </div>
          <div
            class="
              bg-transparent
              border border-dark
              p-40
              rounded-4
              text-secondary
            "
          >
            <div class="d-flex align-items-center mb-4">
              <img
                :src="getOrganizerInfo.Image"
                alt="memberPhoto"
                class="rounded-pill memberPhoto-56 me-4"
              />
              <p class="m-0 fw-bold">
                {{ getOrganizerInfo.Name }} ｜ {{ getOrganizerInfo.NickName }}
              </p>
            </div>
            <p>
              {{ getOrganizerInfo.AboutMe }}
            </p>
            <div class="d-flex border-top border-secondary pt-3">
              <a :href="getOrganizerInfo.FacebookLink"
                ><i class="fab fa-facebook-square me-4"></i
              ></a>
              <a :href="getOrganizerInfo.InstagramLink"
                ><i class="fab fa-instagram me-4"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-searchselect">
      <!-- 活動評論區塊 -->
      <div class="container">
        <h3 class="text-secondary pt-5 mb-3">活動評價</h3>
        <!-- 分數、星星區塊 -->
        <div class="d-flex">
          <h5 class="display-5 text-secondary fw-bold me-3">5.0</h5>
          <div>
            <div class="d-flex align-items-center mb-2">
              <span class="material-icons text-primary me-1">star_rate</span>
              <span class="material-icons text-primary me-1">star_rate</span>
              <span class="material-icons text-primary me-1">star_rate</span>
              <span class="material-icons text-primary me-1">star_rate</span>
              <span class="material-icons text-primary">star_rate</span>
            </div>
            <p class="fs-7 text-secondary m-0 ps-2">5/5 (25則評論)</p>
          </div>
        </div>

        <!-- 評論卡片區塊 -->
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <!-- 左邊評論-->
          <ul class="col-md-8">
            <li
              class="card mb-3 rounded-4 bg-white px-32 py-32"
              v-for="item in getOpinionData"
              :key="item.Id"
            >
              <div class="row g-0">
                <div class="col-md-2">
                  <div class="d-flex flex-column align-items-center">
                    <img
                      :src="item.userImgUrl"
                      alt="memberPhoto"
                      class="rounded-pill memberPhoto-64 mb-2"
                    />
                    <p class="text-secondary m-0 mb-1 text-center">
                      {{ item.Name }}
                    </p>
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="card-body p-0">
                    <h5 class="card-title">
                      <p class="card-text text-secondary mb-2">
                        {{ item.transCreatDate }}
                      </p>
                      <div class="d-flex align-items-center">
                        <span class="material-icons fs-4 text-primary me-1"
                          >star_rate</span
                        >
                        <span class="material-icons fs-4 text-primary me-1"
                          >star_rate</span
                        >
                        <span class="material-icons fs-4 text-primary me-1"
                          >star_rate</span
                        >
                        <span class="material-icons fs-4 text-primary me-1"
                          >star_rate</span
                        >
                        <span class="material-icons fs-4 text-primary"
                          >star_rate</span
                        >
                      </div>
                    </h5>
                    <p class="card-text text-secondary lh-base">
                      {{ item.Opinion }}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!-- 右邊區塊-->
          <div class="col-md-4">
            <div
              class="
                bg-transparent
                border border-dark
                p-40
                rounded-4
                text-secondary
              "
            >
              <p class="fs-4">
                看完評論是不是有點心動？<br />
                先趕快收藏起來吧！
              </p>
              <div class="border-top border-secondary pt-4">
                <p class="text-secondary border-secondary">
                  已有 {{ getActivityInfo.ApplicantNumber }} 人參加｜{{
                    getActivityInfo.CollectNumber
                  }}
                  人收藏
                </p>
                <div class="d-flex">
                  <button
                    type="button"
                    class="
                      btn btn-dark
                      nav-link
                      rounded-pill
                      text-white
                      d-flex
                      align-items-center
                      me-3
                    "
                  >
                    <span class="material-icons me-2">bookmark_border</span
                    >收藏活動
                  </button>
                  <!-- 5-2 活動頁_活動詳情_尚未報名 -->
                  <button
                    type="button"
                    class="
                      btn btn-primary
                      nav-link
                      rounded-pill
                      text-dark
                      d-flex
                      align-items-center
                    "
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    :class="{ 'd-none': hadRegister }"
                  >
                    <span class="material-icons me-2">arrow_forward</span
                    >立即參加
                  </button>
                  <!-- 5-2 活動頁_活動詳情_已報名 -->
                  <button
                    type="button"
                    class="
                      btn btn-primary
                      nav-link
                      rounded-pill
                      text-dark
                      d-flex
                      align-items-center
                      disabled
                    "
                    :class="{ 'd-none': unRegister }"
                  >
                    <span class="material-icons me-2">check_circle_outline</span
                    >已報名
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- pagination -->
          <div
            class="
              d-flex
              justify-content-center
              fs-4
              align-items-center
              py-12
              text-secondary
            "
          >
            <nav aria-label="Page navigation example">
              <div class="d-flex align-items-center">
                <ul class="pagination m-0">
                  <li class="page-item fs-4 rounded-pill">
                    <a
                      class="p-3 bg-transparent border-0"
                      href="#"
                      aria-label="Previous"
                    >
                      <span class="material-icons" aria-hidden="true"
                        >chevron_left</span
                      >
                    </a>
                  </li>
                  <li class="bg-primary fs-4 text-white rounded-pill active">
                    <a class="p-3 border-0 text-white" href="#">1</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="p-3 bg-transparent border-0" href="#">2</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="p-3 bg-transparent border-0" href="#">3</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="p-3 bg-transparent border-0" href="#">...</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="p-3 bg-transparent border-0" href="#">18</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="p-3 bg-transparent border-0" href="#">19</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="p-3 bg-transparent border-0" href="#">20</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="bg-transparent" href="#" aria-label="Next">
                      <span class="material-icons" aria-hidden="true"
                        >chevron_right</span
                      >
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <!-- 畫布 - offcanvas -->
        <div
          class="offcanvas offcanvas-end px-5 py-8"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header border-bottom border-secondary px-0">
            <h5 id="offcanvasRightLabel" class="text-secondary">報名資訊</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body p-0">
            <form>
              <div class="py-5">
                <div class="row">
                  <div class="col-6">
                    <p class="text-secondary">活動資訊</p>
                    <ul class="list-unstyled">
                      <li class="text-dark">
                        活動名稱｜{{ getActivityInfo.Name }}
                      </li>
                      <li class="text-dark">
                        活動方式｜{{ getActivityInfo.ActivityType }}
                      </li>
                      <li class="text-dark">
                        視訊軟體｜{{ getActivityInfo.Software }}
                      </li>
                      <li class="text-dark">
                        活動日期｜{{ getActivityInfo.transStartDate }} （四）
                      </li>
                      <li class="text-dark">
                        活動時間｜{{ getActivityInfo.transStartTime }} -
                        {{ getActivityInfo.transEndTime }}
                      </li>
                      <li class="text-dark">
                        活動費用｜${{ getActivityInfo.Price }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-6 border-start border-secondary">
                    <div
                      class="
                        d-flex
                        flex-column
                        justify-content-center
                        align-items-center
                      "
                    >
                      <ul class="list-unstyled">
                        <li>
                          <p class="text-secondary text-start">參加人資訊</p>
                        </li>
                        <li class="text-dark mb-3">
                          <label for="name" class="form-label">姓名</label>
                          <div class="input-group">
                            <input
                              type="text"
                              class="
                                form-control-darkGray
                                rounded-pill
                                position-relative
                                ps-3
                              "
                              id="name"
                              placeholder="陳小明"
                              v-model="getUsersAttendData.Name"
                            />
                          </div>
                        </li>
                        <li class="text-dark mb-3">
                          <label for="cellphone" class="form-label"
                            >電話號碼</label
                          >
                          <div class="input-group">
                            <input
                              type="text"
                              class="
                                form-control-darkGray
                                rounded-pill
                                position-relative
                                ps-3
                              "
                              id="cellphone"
                              placeholder="0912-345-678"
                              v-model="getUsersAttendData.MobilePhone"
                            />
                          </div>
                        </li>
                        <li class="text-dark disabled">
                          <label for="email" class="form-label">電子信箱</label>
                          <div class="input-group">
                            <input
                              type="email"
                              class="
                                form-control-darkGray
                                rounded-pill
                                position-relative
                                disabled
                                ps-3
                              "
                              id="email"
                              placeholder="chansiuming@email.com"
                              v-model="getUsersAttendData.Account"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p
                class="
                  border border-secondary
                  rounded-pill
                  mb-32
                  w-100
                  py-2
                  text-center text-secondary
                "
              >
                總計 NT$ 100
              </p>
              <!-- 注意事項 -->
              <p class="text-secondary mb-3">活動資訊</p>
              <p class="text-dark mb-3">
                麻煩在活動開始前先自行下載及註冊
                Zoom，以免影響活動進行。為了維持活動之品質，倘若遲到 30
                分鐘即代表放棄活動資格，敬請大家互相配合！
              </p>
              <p class="text-secondary mb-3">取消規則</p>
              <p class="text-dark">
                活動開始的前 10 日如需取消報名，需酌收票價 10%
                手續費。若在活動開始的 10
                日內取消報名，恕無法退還所有報名費用。煩請各位參加者事先預留活動之時間，希望大家可以好好享受活動的樂趣。
              </p>
              <!-- 按鈕 -->
              <div class="d-flex">
                <button
                  type="button"
                  class="btn btn-outline-secondary rounded-pill w-100"
                  data-bs-dismiss="offcanvas"
                >
                  取消
                </button>
                <button
                  type="submit"
                  class="btn btn-dark rounded-pill w-100"
                  data-bs-dismiss="offcanvas"
                  @click="sendApply"
                >
                  確認報名
                </button>
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
  props: ['Id'],
  data () {
    return {
      getActivityInfo: {},
      getOrganizerInfo: {},
      getUsersAttendData: {},
      giveUserInfo: {
        ActivityId: '',
        ActivityPrice: '',
        UserId: '',
        UserName: '',
        UserMobilePhone: '',
        UserAccount: ''
      },
      getOpinionData: [],
      putViews: {
        ActivityId: ''
      },
      // 已經報名的話，則 hadRegister 為 ture ，讓 d-none 效果觸發
      hadRegister: false,
      unRegister: true
    }
  },
  created () {
    console.log(this.$route.params)
    const Id = this.Id
    this.putViews.ActivityId = Id
    // 5-1 活動+舉辦者資料
    this.$apiHelper.get(`api/activity/id/${Id}`).then((res) => {
      if (res.data.Status) {
        // console.log(res.data)
        // 活動
        const oriActivityInfo = res.data.Data.ActivityData
        const activityImgUrl = `${process.env.VUE_APP_ACTIVITYIMG}/${res.data.Data.ActivityData.Image}?2021`
        this.transDate(oriActivityInfo)
        this.getActivityInfo = oriActivityInfo
        this.getActivityInfo.Image = activityImgUrl
        console.log(this.getActivityInfo)
        // 講者
        const userImgUrl = `${process.env.VUE_APP_USERIMG}/${res.data.Data.OrganizerData.Image}?2021`
        const oriOrganizerInfo = res.data.Data.OrganizerData
        this.getOrganizerInfo = oriOrganizerInfo
        console.log(this.getOrganizerInfo)
        this.getOrganizerInfo.Image = userImgUrl
      }
    })
    // 5-2增加活動瀏覽次數
    this.$apiHelper
      .put('api/organizer/activity/views', this.putViews)
      .then((res) => {
        if (res.data.Status) {
          console.log(res.data.Message)
        }
      })

    // 5-3 活動評價資料 + 分頁
    this.$apiHelper.get(`api/activity/opinion/${Id}`).then((res) => {
      if (res.data.Status) {
        // console.log(res.data.Data)
        const oriOpinionData = res.data.Data.Opinion
        oriOpinionData.forEach((item) => {
          const userUrl = `${process.env.VUE_APP_USERIMG}/${item.Image}?2021`
          item.userImgUrl = userUrl
          this.transDate(item)
        })
        this.getOpinionData = oriOpinionData
        console.log(this.getOpinionData)
      }
    })

    const Token = localStorage.getItem('JwtToken')
    // 5-4 確認是否已報名過活動 (JWT)
    if (!Token || Token === 'undefined') {
      console.log('沒有登入喔！')
      this.hadRegister = false
      this.unRegister = true
    } else if (Token) {
      this.$apiHelper
        .get(`api/users/activity/attend/status/${Id}`)
        .then((res) => {
          const status = res.data.Status
          if (status === true) {
            console.log('有登入而且有報名了！')
            localStorage.setItem('JwtToken', res.data.JwtToken)
            this.hadRegister = true
            this.unRegister = false
          } else {
            console.log('尚未報名唷！')
            localStorage.setItem('JwtToken', res.data.JwtToken)
            this.hadRegister = false
            this.unRegister = true
          }
        })
    }
    // 6-1 報名活動 - 個資帶入
    this.$apiHelper.post('api/users/attend-data', Token).then((res) => {
      console.log(res)
      if (res.data.Status) {
        const getJwtToken = res.data.JwtToken
        localStorage.setItem('JwtToken', getJwtToken)
        this.getUsersAttendData = res.data.Data
        console.log(this.getUsersAttendData)
      }
    })
  },
  methods: {
    transDate (item) {
      // 1. 針對日期格式進行轉換
      // 取得開始、結束日期
      const startDate = item.ActivityStartDate
      const endDate = item.ActivityEndDate
      const creatDate = item.CreatDate
      // 轉換日期格式,呼叫函式
      const transStartDateObj = this.splitDate(startDate)
      const transEndDateObj = this.splitDate(endDate)
      const transCreatDateObj = this.splitDate(creatDate)
      // transDate:{splitFinalDate: '2021.12.12', splitFinalTime: '16:00'}
      // 將拆解好的時間加入陣列
      item.transStartDate = transStartDateObj.splitFinalDate
      item.transStartTime = transStartDateObj.splitFinalTime
      item.transEndDate = transEndDateObj.splitFinalDate
      item.transEndTime = transEndDateObj.splitFinalTime
      item.transCreatDate = transCreatDateObj.splitFinalDate
      item.transCreatTime = transCreatDateObj.splitFinalTime
      // 回傳每筆資料
      return item
    },
    splitDate (date) {
      const Time = new Date(date)
      Time.getFullYear()
      Time.getMonth()
      Time.getDate()
      Time.getHours()
      Time.getMinutes()
      const splitFinalDate = `${Time.getFullYear()}.${
        Time.getMonth() + 1
      }.${Time.getDate()}`
      const splitFinalTime = `${Time.getHours()}:${
        (Time.getMinutes() < 10 ? '0' : '') + Time.getMinutes()
      }`
      return { splitFinalDate, splitFinalTime }
    },
    sendApply () {
      this.giveUserInfo = {
        ActivityId: this.getActivityInfo.Id,
        ActivityPrice: this.getActivityInfo.Price,
        UserId: this.getUsersAttendData.Id,
        UserName: this.getUsersAttendData.Name,
        UserMobilePhone: this.getUsersAttendData.MobilePhone,
        UserAccount: this.getUsersAttendData.Account
      }
      console.log(this.giveUserInfo)
      // 6-2 報名活動 - 免費＋發信
      // const Token = localStorage.getItem('JwtToken')
      this.$apiHelper
        .post('api/users/activity/free/attend', this.giveUserInfo)
        .then((res) => {
          console.log(res)
          if (res.data.Status) {
            const getJwtToken = res.data.JwtToken
            localStorage.setItem('JwtToken', getJwtToken)
            this.$router.push('/register-success')
          }
        })
    }
  }
}
</script>
