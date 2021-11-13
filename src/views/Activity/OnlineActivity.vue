<template>
  <!-- 內容 -->
  <div class="bg-white">
    <div class="container">
      <!-- 篩選搜尋區塊 -->
      <div class="row py-5">
        <div class="col-md-10">
          <div
            class="
              rounded-pill
              border border-secondary
              d-flex
              align-items-center
            "
          >
            <div class="input-group px-4 py-13">
              <button
                class="
                  btn btn-outline-secondary
                  dropdown-toggle
                  border-0
                  text-dark
                  fw-light
                  border-end border-dark
                  bg-transparent
                  py-0
                "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                類別
              </button>
              <ul
                class="dropdown-menu text-dark fw-light p-0 border-0 rounded-3"
                aria-labelledby="defaultDropdown"
              >
                <li>
                  <a class="dropdown-item py-2 text-center rounded-3" href="#"
                    >所有分類</a
                  >
                </li>
                <li>
                  <a class="dropdown-item py-2 text-center rounded-3" href="#"
                    >商業理財</a
                  >
                </li>
                <li>
                  <a class="dropdown-item py-2 text-center rounded-3" href="#"
                    >文學小說</a
                  >
                </li>
                <li>
                  <a class="dropdown-item py-2 text-center rounded-3" href="#"
                    >人文史地</a
                  >
                </li>
                <li>
                  <a class="dropdown-item py-2 text-center rounded-3" href="#"
                    >醫療保健</a
                  >
                </li>
                <li>
                  <a class="dropdown-item py-2 text-center rounded-3" href="#"
                    >生活風格</a
                  >
                </li>
                <li>
                  <a class="dropdown-item py-2 text-center rounded-3" href="#"
                    >自然科學</a
                  >
                </li>
                <li>
                  <a class="dropdown-item py-2 text-center rounded-3" href="#"
                    >電腦資訊</a
                  >
                </li>
              </ul>
              <input
                type="text"
                class="
                  form-control form-control-darkGray
                  border-0
                  position-relative
                  ps-3
                  bg-transparent
                "
                aria-label="Text input with dropdown button"
                placeholder="請輸入關鍵字搜尋（書籍名稱、活動名稱等）"
              />
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <button
            class="
              btn
              bg-secondary
              fs-6
              py-13
              rounded-pill
              text-white
              w-100
              h-100
              d-flex
              justify-content-center
              align-items-center
            "
            type="button"
          >
            <span class="material-icons me-3">search</span>
            搜尋
          </button>
        </div>
      </div>
      <!-- 即將截止 -->
      <div class="mb-5">
        <!-- 標題 -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h6 class="display-6 text-secondary fw-bold">
            即將截止報名的線上讀書會
          </h6>
          <a href="#" class="text-secondary fs-4 d-flex align-items-center">
            <span class="material-icons me-2">east</span>
            More
          </a>
        </div>
        <!-- 卡片區塊 -->
        <ul class="row row-cols-1 row-cols-md-3 g-4 list-unstyled">
          <li class="col" v-for="item in newOnlineComingData" :key="item.Id">
            <div class="card h-100 rounded-4">
              <img
                :src="item.imgUrl"
                class="card-img-top card-img rounded-top-4"
                :alt="item.Image"
              />
              <div class="card-img-overlay d-flex justify-content-end">
                <span class="material-icons text-white fs-1"
                  >bookmark_border</span
                >
              </div>
              <div class="card-body p-4">
                <h5 class="card-title mb-2 p-0 fs-4">
                  <router-link
                    :to="`/activity-content/${item.Id}`"
                    class="stretched-link text-secondary"
                  >
                    {{ item.Name }}
                  </router-link>
                </h5>
                <div class="d-flex align-items-center mb-2">
                  <div class="d-flex align-items-center">
                    <span class="material-icons text-primary me-1"
                      >star_rate</span
                    >
                    <span class="material-icons text-primary me-1"
                      >star_rate</span
                    >
                    <span class="material-icons text-primary me-1"
                      >star_rate</span
                    >
                    <span class="material-icons text-primary me-1"
                      >star_rate</span
                    >
                    <span class="material-icons text-primary">star_rate</span>
                  </div>
                  <p class="text-gray m-0 ps-2">
                    {{ item.EvaluateStars }}/5 ({{ item.OpinionNumber }}則評論)
                  </p>
                </div>
                <p class="text-secondary mb-4">
                  <span class="pe-13">{{ item.transStartDate }}</span
                  >｜<span class="px-13"
                    >{{ item.transStartTime }} - {{ item.transEndTime }}</span
                  >｜<span class="ps-13">{{ item.OrganizerName }}</span>
                </p>
                <div
                  class="
                    card-footer
                    border-0
                    bg-transparent
                    p-0
                    d-flex
                    justify-content-between
                    align-items-end
                  "
                >
                  <p class="text-secondary fs-8 m-0">
                    {{ item.ApplicantNumber }}人參加 ｜
                    {{ item.CollectNumber }}人收藏
                  </p>
                  <p class="text-secondary fs-4 m-0">NT$ {{ item.Price }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 最多人報名 -->
      <div class="mb-5">
        <!-- 標題 -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h6 class="display-6 text-secondary fw-bold">
            最多人報名的線上讀書會
          </h6>
          <a href="#" class="text-secondary fs-4 d-flex align-items-center">
            <span class="material-icons me-2">east</span>
            More
          </a>
        </div>
        <!-- 卡片區塊 -->
        <ul class="row row-cols-1 row-cols-md-3 g-4 list-unstyled">
          <li class="col" v-for="item in newOnlineHotData" :key="item.Id">
            <div class="card h-100 rounded-4">
              <img
                :src="item.imgUrl"
                class="card-img-top card-img rounded-top-4"
                :alt="item.Image"
              />
              <div class="card-img-overlay d-flex justify-content-end">
                <span class="material-icons text-white fs-1"
                  >bookmark_border</span
                >
              </div>
              <div class="card-body p-4">
                <h5 class="card-title mb-2 p-0 fs-4">
                  <router-link
                    :to="`/activity-content/${item.Id}`"
                    class="stretched-link text-secondary"
                  >
                    {{ item.Name }}
                  </router-link>
                </h5>
                <div class="d-flex align-items-center mb-2">
                  <div class="d-flex align-items-center">
                    <span class="material-icons text-primary me-1"
                      >star_rate</span
                    >
                    <span class="material-icons text-primary me-1"
                      >star_rate</span
                    >
                    <span class="material-icons text-primary me-1"
                      >star_rate</span
                    >
                    <span class="material-icons text-primary me-1"
                      >star_rate</span
                    >
                    <span class="material-icons text-primary">star_rate</span>
                  </div>
                  <p class="text-gray m-0 ps-2">
                    {{ item.EvaluateStars }}/5 ({{ item.OpinionNumber }}則評論)
                  </p>
                </div>
                <p class="text-secondary mb-4">
                  <span class="pe-13">{{ item.transStartDate }}</span
                  >｜<span class="px-13"
                    >{{ item.transStartTime }} - {{ item.transEndTime }}</span
                  >｜<span class="ps-13">{{ item.OrganizerName }}</span>
                </p>
                <div
                  class="
                    card-footer
                    border-0
                    bg-transparent
                    p-0
                    d-flex
                    justify-content-between
                    align-items-end
                  "
                >
                  <p class="text-secondary fs-8 m-0">
                    {{ item.ApplicantNumber }}人參加 ｜
                    {{ item.CollectNumber }}人收藏
                  </p>
                  <p class="text-secondary fs-4 m-0">NT$ {{ item.Price }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 本週新推出 -->
      <div class="mb-5">
        <!-- 標題 -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h6 class="display-6 text-secondary fw-bold">
            本週新推出的線上讀書會
          </h6>
          <a href="#" class="text-secondary fs-4 d-flex align-items-center">
            <span class="material-icons me-2">east</span>
            More
          </a>
        </div>
        <!-- 卡片區塊 -->
        <ul class="row row-cols-1 row-cols-md-3 g-4 list-unstyled">
          <li class="col" v-for="item in newOnlineNewData" :key="item.Id">
            <div class="card h-100 rounded-4">
              <img
                :src="item.imgUrl"
                class="card-img-top card-img rounded-top-4"
                :alt="item.Image"
              />
              <div class="card-img-overlay d-flex justify-content-end">
                <span class="material-icons text-white fs-1"
                  >bookmark_border</span
                >
              </div>
              <div class="card-body p-4">
                <h5 class="card-title mb-2 p-0 fs-4">
                  <router-link
                    :to="`/activity-content/${item.Id}`"
                    class="stretched-link text-secondary"
                  >
                    {{ item.Name }}
                  </router-link>
                </h5>
                <div class="d-flex align-items-center mb-2">
                  <div class="d-flex align-items-center">
                    <span class="material-icons text-primary me-1"
                      >star_rate</span
                    >
                    <span class="material-icons text-primary me-1"
                      >star_rate</span
                    >
                    <span class="material-icons text-primary me-1"
                      >star_rate</span
                    >
                    <span class="material-icons text-primary me-1"
                      >star_rate</span
                    >
                    <span class="material-icons text-primary">star_rate</span>
                  </div>
                  <p class="text-gray m-0 ps-2">
                    {{ item.EvaluateStars }}/5 ({{ item.OpinionNumber }}則評論)
                  </p>
                </div>
                <p class="text-secondary mb-4">
                  <span class="pe-13">{{ item.transStartDate }}</span
                  >｜<span class="px-13"
                    >{{ item.transStartTime }} - {{ item.transEndTime }}</span
                  >｜<span class="ps-13">{{ item.OrganizerName }}</span>
                </p>
                <div
                  class="
                    card-footer
                    border-0
                    bg-transparent
                    p-0
                    d-flex
                    justify-content-between
                    align-items-end
                  "
                >
                  <p class="text-secondary fs-8 m-0">
                    {{ item.ApplicantNumber }}人參加 ｜
                    {{ item.CollectNumber }}人收藏
                  </p>
                  <p class="text-secondary fs-4 m-0">NT$ {{ item.Price }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-secondary rounded-pill mt-5 mb-10 text-white"
        >
          查看所有結果
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['type'],
  data () {
    return {
      newOnlineComingData: [],
      newOnlineHotData: [],
      newOnlineNewData: []
    }
  },
  created () {
    // console.log(this.$route.params)
    // const type = this.type
    // 4-1 即將截止（線上讀書會）
    this.$apiHelper.get('api/activity/final/type/0/3/1').then((res) => {
      if (res.data.Status) {
        console.log(res.data)
        const oriOnlineComingData = res.data.Data.Activity
        console.log(oriOnlineComingData)
        oriOnlineComingData.forEach((item) => {
          this.transDate(item)

          // 2. 加上圖片路徑
          const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
          item.imgUrl = imgUrl
        })
        this.newOnlineComingData = oriOnlineComingData
        console.log(this.newOnlineComingData)
      }
    })

    // 4-2 最多人報名（線上讀書會）
    this.$apiHelper.get('api/activity/hot/type/0/3/1').then((res) => {
      if (res.data.Status) {
        // console.log(res.data)
        const oriOnlineHotData = res.data.Data.Activity
        // console.log(oriOnlineHotData)
        oriOnlineHotData.forEach((item) => {
          this.transDate(item)

          // 2. 加上圖片路徑
          const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
          item.imgUrl = imgUrl
        })
        this.newOnlineHotData = oriOnlineHotData
        // console.log(this.newOnlineHotData)
      }
    })

    // 4-3 新推出資料（線上讀書會）
    this.$apiHelper.get('api/activity/new/type/0/3/1').then((res) => {
      if (res.data.Status) {
        // console.log(res.data)
        const oriOnlineNewData = res.data.Data.Activity
        // console.log(oriOnlineNewData)
        oriOnlineNewData.forEach((item) => {
          this.transDate(item)

          // 2. 加上圖片路徑
          const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
          item.imgUrl = imgUrl
        })
        this.newOnlineNewData = oriOnlineNewData
      }
    })
  },
  methods: {
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
    transDate (item) {
      // 1. 針對日期格式進行轉換
      // 取得開始、結束日期
      const startDate = item.ActivityStartDate
      const endDate = item.ActivityEndDate
      // 轉換日期格式,呼叫函式
      const transStartDateObj = this.splitDate(startDate)
      const transEndDateObj = this.splitDate(endDate)
      // transDate:{splitFinalDate: '2021.12.12', splitFinalTime: '16:00'}
      // 將拆解好的時間加入陣列
      item.transStartDate = transStartDateObj.splitFinalDate
      item.transStartTime = transStartDateObj.splitFinalTime
      item.transEndDate = transEndDateObj.splitFinalDate
      item.transEndTime = transEndDateObj.splitFinalTime
      // 回傳每筆資料
      return item
    }
  }
}
</script>
