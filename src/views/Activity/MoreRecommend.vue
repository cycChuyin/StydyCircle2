<template>
  <div class="container">
    <!-- loading 元件 -->
    <loading :active="isLoading" :is-full-page="fullPage"></loading>
    <!-- 篩選搜尋區塊 -->
    <form class="filterSearchBar py-5" @submit.prevent="searchNow">
      <div class="row">
        <div class="col-10">
          <div
            class="
              categorySearchBar
              rounded-pill
              border border-secondary
              d-flex
              align-items-center
            "
          >
            <div class="input-group px-4 py-13">
              <!-- 主題類別 -->
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
                {{ typeText }}
              </button>
              <ul
                class="dropdown-menu text-dark fw-light p-0 border-0 rounded-3"
                aria-labelledby="defaultDropdown"
              >
                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectType(-1, '所有主題')"
                >
                  所有主題
                </li>
                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectType(0, '線上讀書會')"
                >
                  線上讀書會
                </li>
                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectType(1, '實體讀書會')"
                >
                  實體讀書會
                </li>
                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectType(2, '活動工作坊')"
                >
                  活動工作坊
                </li>
              </ul>
              <!-- 類別 -->
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
                type="submit"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ classifyText }}
              </button>
              <ul
                class="dropdown-menu text-dark fw-light p-0 border-0 rounded-3"
                aria-labelledby="defaultDropdown"
              >
                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectClassify(-1, '所有分類')"
                >
                  所有分類
                </li>
                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectClassify(0, '商業理財')"
                >
                  商業理財
                </li>

                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectClassify(1, '文學小說')"
                >
                  文學小說
                </li>

                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectClassify(2, '人文史地')"
                >
                  人文史地
                </li>

                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectClassify(3, '醫療保健')"
                >
                  醫療保健
                </li>

                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectClassify(4, '生活風格')"
                >
                  生活風格
                </li>

                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectClassify(5, '自然科學')"
                >
                  自然科學
                </li>

                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectClassify(6, '電腦資訊')"
                >
                  電腦資訊
                </li>
              </ul>
              <!-- 地區 -->
              <button
                class="
                  btn btn-outline-secondary
                  dropdown-toggle
                  border-0
                  text-dark
                  fw-light
                  border-end border-secondary
                  fs-6
                  bg-transparent
                "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ areaText }}
              </button>
              <ul
                class="dropdown-menu text-dark fw-light p-0 border-0 rounded-3"
                aria-labelledby="defaultDropdown"
              >
                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectArea(-1, '所有地區')"
                >
                  所有地區
                </li>
                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectArea(0, '北部')"
                >
                  北部
                </li>
                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectArea(1, '中部')"
                >
                  中部
                </li>
                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectArea(2, '南部')"
                >
                  南部
                </li>
                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectArea(3, '東部')"
                >
                  東部
                </li>
                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectArea(4, '離島')"
                >
                  離島
                </li>
              </ul>
              <!-- 搜尋關鍵字 -->
              <input
                type="text"
                class="
                  form-control form-control
                  border-0
                  position-relative
                  ps-3
                  bg-transparent
                "
                aria-label="Text input with dropdown button"
                placeholder="請輸入關鍵字搜尋（書籍名稱、活動名稱等）"
                v-model="seachParams.query"
              />
            </div>
          </div>
        </div>
        <div class="col-2 d-flex justify-content-end">
          <button
            type="submit"
            class="
              btn btn-secondary
              rounded-pill
              text-white
              w-100
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <span class="material-icons me-2">search</span>
            立即搜尋
          </button>
        </div>
      </div>
    </form>
    <!-- 標題區塊 -->
    <h6 class="display-6 text-dark fw-bold mb-5">
      {{ virietyTitleText }}{{ ActivityTypeText }}
    </h6>
    <!-- 卡片區塊 -->
    <ul class="row row-cols-1 row-cols-md-3 g-4 list-unstyled">
      <li class="col" v-for="item in newRecommendedData" :key="item.Id">
        <div class="position-relative">
          <!-- 卡片圖片與內容 -->
          <div class="card h-100 rounded-4">
            <router-link :to="`/activity-content/${item.Id}`">
              <img
                :src="item.imgUrl"
                class="card-img-top card-img rounded-top-4"
                :alt="item.Image"
              />
            </router-link>
            <div class="card-body position-relative p-4">
              <h5 class="card-title mb-2 p-0 fs-4">
                <router-link
                  :to="`/activity-content/${item.Id}`"
                  class="stretched-link text-dark"
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
              <p class="text-dark mb-4">
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
                <p class="text-dark fs-8 m-0">
                  {{ item.ApplicantNumber }}人參加 ｜
                  {{ item.CollectNumber }}人收藏
                </p>
                <p class="text-dark fs-4 m-0">NT$ {{ item.Price }}</p>
              </div>
            </div>
          </div>
          <!-- 收藏按鈕 position ， 不受 stretched-link 效果影響 -->
          <div class="position-absolute top-0 end-0 mt-3 me-3">
            <span
              class="material-icons text-white fs-1"
              type="button"
              :class="{ 'd-none': item.UserCollected }"
              @click="changeCollect(item.Id)"
              >bookmark_border</span
            >
            <span
              class="material-icons text-white fs-1"
              type="button"
              :class="{ 'd-none': !item.UserCollected }"
              @click="changeCollect(item.Id)"
              >bookmark</span
            >
          </div>
        </div>
      </li>
    </ul>
    <!-- pagination -->
    <div
      class="
        d-flex
        justify-content-center
        fs-4
        align-items-center
        py-12
        text-dark
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
            <li class="bg-secondary fs-4 text-white rounded-pill active">
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
</template>

