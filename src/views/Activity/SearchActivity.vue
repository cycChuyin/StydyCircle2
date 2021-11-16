<template>
  <div class="container">
    <!-- 篩選搜尋區塊 -->
    <form class="filterSearchBar py-5" @submit.prevent="reSearchNow">
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
                  @click="selectType(-1, '線上讀書會')"
                >
                  線上讀書會
                </li>
                <li
                  class="dropdown-item py-2 text-center rounded-3"
                  @click="selectType(-1, '活動工作坊')"
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
    <!-- 排序區塊 -->
    <div class="activityCardGroup d-flex justify-content-between mb-5">
      <p class="fs-1 text-secondary">搜尋結果</p>
      <div class="btn-group">
        <button
          class="btn bg-transparent dropdown-toggle fs-4 text-secondary"
          type="button"
          id="defaultDropdown"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          {{ sortingText }}
        </button>
        <ul
          class="
            dropdown-menu dropdown-menu-end
            text-dark
            fw-light
            p-0
            border-0
            rounded-bottom-3
          "
          aria-labelledby="defaultDropdown"
        >
          <li
            class="dropdown-item py-2 text-center rounded-3"
            @click="selectSorting(0, '最新發佈（預設）')"
          >
            最新發佈（預設）
          </li>
          <li
            class="dropdown-item py-2 text-center rounded-3"
            @click="selectSorting(1, '最熱門活動')"
          >
            最熱門活動
          </li>
          <li
            class="dropdown-item py-2 text-center rounded-3"
            @click="selectSorting(2, '日期由舊到新')"
          >
            日期由舊到新
          </li>
        </ul>
      </div>
    </div>
    <!-- 卡片區塊 -->
    <ul class="row row-cols-1 row-cols-md-3 g-4 list-unstyled">
      <li class="col" v-for="item in newUserSearchData" :key="item.Id">
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
          <!-- 收藏按鈕 position ， 不受 stretched-link 效果影響 -->
          <div class="position-absolute top-0 end-0 mt-3 me-3">
            <span
              class="material-icons text-white fs-1"
              type="button"
              :class="{ 'd-none': item.UserCollected }"
              >bookmark_border</span
            >
            <span
              class="material-icons text-white fs-1"
              type="button"
              :class="{ 'd-none': !item.UserCollected }"
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
  props: ['Split', 'Page', 'Type', 'Classify', 'Area', 'Sorting', 'Query'],
  data () {
    return {
      newUserSearchData: [],
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
      routerSorting: -1,
      sortingText: '排序',
      typeText: '主題類別',
      classifyText: '類別',
      areaText: '地區'
    }
  },
  watch: {
    routerSorting: 'getSearchActivity'
  },
  created () {
    this.seachParams = this.$route.params
    this.routerSorting = this.seachParams.sorting
    console.log(this.$route)
    console.log(
      this.Split,
      this.Page,
      this.Type,
      this.Classify,
      this.Area,
      this.Query
    )
    this.getSearchActivity()
  },
  methods: {
    // 從搜尋欄框過來的，取得搜尋結果
    getSearchActivity () {
      console.log('搜尋頁觸發', this.$route)
      // 先將路由參數宣告變數，方便後續使用
      const split = this.seachParams.split
      const page = this.seachParams.page
      const type = this.seachParams.type
      const classify = this.seachParams.classify
      const area = this.seachParams.area
      // 將 sorting 監聽為路由存的參數，這樣在 watch 監聽到變動時，路由才有效改變
      const sorting = this.$route.params.sorting
      const query = encodeURI(this.seachParams.query)
      // 先用 1-8 確認是否有沒有登入
      this.$apiHelper.get('api/users/profile-data').then((res) => {
        // 存 Token
        const token = res.data.JwtToken
        localStorage.setItem('JwtToken', token)
        // 判斷有無登入來決定接哪隻搜尋的 api
        if (res.data.Status) {
          console.log('登入')
          // 如果有登入
          // 3-1 已登入分類搜尋+排序+分頁功能 (JWT)
          // api/users/activity/search/:split/:page/:type/:classify/:area/:sorting/:query

          this.$apiHelper
            .get(
              `api/users/activity/search/${split}/${page}/${type}/${classify}/${area}/${sorting}/${query}`
            )
            .then((res) => {
              if (res.data.Status) {
                // 先存 Token
                const token = res.data.JwtToken
                localStorage.setItem('JwtToken', token)
                console.log('3-1 的搜尋 ', res.data.Data)
                // oriUserSearchData 取得 api 裡的 Activity 陣列資料
                const oriUserSearchData = res.data.Data.Activity
                // 跑迴圈將日期拆分
                oriUserSearchData.forEach((item) => {
                  // 呼叫轉換日期方法
                  this.transDate(item)

                  // 2. 加上圖片路徑
                  const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                  item.imgUrl = imgUrl
                })
                // 將整理好的 oriUserSearchData 賦予給本元件的 data
                this.newUserSearchData = oriUserSearchData
                console.log(this.newUserSearchData)
              }
            })
        } else {
          // 如果沒有登入
          // 1-7 Navbar 搜尋功能
          // api/activity/search/:split/:page/:type/:classify/:area/:sorting/:query
          this.$apiHelper
            .get(
              `api/activity/search/${split}/${page}/${type}/${classify}/${area}/${sorting}/${query}`
            )
            .then((res) => {
              if (res.data.Status) {
                console.log('1-7 的搜尋 ', res.data)
              }
            })
        }
      })
    },
    // 選擇「排序」
    selectSorting (sortingNum, Text) {
      this.sortingText = Text
      this.seachParams.sorting = sortingNum
      this.routerSorting = sortingNum
      this.$route.params.sorting = sortingNum
      console.log(
        this.routerSorting,
        this.seachParams.sorting,
        this.sortingText
      )
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
    // 在搜尋結果頁重新搜尋的方法，重新渲染資料
    reSearchNow () {
      console.log('實體活動換搜尋頁！')
      const split = this.seachParams.split
      const page = this.seachParams.page
      const type = this.seachParams.split
      const classify = this.seachParams.classify
      const area = this.seachParams.area
      const sorting = this.seachParams.sorting
      const query = encodeURI(this.seachParams.query)
      console.log(split, sorting, query)
      this.$router.push(
        `/activities/search/${split}/${page}/${type}/${classify}/${area}/${sorting}/${query}`
      )
      this.getSearchActivity()
      // location.href = `activities/search/${split}/${page}/${type}/${classify}/${area}/${sorting}/${query}`
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
