<template>
  <!-- loading 元件 -->
  <!-- <loading :active="isLoading" :is-full-page="Fullpage"></loading>   -->
  <!-- 摺疊卡片 -->
  <!-- 如果是使用者本身 橫行卡片-->
  <div class="px-13 py-32" :class="{ 'd-none': !isUserSelf }">
    <ul class="row row-cols-1 list-unstyled">
      <template v-for="(item, index) in newCommingData" :key="item.ActivityId">
        <li class="col mb-4">
          <div class="card text-dark fw-light rounded-7 shadow-sm">
            <img
              :src="item.imgUrl"
              :alt="item.Image"
              class="card-img-top rounded-7 rounded-bottom-0"
              style="height: 220px"
              v-if="item.isCollapse"
            />
            <div class="row g-0" v-else>
              <div class="col-md-4">
                <img
                  :src="item.imgUrl"
                  :alt="item.Image"
                  class="card-img-top rounded-7 rounded-end-0"
                  style="height: 100%"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title fw-light fs-4 mb-2">
                    {{ item.Name }} - {{ item.OrganizerName }}
                  </h5>
                  <p class="card-text mb-2">
                    {{ item.transStartDate }}（{{ item.transDay }}）{{
                      item.transStartTime
                    }}
                    -
                    {{ item.transEndTime }}
                  </p>
                  <p class="card-text mb-3">
                    {{ item.Summary }}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p class="card-text fs-7 m-0">
                      <!-- <span class="material-icons fs-6">favorite_border</span> -->
                      已有 {{ item.ApplicantNumber }} 人參加
                    </p>
                    <button
                      class="
                        btn btn-outline-dark
                        rounded-pill
                        d-flex
                        align-items-center
                      "
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse${index + 1}`"
                      aria-expanded="false"
                      :aria-controls="`#collapse${index + 1}`"
                      @click="changeTopImg(item.ActivityId)"
                    >
                      查看票券
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="collapse" :id="`collapse${index + 1}`">
              <div class="card-body border-top p-5">
                <h6 class="fs-4 text-dark mb-3">
                  {{ item.Name }} - {{ item.OrganizerName }}
                </h6>
                <p class="fw-light text-dark m-0">
                  {{ item.Summary }}
                </p>
                <div class="py-32 border-bottom border-dark">
                  <p class="fw-light text-dark mb-3">
                    進行方式｜{{ item.ActivityType }} - {{ item.Software }}
                  </p>
                  <p class="fw-light text-dark mb-3">
                    活動日期｜{{ item.transStartDate }} （{{ item.transDay }}）
                  </p>
                  <p class="fw-light text-dark mb-3">
                    活動時間｜{{ item.transStartTime }} -
                    {{ item.transEndTime }}
                  </p>
                  <p class="fw-light text-dark mb-3">
                    活動費用｜$ {{ item.Price }}
                  </p>
                  <p class="fw-light text-dark">活動連結｜{{ item.Link }}</p>
                </div>
                <div class="pt-4 pb-8">
                  <p class="fw-normal text-dark mb-2">注意事項</p>
                  <p class="fw-light text-dark mb-24">
                    煩請在活動開始前先自行下載及註冊
                    Zoom，以免影響活動進行。為了維持活動之品質，倘若遲到 30
                    分鐘即代表放棄活動資格，並不會退還活動之費用，敬請大家互相配合！
                  </p>
                  <p class="fw-normal text-dark mb-2">取消規則</p>
                  <p class="fw-light text-dark mb-24">
                    若於報名 7 日內取消報名，將可取回活動費用總額之
                    50%。若在報名完成之 7
                    日後取消報名，恕無法退還所有報名費用。煩請各位參加者事先預留活動之時間，希望大家可以好好享受活動的樂趣。
                  </p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="card-text fs-7 m-0">
                    <!-- <span class="material-icons fs-6">favorite_border</span> -->
                    已有 {{ item.ApplicantNumber }} 人參加
                  </p>
                  <div class="d-flex">
                    <button
                      class="
                        btn btn-outline-dark
                        rounded-pill
                        d-flex
                        align-items-center
                      "
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse${index + 1}`"
                      aria-expanded="false"
                      :aria-controls="`#collapse${index + 1}`"
                      @click="changeTopImg(item.ActivityId)"
                    >
                      收回展開
                    </button>
                    <button
                      class="
                        btn btn-outline-dark
                        rounded-pill
                        d-flex
                        align-items-center
                        ms-3
                      "
                      type="button"
                      @click="openCancleRegisterModal(item)"
                    >
                      取消報名
                    </button>
                    <router-link
                      :to="`/activity-content/${item.ActivityId}`"
                      class="
                        btn btn-dark
                        rounded-pill
                        d-flex
                        align-items-center
                        ms-3
                      "
                      type="button"
                    >
                      查看詳情
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
  <!-- 如果「不是」使用者本身 卡片-->
  <div class="container" :class="{ 'd-none': isUserSelf }">
    <ul class="row row-cols-1 row-cols-md-3 g-4 list-unstyled py-32">
      <li class="col" v-for="item in newCommingData" :key="item.ActivityId">
        <div class="card h-100 rounded-4 shadow-card">
          <div class="position-relative">
            <img
              :src="item.imgUrl"
              class="card-img-top rounded-top-4"
              :alt="item.Image"
            />
            <div class="card-body p-3">
              <h5 class="card-title mb-2 p-0" style="font-size: 1.2rem">
                <router-link
                  :to="`/activity-content/${item.ActivityId}`"
                  class="stretched-link text-dark"
                >
                  {{ item.Name }}
                </router-link>
              </h5>
              <div class="d-flex align-items-center mb-2">
                <div class="d-flex align-items-center">
                  <span class="material-icons text-primary">star_rate</span>
                  <span class="material-icons text-primary">star_rate</span>
                  <span class="material-icons text-primary">star_rate</span>
                  <span class="material-icons text-primary">star_rate</span>
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

  <cancle-register-modal
    ref="cancleRegister"
    :comming="giveEmitActivityInfo"
    @deleted-register="deletedRegister"
  ></cancle-register-modal>
