<template>
  <!-- 摺疊卡片 -->
  <div class="px-13 py-32">
    <ul class="row row-cols-1 list-unstyled">
      <template v-for="(item, index) in getCommingData" :key="item.ActivityId">
        <li class="col mb-4">
          <div class="card text-secondary fw-light border-secondary rounded-7">
            <img
              :src="item.imgUrl"
              alt="..."
              class="card-img-top rounded-7 rounded-bottom-0"
              style="height: 220px"
              v-if="item.isCollapse"
            />
            <div class="row g-0" v-else>
              <div class="col-md-4">
                <img
                  :src="item.imgUrl"
                  alt="..."
                  class="card-img-top rounded-7 rounded-end-0"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title fw-light fs-4 mb-2">
                    {{ item.Name }} - {{ item.OrganizerName }}
                  </h5>
                  <p class="card-text mb-2">2021/12/23（四）15:00 - 18:00</p>
                  <p class="card-text mb-3">
                    {{ item.Summary }}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p class="card-text fs-7 m-0">
                      <span class="material-icons fs-6">favorite_border</span>
                      已有 {{ item.ApplicantNumber }} 人參加
                    </p>
                    <button
                      class="
                        btn btn-outline-secondary
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
              <div class="card-body border-top border-dark p-5">
                <h6 class="fs-4 text-secondary mb-3">
                  {{ item.Name }} - {{ item.OrganizerName }}
                </h6>
                <p class="fw-light text-secondary m-0">
                  {{ item.Summary }}
                </p>
                <div class="py-32 border-bottom border-secondary">
                  <p class="fw-light text-secondary mb-3">
                    進行方式｜{{ item.ActivityType }} - {{ item.Software }}
                  </p>
                  <p class="fw-light text-secondary mb-3">
                    活動日期｜{{ item.transStartDate }} （四）
                  </p>
                  <p class="fw-light text-secondary mb-3">
                    活動時間｜{{ item.transStartTime }} -
                    {{ item.transEndTime }}
                  </p>
                  <p class="fw-light text-secondary mb-3">
                    活動費用｜$ {{ item.Price }}
                  </p>
                  <p class="fw-light text-secondary">
                    活動連結｜{{ item.Link }}
                  </p>
                </div>
                <div class="pt-4 pb-8">
                  <p class="fw-normal text-secondary mb-2">注意事項</p>
                  <p class="fw-light text-secondary mb-24">
                    煩請在活動開始前先自行下載及註冊
                    Zoom，以免影響活動進行。為了維持活動之品質，倘若遲到 30
                    分鐘即代表放棄活動資格，並不會退還活動之費用，敬請大家互相配合！
                  </p>
                  <p class="fw-normal text-secondary mb-2">取消規則</p>
                  <p class="fw-light text-secondary mb-24">
                    若於報名 7 日內取消報名，將可取回活動費用總額之
                    50%。若在報名完成之 7
                    日後取消報名，恕無法退還所有報名費用。煩請各位參加者事先預留活動之時間，希望大家可以好好享受活動的樂趣。
                  </p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="card-text fs-7 m-0">
                    <span class="material-icons fs-6">favorite_border</span>
                    已有 {{ item.ApplicantNumber }} 人參加
                  </p>
                  <div class="d-flex">
                    <button
                      class="
                        btn btn-outline-secondary
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
                        btn btn-outline-secondary
                        rounded-pill
                        d-flex
                        align-items-center
                        ms-3
                      "
                      type="button"
                    >
                      取消報名
                    </button>
                    <router-link
                      :to="`/activity-content/${item.ActivityId}`"
                      class="
                        btn btn-outline-secondary
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
</template>

<script>
export default {
  data () {
    return {
      // isCollapse: false,
      getCommingData: []
    }
  },
  created () {
    const getToken = localStorage.getItem('JwtToken')
    // 判斷是否有 JwtToken ，無則請使用者登入
    if (getToken === false || getToken === 'undefined') {
      this.$router.push('/login')
    } else {
      this.$apiHelper
        .get('api/users/activity/attend/info/6/2', getToken)
        .then((res) => {
          console.log(res.data)
          if (res.data.Status === true) {
            const getJwtToken = res.data.JwtToken
            localStorage.setItem('JwtToken', getJwtToken)
            const oriCommingData = res.data.Data.MyActivity

            oriCommingData.forEach((item) => {
              this.transDate(item)
              // 2. 加上圖片路徑
              const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
              item.imgUrl = imgUrl
              // 加上 class 狀態切換
              item.isCollapse = false
            })
            this.getCommingData = oriCommingData
            console.log(this.getCommingData)
          }
        })
    }
  },
  methods: {
    changeTopImg (id) {
      this.getCommingData.forEach((item) => {
        if (item.ActivityId === id) {
          console.log(item.ActivityId, id)
          return (item.isCollapse = !item.isCollapse)
        }
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
  }
}
</script>