<script>
export default {
  props: ['Variety', 'Type', 'Split', 'Page'],
  data () {
    return {
      newRecommendedData: [],
      getMoreReommendParams: {},
      seachParams: {
        split: 9,
        page: 1,
        // 所有主題
        type: -1,
        // 類別：根據 select 選擇不同而有對應的索引值
        classify: -1,
        area: -1,
        sorting: 0,
        query: ''
      },
      typeText: '主題類別',
      classifyText: '類別',
      areaText: '地區',
      virietyTitleText: '',
      ActivityTypeText: '',
      isLoading: false
    }
  },
  created () {
    // console.log(this.$route.params)
    // 將透過路由傳到自己子層的資料
    this.getMoreReommendParams = this.$route.params
    console.log(this.getMoreReommendParams)
    this.getVarietyActivityData()
  },
  methods: {
    // 從活動主題頁引導過來的官方推薦
    // 取得4-1~4-3 的活動資料
    getVarietyActivityData () {
      // 開啟讀取效果
      this.isLoading = true
      console.log('官方活動推薦！')
      // 宣告 Variety 變數判斷是哪個排序分類的（即將截止 / 最多人報名 / 新推出）
      // 再去判斷現在該取得哪個 api
      const getVariety = this.$route.params.variety
      console.log(getVariety)
      // 宣告 type,split,page 為 getMoreReommendParams 裡的值，方便 Api 帶入變數
      const type = this.getMoreReommendParams.type
      const split = this.getMoreReommendParams.split
      const page = this.getMoreReommendParams.page

      if (type === '0') {
        this.ActivityTypeText = '線上讀書會'
      } else if (type === '1') {
        this.ActivityTypeText = '實體讀書會'
      } else if (type === '2') {
        this.ActivityTypeText = '活動工作坊'
      }

      // 先用 1-8 確認是否有沒有登入
      this.$apiHelper.get('api/users/profile-data').then((res) => {
        // 判斷有無登入來決定接4-1~4-3 or 4-4~4-6
        if (res.data.Status) {
          console.log('登入')
          // 存 Token
          const token = res.data.JwtToken
          localStorage.setItem('JwtToken', token)
          // 如果有登入
          // 判斷 4-4~4-6 即將截止 / 最多人報名 / 新推出 (JWT)
          if (getVariety === '0') {
            // title 給類別
            this.virietyTitleText = '即將截止報名的'

            // 如果是即將截止的話，接 4-4 即將截止報名資料 (JWT)）
            this.$apiHelper
              .get(`api/users/activity/final/type/${type}/${split}/${page}`)
              .then((res) => {
                if (res.data.Status) {
                  console.log('4-4 即將截止報名資料')
                  // 先存 token
                  const token = res.data.JwtToken
                  localStorage.setItem('JwtToken', token)
                  // oriSearchData 取得 api 裡的 Activity 陣列資料
                  const oriRecommendedData = res.data.Data.Activity

                  // 跑迴圈將日期拆分
                  oriRecommendedData.forEach((item) => {
                    // 呼叫轉換日期方法
                    this.transDate(item)

                    // 2. 加上圖片路徑
                    const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                    item.imgUrl = imgUrl
                  })
                  // 將整理好的 oriSearchData 賦予給本元件的 data
                  this.newRecommendedData = oriRecommendedData
                  console.log(this.newRecommendedData)
                }
                // 關閉讀取效果
                this.isLoading = false
              })
          } else if (getVariety === '1') {
            // title 給類別
            this.virietyTitleText = '最多人報名的'

            // 如果是最多人報名的話，接 4-5 最多人報名 (JWT)）
            this.$apiHelper
              .get(`api/users/activity/hot/type/${type}/${split}/${page}`)
              .then((res) => {
                if (res.data.Status) {
                  console.log('4-5 最多人報名')
                  // 先存 token
                  const token = res.data.JwtToken
                  localStorage.setItem('JwtToken', token)
                  // oriSearchData 取得 api 裡的 Activity 陣列資料
                  const oriRecommendedData = res.data.Data.Activity
                  // 跑迴圈將日期拆分
                  oriRecommendedData.forEach((item) => {
                    // 呼叫轉換日期方法
                    this.transDate(item)

                    // 2. 加上圖片路徑
                    const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                    item.imgUrl = imgUrl
                  })
                  // 將整理好的 oriSearchData 賦予給本元件的 data
                  this.newRecommendedData = oriRecommendedData
                  console.log(this.newRecommendedData)
                }
                // 關閉讀取效果
                this.isLoading = false
              })
          } else if (getVariety === '2') {
            // title 給類別
            this.virietyTitleText = '本週新推出的'

            // 如果是新推出資料的話，接 4-6 新推出資料 (JWT)）
            this.$apiHelper
              .get(`api/users/activity/new/type/${type}/${split}/${page}`)
              .then((res) => {
                if (res.data.Status) {
                  console.log('4-6 新推出資料')
                  // 先存 token
                  const token = res.data.JwtToken
                  localStorage.setItem('JwtToken', token)
                  // oriSearchData 取得 api 裡的 Activity 陣列資料
                  const oriRecommendedData = res.data.Data.Activity
                  // 跑迴圈將日期拆分
                  oriRecommendedData.forEach((item) => {
                    // 呼叫轉換日期方法
                    this.transDate(item)

                    // 2. 加上圖片路徑
                    const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                    item.imgUrl = imgUrl
                  })
                  // 將整理好的 oriSearchData 賦予給本元件的 data
                  this.newRecommendedData = oriRecommendedData
                  console.log(this.newRecommendedData)
                }
                // 關閉讀取效果
                this.isLoading = false
              })
          }
        } else {
          // 如果沒有登入
          console.log('沒有登入')
          // 判斷 4-1~4-3 即將截止 / 最多人報名 / 新推出 (JWT)
          if (getVariety === '0') {
            console.log('hi')
            // 如果是即將截止的話，接 4-1 即將截止報名資料
            this.$apiHelper
              .get(`api/activity/final/type/${type}/${split}/${page}`)
              .then((res) => {
                if (res.data.Status) {
                  console.log('4-1 即將截止報名資料')
                  // oriSearchData 取得 api 裡的 Activity 陣列資料
                  const oriRecommendedData = res.data.Data.Activity
                  // 跑迴圈將日期拆分
                  oriRecommendedData.forEach((item) => {
                    // 呼叫轉換日期方法
                    this.transDate(item)

                    // 2. 加上圖片路徑
                    const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                    item.imgUrl = imgUrl
                  })
                  // 將整理好的 oriSearchData 賦予給本元件的 data
                  this.newRecommendedData = oriRecommendedData
                  console.log(this.newRecommendedData)
                }
                // 關閉讀取效果
                this.isLoading = false
              })
          } else if (getVariety === '1') {
            // 如果是即將截止的話，接 4-2 最多人報名
            this.$apiHelper
              .get(`api/activity/hot/type/${type}/${split}/${page}`)
              .then((res) => {
                if (res.data.Status) {
                  console.log('4-2 最多人報名')
                  // oriSearchData 取得 api 裡的 Activity 陣列資料
                  const oriRecommendedData = res.data.Data.Activity
                  // 跑迴圈將日期拆分
                  oriRecommendedData.forEach((item) => {
                    // 呼叫轉換日期方法
                    this.transDate(item)

                    // 2. 加上圖片路徑
                    const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                    item.imgUrl = imgUrl
                  })
                  // 將整理好的 oriSearchData 賦予給本元件的 data
                  this.newRecommendedData = oriRecommendedData
                  console.log(this.newRecommendedData)
                }
                // 關閉讀取效果
                this.isLoading = false
              })
          } else if (getVariety === '2') {
            // 如果是即將截止的話，接 4-3 新推出資料
            this.$apiHelper
              .get(`api/activity/new/type/${type}/${split}/${page}`)
              .then((res) => {
                if (res.data.Status) {
                  console.log('4-3 新推出資料')
                  // oriSearchData 取得 api 裡的 Activity 陣列資料
                  const oriRecommendedData = res.data.Data.Activity
                  // 跑迴圈將日期拆分
                  oriRecommendedData.forEach((item) => {
                    // 呼叫轉換日期方法
                    this.transDate(item)

                    // 2. 加上圖片路徑
                    const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                    item.imgUrl = imgUrl
                  })
                  // 將整理好的 oriSearchData 賦予給本元件的 data
                  this.newRecommendedData = oriRecommendedData
                  console.log(this.newRecommendedData)
                }
                // 關閉讀取效果
                this.isLoading = false
              })
          }
        }
      })
      // // title 的類別
      // this.ActivityTypeText = this.newRecommendedData[0].ActivityType
    },

    // 改變收藏、取消收藏功能
    changeCollect (ActivityId) {
      console.log('3-2 收藏/取消收藏活動 (JWT)')
      console.log(ActivityId)
      // 3-2 收藏/取消收藏活動 (JWT)
      // 先把 body 要的資料準備好
      const sentActivityId = {}
      sentActivityId.ActivityId = ActivityId
      console.log(sentActivityId)

      // 3-2 收藏/取消收藏活動 (JWT)
      this.$apiHelper
        .put('api/users/activity/collect', sentActivityId)
        .then((res) => {
          if (res.data.Status) {
            console.log('3-2 收藏/取消收藏活動 (JWT)')
            // 先存 token
            const token = res.data.JwtToken
            localStorage.setItem('JwtToken', token)

            // 收藏、取消收藏 - 改變 icon
            // 將陣列跑迴圈，如果有對應的資料（Id），就切換狀態
            this.newRecommendedData.forEach((item) => {
              if (item.Id === ActivityId) {
                item.UserCollected = !item.UserCollected
              }
            })
          }
        })
    },

    // 選擇主題類別
    selectType (typeNum, Text) {
      console.log(typeNum)
      this.seachParams.type = typeNum
      this.typeText = Text
      console.log(this.seachParams.type, this.typeText)
    },
    // 選擇分類類別
    selectClassify (classifyNum, Text) {
      console.log(classifyNum)
      this.seachParams.classify = classifyNum
      this.classifyText = Text
      console.log(this.seachParams.classify, this.classifyText)
    },
    // 選擇地區分類
    selectArea (areaNum, Text) {
      this.seachParams.area = areaNum
      this.areaText = Text
      console.log(this.seachParams.area, this.areaText)
    },
    // 從官方推薦夜搜尋東西前往搜尋結果頁
    searchNow () {
      console.log('從官方推薦夜搜尋東西前往搜尋結果頁！')
      const split = this.seachParams.split
      const page = this.seachParams.page
      const type = this.seachParams.type
      const classify = this.seachParams.classify
      const area = this.seachParams.area
      const sorting = this.seachParams.sorting
      const query = encodeURI(this.seachParams.query)
      console.log(split, sorting, query)
      this.$router.push(
        `/activities/search/${split}/${page}/${type}/${classify}/${area}/${sorting}/${query}`
      )
    },
    // 時間拆分
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
