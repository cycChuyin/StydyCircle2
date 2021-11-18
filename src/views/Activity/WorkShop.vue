<template>
  <!-- 內容 -->
  <div class="bg-white">
    <div class="container">
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
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ classifyText }}
                </button>
                <ul
                  class="
                    dropdown-menu
                    text-dark
                    fw-light
                    p-0
                    border-0
                    rounded-3
                  "
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
                  class="
                    dropdown-menu
                    text-dark
                    fw-light
                    p-0
                    border-0
                    rounded-3
                  "
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
      <!-- 即將截止 -->
      <div class="mb-5">
        <!-- 標題 -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h6 class="display-6 text-secondary fw-bold">
            即將截止報名的活動工作坊
          </h6>
          <router-link
            class="text-secondary fs-4 d-flex align-items-center"
            to="/activities/more/recommend/0/2/9/1"
          >
            <span class="material-icons me-2">east</span>
            More
          </router-link>
        </div>
        <!-- 卡片區塊 -->
        <ul class="row row-cols-1 row-cols-md-3 g-4 list-unstyled">
          <li class="col" v-for="item in newWorkshopComingData" :key="item.Id">
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
                      {{ item.EvaluateStars }}/5 ({{
                        item.OpinionNumber
                      }}則評論)
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
                  @click="changeCollect(item.Id, 'newWorkshopComingData')"
                  >bookmark_border</span
                >
                <span
                  class="material-icons text-white fs-1"
                  type="button"
                  :class="{ 'd-none': !item.UserCollected }"
                  @click="changeCollect(item.Id, 'newWorkshopComingData')"
                  >bookmark</span
                >
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
            最多人報名的活動工作坊
          </h6>
          <router-link
            class="text-secondary fs-4 d-flex align-items-center"
            to="/activities/more/recommend/1/2/9/1"
          >
            <span class="material-icons me-2">east</span>
            More
          </router-link>
        </div>
        <!-- 卡片區塊 -->
        <ul class="row row-cols-1 row-cols-md-3 g-4 list-unstyled">
          <li class="col" v-for="item in newWorkshopHotData" :key="item.Id">
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
                      {{ item.EvaluateStars }}/5 ({{
                        item.OpinionNumber
                      }}則評論)
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
                  @click="changeCollect(item.Id, 'newWorkshopHotData')"
                  >bookmark_border</span
                >
                <span
                  class="material-icons text-white fs-1"
                  type="button"
                  :class="{ 'd-none': !item.UserCollected }"
                  @click="changeCollect(item.Id, 'newWorkshopHotData')"
                  >bookmark</span
                >
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
            本週新推出的活動工作坊
          </h6>
          <router-link
            class="text-secondary fs-4 d-flex align-items-center"
            to="/activities/more/recommend/2/2/9/1"
          >
            <span class="material-icons me-2">east</span>
            More
          </router-link>
        </div>
        <!-- 卡片區塊 -->
        <ul class="row row-cols-1 row-cols-md-3 g-4 list-unstyled">
          <li class="col" v-for="item in newWorkshopNewData" :key="item.Id">
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
                      {{ item.EvaluateStars }}/5 ({{
                        item.OpinionNumber
                      }}則評論)
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
                  @click="changeCollect(item.Id, 'newWorkshopNewData')"
                  >bookmark_border</span
                >
                <span
                  class="material-icons text-white fs-1"
                  type="button"
                  :class="{ 'd-none': !item.UserCollected }"
                  @click="changeCollect(item.Id, 'newWorkshopNewData')"
                  >bookmark</span
                >
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="d-flex justify-content-center">
        <router-link
          type="button"
          class="btn btn-secondary rounded-pill mt-5 mb-10 text-white"
          to="/activities/search/9/1/-1/-1/-1/0/%E3%80%8A"
        >
          查看所有結果
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newWorkshopComingData: [],
      newWorkshopHotData: [],
      newWorkshopNewData: [],
      seachParams: {
        split: 9,
        page: 1,
        // 活動工作坊
        type: 3,
        // 類別：根據 select 選擇不同而有對應的索引值
        classify: -1,
        area: -1,
        sorting: 0,
        query: ''
      },
      classifyText: '類別',
      areaText: '地區'
    }
  },
  created () {
    this.getWorkShopData()
  },
  methods: {
    // 取得活動工作坊資料
    // 大方向：先確認有無登入，再來決定要接哪一隻 API
    getWorkShopData () {
      // 先用 1-8 確認是否有沒有登入
      this.$apiHelper.get('api/users/profile-data').then((res) => {
        // 判斷有無登入來決定接哪隻搜尋的 api
        if (res.data.Status) {
          // 如果有登入
          console.log('登入')

          // 存 Token
          const token = res.data.JwtToken
          localStorage.setItem('JwtToken', token)

          // 4-4 即將截止報名資料 (JWT)
          this.$apiHelper
            .get('api/users/activity/final/type/2/3/1')
            .then((res) => {
              if (res.data.Status) {
                // 有 JWT 的先存取 Token
                const token = res.data.JwtToken
                localStorage.setItem('JwtToken', token)

                console.log(res.data)
                const oriWorkshopComingData = res.data.Data.Activity
                console.log(oriWorkshopComingData)
                oriWorkshopComingData.forEach((item) => {
                  // 1. 轉換日期格式
                  this.transDate(item)

                  // 2. 加上圖片路徑
                  const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                  item.imgUrl = imgUrl
                })
                // 將本地的 newWorkshopComingData 賦予 oriWorkshopComingData 的資料
                this.newWorkshopComingData = oriWorkshopComingData
                console.log(this.newWorkshopComingData)
              }
            })

          // 4-5 最多人報名資料 (JWT)
          this.$apiHelper
            .get('api/users/activity/hot/type/2/3/1')
            .then((res) => {
              if (res.data.Status) {
                // 有 JWT 的先存取 Token
                const token = res.data.JwtToken
                localStorage.setItem('JwtToken', token)

                console.log(res.data)
                const oriWorkshopHotData = res.data.Data.Activity
                console.log(oriWorkshopHotData)
                oriWorkshopHotData.forEach((item) => {
                  // 1. 轉換日期格式
                  this.transDate(item)

                  // 2. 加上圖片路徑
                  const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                  item.imgUrl = imgUrl
                })
                // 將本地的 newWorkshopHotData 賦予 oriWorkshopHotData 的資料
                this.newWorkshopHotData = oriWorkshopHotData
                console.log(this.newWorkshopHotData)
              }
            })

          // 4-6 新推出資料 (JWT)
          this.$apiHelper
            .get('api/users/activity/new/type/2/3/1')
            .then((res) => {
              if (res.data.Status) {
                // 有 JWT 的先存取 Token
                const token = res.data.JwtToken
                localStorage.setItem('JwtToken', token)

                // console.log(res.data)
                const oriWorkshopNewData = res.data.Data.Activity
                // console.log(oriWorkshopNewData)
                oriWorkshopNewData.forEach((item) => {
                  this.transDate(item)

                  // 2. 加上圖片路徑
                  const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                  item.imgUrl = imgUrl
                })
                // 將本地的 newWorkshopNewData 賦予 oriWorkshopNewData 的資料
                this.newWorkshopNewData = oriWorkshopNewData
                console.log(this.newWorkshopNewData)
              }
            })
        } else {
          // 沒有登入
          console.log('沒有登入')

          // 4-1 即將截止（線上讀書會）
          this.$apiHelper.get('api/activity/final/type/2/3/1').then((res) => {
            if (res.data.Status) {
              console.log(res.data)
              const oriWorkshopComingData = res.data.Data.Activity
              console.log(oriWorkshopComingData)
              oriWorkshopComingData.forEach((item) => {
                this.transDate(item)

                // 2. 加上圖片路徑
                const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                item.imgUrl = imgUrl
              })
              this.newWorkshopComingData = oriWorkshopComingData
              console.log(this.newWorkshopComingData)
            }
          })

          // 4-2 最多人報名（線上讀書會）
          this.$apiHelper.get('api/activity/hot/type/2/3/1').then((res) => {
            if (res.data.Status) {
              console.log(res.data)
              const oriWorkshopHotData = res.data.Data.Activity
              console.log(oriWorkshopHotData)
              oriWorkshopHotData.forEach((item) => {
                this.transDate(item)

                // 2. 加上圖片路徑
                const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                item.imgUrl = imgUrl
              })
              this.newWorkshopHotData = oriWorkshopHotData
              console.log(this.newWorkshopHotData)
            }
          })

          // 4-3 新推出資料（線上讀書會）
          this.$apiHelper.get('api/activity/new/type/2/3/1').then((res) => {
            if (res.data.Status) {
              // console.log(res.data)
              const oriWorkshopNewData = res.data.Data.Activity
              // console.log(oriWorkshopNewData)
              oriWorkshopNewData.forEach((item) => {
                this.transDate(item)

                // 2. 加上圖片路徑
                const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                item.imgUrl = imgUrl
              })
              this.newWorkshopNewData = oriWorkshopNewData
              // console.log(this.newWorkshopNewData)
            }
          })
        }
      })
    },

    // 改變收藏、取消收藏功能
    changeCollect (ActivityId, variety) {
      console.log('3-2 收藏/取消收藏活動 (JWT)')
      console.log(ActivityId)
      // 3-2 收藏/取消收藏活動 (JWT)
      // 先把 body 要的資料準備好
      const sentActivityId = {}
      sentActivityId.ActivityId = ActivityId
      console.log(sentActivityId)

      let data = []
      // 判斷是哪一個類別的陣列要跑迴圈
      if (variety === 'newWorkshopComingData') {
        data = this.newWorkshopComingData
      } else if (variety === 'newWorkshopHotData') {
        data = this.newWorkshopHotData
      } else if (variety === 'newWorkshopNewData') {
        data = this.newWorkshopNewData
      }

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
            data.forEach((item) => {
              if (item.Id === ActivityId) {
                item.UserCollected = !item.UserCollected
              }
            })
          } else {
            // 如果沒有登入的話，請他先登入
            // 但這部分還沒做登入後如何直接回來活動詳情頁面
            this.$router.push('/login')
          }
        })
    },

    // 搜尋方法
    searchNow () {
      console.log('活動工作坊換搜尋頁！')
      const split = this.seachParams.split
      const page = this.seachParams.page
      const type = this.seachParams.type
      const classify = this.seachParams.classify
      const area = this.seachParams.area
      const sorting = this.seachParams.sorting
      const query = encodeURI(this.seachParams.query)
      console.log(query)
      this.$router.push(
        `/activities/search/${split}/${page}/${type}/${classify}/${area}/${sorting}/${query}`
      )
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
