<template>
  <div class="bgHeader" style="height: 560px">
    <div class="container pt-4">
      <div class="row justify-content-end py-10 pt-12">
        <div class="col-md-6 d-flex justify-content-center">
          <!-- <img src="https://studycircle.rocket-coding.com/upload/activity/9.jpg?2021"/> -->
          <!-- <img :src="newOnlineObj.Image" v-if="Type === 'Online'" />
          <img :src="newEntityObj.Image" v-else-if="Type === 'Entity'" />
          <img :src="newWorkShop.Image" v-else-if="Type === 'WorkShop'" /> -->
          <img src="https://thak-tsheh.rocket-coding.com/upload/top_img_new_1.png" v-if="Type === 'Online'" />
          <img src="https://thak-tsheh.rocket-coding.com/upload/top_img_new_2.png" v-else-if="Type === 'Entity'" />
          <img src="https://thak-tsheh.rocket-coding.com/upload/top_img_new_3.png" v-else-if="Type === 'WorkShop'" />

        </div>
        <div class="col-md-6">
          <ul
            class="nav nav-pills mb-3 HotActivity"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                @click="Type = 'Online'"
              >
                {{ newOnlineObj.ActivityType }}
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                @click="Type = 'Entity'"
              >
                {{ newEntityObj.ActivityType }}
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
                @click="Type = 'WorkShop'"
              >
                {{ newWorkShop.ActivityType }}
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <!-- 線上讀書會 -->
            <div
              class="text-dark tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <h3 class="fs-4 fw-bolder mb-4">
                {{ newOnlineObj.Name }}
              </h3>
              <p class="mb-4 fw-light">
                ｜日期：<span
                  >{{ newOnlineObj.transStartDate }}（{{
                    newOnlineObj.transDay
                  }}）</span
                >
                ｜時間：<span
                  >{{ newOnlineObj.transStartTime }} -
                  {{ newOnlineObj.transEndTime }}</span
                >
                ｜人數：<span>{{ newOnlineObj.LimitNumber }} 人以內</span>
              </p>
              <p class="py-3 fw-light fw-light">
                {{ newOnlineObj.Summary }}
              </p>
              <div class="d-flex justify-content-md-end">
                <router-link
                  :to="`/activity-content/${newOnlineObj.Id}`"
                  type="button"
                  class="btn btn-dark rounded-pill text-white"
                >
                  立即參加
                </router-link>
              </div>
            </div>
            <!-- 實體讀書會 -->
            <div
              class="text-dark tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <h3 class="fs-4 fw-bolder mb-4">
                {{ newEntityObj.Name }}
              </h3>
              <p class="mb-4 fw-light">
                ｜日期：<span
                  >{{ newEntityObj.transStartDate }}（{{
                    newEntityObj.transDay
                  }}）</span
                >
                ｜時間：<span
                  >{{ newEntityObj.transStartTime }} -
                  {{ newEntityObj.transEndTime }}</span
                >
                ｜人數：<span>{{ newEntityObj.LimitNumber }} 人以內</span>
              </p>
              <p class="py-3 fw-light">
                {{ newEntityObj.Summary }}
              </p>
              <div class="d-flex justify-content-md-end">
                <router-link
                  :to="`/activity-content/${newEntityObj.Id}`"
                  type="button"
                  class="btn btn-dark rounded-pill text-white"
                >
                  立即參加
                </router-link>
              </div>
            </div>
            <!-- 活動工作坊 -->
            <div
              class="text-dark tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <h3 class="fs-4 fw-bolder mb-4">
                {{ newWorkShop.Name }}
              </h3>
              <p class="mb-4 fw-light">
                ｜日期：<span
                  >{{ newWorkShop.transStartDate }}（{{
                    newWorkShop.transDay
                  }}）</span
                >
                ｜時間：<span
                  >{{ newWorkShop.transStartTime }} -
                  {{ newWorkShop.transEndTime }}</span
                >
                ｜人數：<span>{{ newWorkShop.LimitNumber }} 人以內</span>
              </p>
              <p class="py-3 fw-light">
                {{ newWorkShop.Summary }}
              </p>
              <div class="d-flex justify-content-md-end">
                <router-link
                  :to="`/activity-content/${newWorkShop.Id}`"
                  type="button"
                  class="btn btn-dark rounded-pill text-white"
                >
                  立即參加
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bgHeader {
  background-image: url(https://thak-tsheh.rocket-coding.com/upload/backgroundimg/bg_header.png);
}
.nav-pills .nav-link.active {
  color: #ffffff;
  background-color: #111111;
}
.nav-pills .nav-link.hover {
  background-color: #fefbf0;
}
</style>

<script>
export default {
  data () {
    return {
      // newHotActivityData: [],
      newOnlineObj: {},
      newEntityObj: {},
      newWorkShop: {},
      Type: 'Online'
    }
  },
  methods: {
    getHotActivityData () {
      // 1-1 熱門活動資料
      this.$apiHelper.get('api/activities/top-views').then((res) => {
        console.log(res.data.Data)
        const oriHotActivityData = res.data.Data
        oriHotActivityData.forEach((item) => {
          // 左邊區塊圖片路徑
          const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
          item.Image = imgUrl
          // 轉換時間格式
          this.transDate(item)
          // 轉換成星期格式
          this.transDay(item)
        })
        this.newOnlineObj = JSON.parse(JSON.stringify(oriHotActivityData[0]))
        this.newEntityObj = JSON.parse(JSON.stringify(oriHotActivityData[1]))
        this.newWorkShop = JSON.parse(JSON.stringify(oriHotActivityData[2]))
        console.log(this.newOnlineObj, this.newEntityObj, this.newWorkShop)
        // this.newHotActivityData = oriHotActivityData
        // console.log(this.newHotActivityData)
      })
    },
    // 轉換成星期格式
    transDay (item) {
      const dayList = ['日', '一', '二', '三', '四', '五', '六']
      const oriDay = item.ActivityStartDate
      const newday = new Date(oriDay).getDay() // or "new Date().getDay()";

      const transDay = dayList[newday]
      item.transDay = transDay
      return item
    },
    // 拆分日期
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
  },
  created () {
    this.getHotActivityData()
  }
}
</script>