</template>

<script>
import CancleRegisterModal from '../../Modal/CancleRegisterModal.vue'

export default {
  props: ['UserId'],
  data () {
    return {
      newCommingData: [],
      routeUserId: '',
      giveEmitActivityInfo: {},
      isUserSelf: false
    }
  },
  components: {
    CancleRegisterModal
  },
  watch: {
    '$route.params.UserId': 'changePath'
  },
  created () {
    this.routeUserId = this.$route.params.UserId
    this.viewSide()
  },
  methods: {
    // 確認進來的是不是本人，來決定要呈現哪個卡片
    viewSide () {
      this.checkMemberWho()
      // 讀取效果開啟
      // this.isLoading = true

      // // 先用 1-8 確認是否有沒有登入
      // this.$apiHelper.get('api/users/profile-data').then((res) => {
      //   // 判斷有無登入來決定要切換哪個視角
      //   if (res.data.Status) {
      //     // 如果有登入
      //     console.log('登入')

      //     // 存 Token
      //     const token = res.data.JwtToken
      //     localStorage.setItem('JwtToken', token)
      //     console.log('是本人')
      //     this.isUserSelf = true
      //     this.getCommingData()
      //   } else {
      //     console.log('不是本人')
      //     this.isUserSelf = false
      //     this.getCommingData()
      //   }
      // })

      // const memberId = this.routeUserId
      // console.log(memberId)

      // // 先用 7-1 確認是否為本人
      // this.$apiHelper
      //   .get(`api/users/activity/attend/profile/status/${memberId}`)
      //   .then((res) => {
      //     if (res.data.Status) {
      //       // 存 Token
      //       const token = res.data.JwtToken
      //       localStorage.setItem('JwtToken', token)
      //       console.log('是本人')
      //       this.isUserSelf = true
      //       this.getCommingData()
      //     } else {
      //       console.log('是本人')
      //       this.isUserSelf = false
      //       this.getCommingData()
      //     }
      //   })
    },
    // 確認是不是自己的個人檔案頁面
    checkMemberWho () {
      const memberId = this.routeUserId
      console.log(memberId)

      // 先用 7-1 確認是否為本人
      this.$apiHelper
        .get(`api/users/activity/attend/profile/status/${memberId}`)
        .then((res) => {
          if (res.data.Status) {
            // 存 Token
            const token = res.data.JwtToken
            localStorage.setItem('JwtToken', token)
            console.log('是本人')
            this.isUserSelf = true
            this.getCommingData()
          } else {
            console.log('是本人')
            this.isUserSelf = false
            this.getCommingData()
          }
        })
    },
    // 剛渲染時得取資料
    getCommingData () {
      console.log(this.$route)

      // const getUserId = localStorage.getItem('UserId')
      this.routeUserId = this.$route.params.UserId
      // 7-7 即將到臨活動資料+分頁
      this.$apiHelper
        .get(`api/users/activity/attend/coming/${this.routeUserId}/5/1`)
        .then((res) => {
          console.log(res.data)
          if (res.data.Status === true) {
            const oriCommingData = res.data.Data.MyActivity

            oriCommingData.forEach((item) => {
              this.transDate(item)
              // 轉換成星期格式
              this.transDay(item)
              // 2. 加上圖片路徑
              const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
              item.imgUrl = imgUrl
              // 加上 class 狀態切換
              item.isCollapse = false
            })
            this.newCommingData = oriCommingData
            console.log(this.newCommingData)
          }

          // 讀取效果關閉
          // this.isLoading = false
        })
    },
    // 當路由變化時，更新資料(watch 監聽)
    changePath () {
      console.log(this.$route)
      this.routeUserId = this.$route.params.UserId
      // 呼叫取得資料的方法
      // 先確認是誰在取得資料
      // this.getCommingData()
      this.checkMemberWho()
    },
    // 取消報名呼叫 Modal
    openCancleRegisterModal (ActivityInfo) {
      // 將父層建立的物件賦予要傳給子元件的活動資料，透過 props 給子元件
      // 有無直接傳陣列，然後在子元件直接挑選某個物件的方式？
      this.giveEmitActivityInfo = ActivityInfo
      console.log(this.$refs.cancleRegister)
      this.$refs.cancleRegister.showModal()
    },
    // 取消報名
    deletedRegister (ActivityId) {
      // console.log(ActivityId)
      const deleteActivity = {}
      deleteActivity.ActivityId = ActivityId
      // 7-12 取消報名功能 (JWT)
      this.$apiHelper
        .put('api/users/activity/attend/cancel/state', deleteActivity)
        .then((res) => {
          console.log(res.data)
          if (res.data.Status === true) {
            const token = res.data.JwtToken
            localStorage.setItem('JwtToken', token)
            console.log(res.data.Message)
            this.$refs.cancleRegister.hideModal()
            this.getCommingData()
          }
        })
    },
    changeTopImg (id) {
      this.newCommingData.forEach((item) => {
        if (item.ActivityId === id) {
          console.log(item.ActivityId, id)
          return (item.isCollapse = !item.isCollapse)
        }
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
