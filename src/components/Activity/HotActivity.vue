<template>
  <div class="bg-searchselect">
    <div class="container">
      <div class="row justify-content-end py-10">
        <div class="col-md-6 d-flex justify-content-center">
          <!-- <img src="https://studycircle.rocket-coding.com/upload/activity/9.jpg?2021"/> -->
          <img :src="newOnlineObj.Image" v-if="Type === 'Online'" />
          <img :src="newEntityObj.Image" v-else-if="Type === 'Entity'" />
          <img :src="newWorkShop.Image" v-else-if="Type === 'WorkShop'" />
        </div>
        <div class="col-md-6">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
            <div
              class="text-secondary tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <h3 class="fs-4 fw-bold mb-2">
                {{ newOnlineObj.Name }}
              </h3>
              <p class="mb-0">
                ｜日期：<span>{{ newOnlineObj.transStartDate }}（日）</span>
                ｜時間：<span
                  >{{ newOnlineObj.transStartTime }} -
                  {{ newOnlineObj.transEndTime }}</span
                >
                ｜人數：<span>{{ newOnlineObj.LimitNumber }} 人以內</span>
              </p>
              <p class="py-3">
                {{ newOnlineObj.Summary }}
              </p>
              <div class="d-flex justify-content-md-end">
                <router-link
                  :to="`/activity-content/${newOnlineObj.Id}`"
                  type="button"
                  class="btn btn-secondary rounded-pill text-white"
                >
                  立即參加
                </router-link>
              </div>
            </div>
            <div
              class="text-secondary tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <h3 class="fs-4 fw-bold mb-2">
                {{ newEntityObj.Name }}
              </h3>
              <p class="mb-0">
                ｜日期：<span>{{ newEntityObj.transStartDate }}（日）</span>
                ｜時間：<span
                  >{{ newEntityObj.transStartTime }} -
                  {{ newEntityObj.transEndTime }}</span
                >
                ｜人數：<span>{{ newEntityObj.LimitNumber }} 人以內</span>
              </p>
              <p class="py-3">
                {{ newEntityObj.Summary }}
              </p>
              <div class="d-flex justify-content-md-end">
                <router-link
                  :to="`/activity-content/${newEntityObj.Id}`"
                  type="button"
                  class="btn btn-secondary rounded-pill text-white"
                >
                  立即參加
                </router-link>
              </div>
            </div>
            <div
              class="text-secondary tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <h3 class="fs-4 fw-bold mb-2">
                {{ newWorkShop.Name }}
              </h3>
              <p class="mb-0">
                ｜日期：<span>{{ newWorkShop.transStartDate }}（日）</span>
                ｜時間：<span
                  >{{ newWorkShop.transStartTime }} -
                  {{ newWorkShop.transEndTime }}</span
                >
                ｜人數：<span>{{ newWorkShop.LimitNumber }} 人以內</span>Î
              </p>
              <p class="py-3">
                {{ newWorkShop.Summary }}
              </p>
              <div class="d-flex justify-content-md-end">
                <router-link
                  :to="`/activity-content/${newWorkShop.Id}`"
                  type="button"
                  class="btn btn-secondary rounded-pill text-white"
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
          this.transDate(item)
        })
        this.newOnlineObj = JSON.parse(JSON.stringify(oriHotActivityData[0]))
        this.newEntityObj = JSON.parse(JSON.stringify(oriHotActivityData[1]))
        this.newWorkShop = JSON.parse(JSON.stringify(oriHotActivityData[2]))
        console.log(this.newOnlineObj, this.newEntityObj, this.newWorkShop)
        // this.newHotActivityData = oriHotActivityData
        // console.log(this.newHotActivityData)
      })
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
  },
  created () {
    this.getHotActivityData()
  }
}
</script>
