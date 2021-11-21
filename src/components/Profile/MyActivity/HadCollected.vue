<template>
  <!-- 已收藏的活動卡片區塊 -->
  <div class="container">
    <ul class="row row-cols-1 row-cols-md-3 g-4 list-unstyled py-32">
      <li
        class="col"
        v-for="item in getHadCollectedData"
        :key="item.ActivityId"
      >
        <div class="card h-100 rounded-4 shadow-card">
          <div class="position-relative">
            <img
              :src="item.imgUrl"
              class="card-img-top rounded-top-4"
              :alt="item.Image"
            />
            <div class="card-body p-3">
              <h5 class="card-title mb-2 p-0"
              style="font-size: 1.2rem">
                <router-link
                  :to="`/activity-content/${item.ActivityId}`"
                  class="stretched-link text-dark"
                >
                  {{ item.Name }}
                </router-link>
              </h5>
              <div class="d-flex align-items-center mb-2">
                <div class="d-flex align-items-center">
                  <span class="material-icons text-primary"
                    >star_rate</span
                  >
                  <span class="material-icons text-primary"
                    >star_rate</span
                  >
                  <span class="material-icons text-primary"
                    >star_rate</span
                  >
                  <span class="material-icons text-primary"
                    >star_rate</span
                  >
                  <span class="material-icons text-primary">star_rate</span>
                </div>
                <p class="text-gray m-0 ps-2">
                  {{ item.EvaluateStars }}/5 ({{ item.OpinionNumber }}則評論)
                </p>
              </div>
              <p class="text-dark mb-4 fs-7">
                <span>{{ item.transStartDate }}</span
                >｜<span
                  >{{ item.transStartTime }} - {{ item.transEndTime }}</span
                >｜<span>{{ item.OrganizerName }}</span>
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
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      getHadCollectedData: [],
      routeUserId: ''
    }
  },
  created () {
    this.routeUserId = this.$route.params.UserId
    // 7-9 收藏活動資料+分頁
    this.$apiHelper
      .get(`api/users/activity/info/collect/${this.routeUserId}/9/1`)
      .then((res) => {
        console.log(res.data)
        if (res.data.Status === true) {
          const oriHadCollectedData = res.data.Data.MyActivity
          console.log(oriHadCollectedData)
          oriHadCollectedData.forEach((item) => {
            // 轉換成星期格式
            this.transDay(item)
            // 拆解日期
            this.transDate(item)
            // 2. 加上圖片路徑
            const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
            item.imgUrl = imgUrl
          })
          this.getHadCollectedData = oriHadCollectedData
          console.log(this.getHadCollectedData)
        }
      })
  },
  methods: {
    // 轉換成星期格式
    transDay (item) {
      const dayList = ['日', '一', '二', '三', '四', '五', '六']
      const oriDay = item.ActivityStartDate
      const newday = new Date(oriDay).getDay() // or "new Date().getDay()";

      const transDay = dayList[newday]
      item.transDay = transDay
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
