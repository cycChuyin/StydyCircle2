<template>
  <!-- 尚未評價的活動卡片區塊 -->
  <div class="container">
    <ul class="row row-cols-1 row-cols-md-3 g-4 list-unstyled py-32">
      <li class="col" v-for="item in getUnOpionData" :key="item.ActivityId">
        <div class="card h-100 rounded-4 shadow-card">
          <div class="position-relative">
            <img
              :src="item.imgUrl"
              class="card-img-top rounded-top-4"
              :alt="item.Image"
            />
            <div class="card-body p-3">
              <h5 class="card-title mb-2 p-0 fw-light fs-4">
                <router-link
                  :to="`/activity-content/${item.ActivityId}`"
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
                <p class="text-secondary fs-8 m-0">
                  {{ item.ApplicantNumber }}人參加 ｜
                  {{ item.CollectNumber }}人收藏
                </p>
                <!-- <p class="text-secondary fs-4 m-0">NT$ {{ item.Price }}</p> -->
              </div>
            </div>
          </div>
          <div
            class="
              card-footer
              mx-3
              px-0
              py-3
              border-top border-secondary
              bg-transparent
              d-flex
              justify-content-end
            "
          >
            <!-- Button trigger modal -->
            <button
              href="#"
              class="
                btn btn-secondary
                rounded-pill
                d-flex
                align-items-center
                text-white
                fs-7
              "
              type="button"
            >
              <span class="material-icons me-2 fs-7">rate_review</span>
              我要評價
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <opinion-modal ref="opinionModal"></opinion-modal>
</template>

<script>
// import opinionModal from '../../../components/Activity/OpinionModal.vue'
export default {
  data () {
    return {
      opinionObj: {
        ActivityId: 18,
        Star: 5,
        Opinion: '蒸蚌!抄蚌的!'
      },
      getUnOpionData: [],
      routeUserId: ''
    }
  },
  components: {
    // opinionModal
  },
  created () {
    this.routeUserId = this.$route.params.UserId
    // 7-8 尚未評價活動資料+分頁
    this.$apiHelper
      .get(`api/users/activity/attend/opinions/${this.routeUserId}/9/1`)
      .then((res) => {
        console.log(res.data)
        if (res.data.Status === true) {
          const oriUnOpionData = res.data.Data.MyActivity
          console.log(oriUnOpionData)
          oriUnOpionData.forEach((item) => {
            // 為什麼不能呼叫 transDate 方法呢？
            // this.transDate(item)
            // 2. 加上圖片路徑
            const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
            item.imgUrl = imgUrl
          })
          this.getUnOpionData = oriUnOpionData
          console.log(this.getUnOpionData)
        }
      })
  },
  method: {
    sendOpinion () {
      console.log('我要準備送出評價了')
      // 7-13 填寫活動評價 (JWT)
      // POST 請求
      const Token = localStorage.getItem('JwtToken')
      console.log(Token)
      if (Token) {
        this.$apiHelper
          .post('api/users/activity/attend/opinion', this.opinionObj)
          .then((res) => {
            if (res.data.Status) {
              const getJwtToken = res.data.JwtToken
              localStorage.setItem('JwtToken', getJwtToken)
              // 這個跳轉頁面還不確定，因為目前是彈跳視窗
              this.$route.push('/profile/my-activity/un-opinion')
              console.log('已送出評價')
            }
          })
      }
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
