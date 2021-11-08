<template>
  <div
    id="onlineActivity"
    class="carousel carousel-dark slide pb-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#onlineActivity"
        data-bs-slide-to="0"
        class="rounded-circle active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#onlineActivity"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class="rounded-circle"
      ></button>
      <button
        type="button"
        data-bs-target="#onlineActivity"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        class="rounded-circle"
      ></button>
    </div>
    <div class="container">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newOnlineActivity.slice(0, 3)"
              :key="item.Id"
            >
              <div class="card h-100 rounded-4">
                <img
                  :src="item.imgUrl"
                  class="
                    card-img-top card-img
                    rounded rounded-top-4 rounded-bottom-0
                  "
                  :alt="item.Image"
                />
                <div class="p-40">
                  <h5 class="card-title p-0 mb-3">
                    <router-link
                      :to="`/activity-content/${item.Id}`"
                      class="stretched-link text-dark"
                    >
                      {{ item.Name }}
                    </router-link>
                  </h5>
                  <p class="text-dark mb-2">
                    活動日期｜{{ item.transStartDate }}
                  </p>
                  <p class="text-dark mb-2">
                    活動時間｜{{ item.transStartTime }} ～
                    {{ item.transEndTime }}
                  </p>
                  <p class="text-dark mb-0">
                    活動講者｜{{ item.OrganizerName }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="carousel-item" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newOnlineActivity.slice(3, 6)"
              :key="item.Id"
            >
              <div class="card h-100 rounded-4">
                <img
                  :src="item.imgUrl"
                  class="
                    card-img-top card-img
                    rounded rounded-top-4 rounded-bottom-0
                  "
                  :alt="item.Image"
                />
                <div class="p-40">
                  <h5 class="card-title p-0 mb-3">
                    <router-link
                      :to="`/activity-content/${item.Id}`"
                      class="stretched-link text-dark"
                    >
                      {{ item.Name }}
                    </router-link>
                  </h5>
                  <p class="text-dark mb-2">
                    活動日期｜{{ item.transStartDate }}
                  </p>
                  <p class="text-dark mb-2">
                    活動時間｜{{ item.transStartTime }} ～
                    {{ item.transEndTime }}
                  </p>
                  <p class="text-dark mb-0">
                    活動講者｜{{ item.OrganizerName }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="carousel-item" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newOnlineActivity.slice(6, 9)"
              :key="item.Id"
            >
              <div class="card h-100 rounded-4">
                <img
                  :src="item.imgUrl"
                  class="
                    card-img-top card-img
                    rounded rounded-top-4 rounded-bottom-0
                  "
                  :alt="item.Image"
                />
                <div class="p-40">
                  <h5 class="card-title p-0 mb-3">
                    <router-link
                      :to="`/activity-content/${item.Id}`"
                      class="stretched-link text-dark"
                    >
                      {{ item.Name }}
                    </router-link>
                  </h5>
                  <p class="text-dark mb-2">
                    活動日期｜{{ item.transStartDate }}
                  </p>
                  <p class="text-dark mb-2">
                    活動時間｜{{ item.transStartTime }} ～
                    {{ item.transEndTime }}
                  </p>
                  <p class="text-dark mb-0">
                    活動講者｜{{ item.OrganizerName }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#onlineActivity"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#onlineActivity"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div
    id="entityActivity"
    class="carousel carousel-dark slide pb-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#entityActivity"
        data-bs-slide-to="0"
        class="rounded-circle active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#entityActivity"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class="rounded-circle"
      ></button>
      <button
        type="button"
        data-bs-target="#entityActivity"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        class="rounded-circle"
      ></button>
    </div>
    <div class="container">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newEntityActivity.slice(0, 3)"
              :key="item.Id"
            >
              <div class="card h-100 rounded-4">
                <img
                  :src="item.imgUrl"
                  class="
                    card-img-top card-img
                    rounded rounded-top-4 rounded-bottom-0
                  "
                  :alt="item.Image"
                />
                <div class="p-40">
                  <h5 class="card-title p-0 mb-3">
                    <router-link
                      :to="`/activity-content/${item.Id}`"
                      class="stretched-link text-dark"
                    >
                      {{ item.Name }}
                    </router-link>
                  </h5>
                  <p class="text-dark mb-2">
                    活動日期｜{{ item.transStartDate }}
                  </p>
                  <p class="text-dark mb-2">
                    活動時間｜{{ item.transStartTime }} ～
                    {{ item.transEndTime }}
                  </p>
                  <p class="text-dark mb-0">
                    活動講者｜{{ item.OrganizerName }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="carousel-item" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newEntityActivity.slice(3, 6)"
              :key="item.Id"
            >
              <div class="card h-100 rounded-4">
                <img
                  :src="item.imgUrl"
                  class="
                    card-img-top card-img
                    rounded rounded-top-4 rounded-bottom-0
                  "
                  :alt="item.Image"
                />
                <div class="p-40">
                  <h5 class="card-title p-0 mb-3">
                    <router-link
                      :to="`/activity-content/${item.Id}`"
                      class="stretched-link text-dark"
                    >
                      {{ item.Name }}
                    </router-link>
                  </h5>
                  <p class="text-dark mb-2">
                    活動日期｜{{ item.transStartDate }}
                  </p>
                  <p class="text-dark mb-2">
                    活動時間｜{{ item.transStartTime }} ～
                    {{ item.transEndTime }}
                  </p>
                  <p class="text-dark mb-0">
                    活動講者｜{{ item.OrganizerName }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="carousel-item" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newEntityActivity.slice(6, 9)"
              :key="item.Id"
            >
              <div class="card h-100 rounded-4">
                <img
                  :src="item.imgUrl"
                  class="
                    card-img-top card-img
                    rounded rounded-top-4 rounded-bottom-0
                  "
                  :alt="item.Image"
                />
                <div class="p-40">
                  <h5 class="card-title p-0 mb-3">
                    <router-link
                      :to="`/activity-content/${item.Id}`"
                      class="stretched-link text-dark"
                    >
                      {{ item.Name }}
                    </router-link>
                  </h5>
                  <p class="text-dark mb-2">
                    活動日期｜{{ item.transStartDate }}
                  </p>
                  <p class="text-dark mb-2">
                    活動時間｜{{ item.transStartTime }} ～
                    {{ item.transEndTime }}
                  </p>
                  <p class="text-dark mb-0">
                    活動講者｜{{ item.OrganizerName }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#entityActivity"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#entityActivity"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div
    id="workShop"
    class="carousel carousel-dark slide pb-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#workShop"
        data-bs-slide-to="0"
        class="rounded-circle active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#workShop"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class="rounded-circle"
      ></button>
      <button
        type="button"
        data-bs-target="#workShop"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        class="rounded-circle"
      ></button>
    </div>
    <div class="container">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newWorkShop.slice(0, 3)"
              :key="item.Id"
            >
              <div class="card h-100 rounded-4">
                <img
                  :src="item.imgUrl"
                  class="
                    card-img-top card-img
                    rounded rounded-top-4 rounded-bottom-0
                  "
                  :alt="item.Image"
                />
                <div class="p-40">
                  <h5 class="card-title p-0 mb-3">
                    <router-link
                      :to="`/activity-content/${item.Id}`"
                      class="stretched-link text-dark"
                    >
                      {{ item.Name }}
                    </router-link>
                  </h5>
                  <p class="text-dark mb-2">
                    活動日期｜{{ item.transStartDate }}
                  </p>
                  <p class="text-dark mb-2">
                    活動時間｜{{ item.transStartTime }} ～
                    {{ item.transEndTime }}
                  </p>
                  <p class="text-dark mb-0">
                    活動講者｜{{ item.OrganizerName }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="carousel-item" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newWorkShop.slice(3, 6)"
              :key="item.Id"
            >
              <div class="card h-100 rounded-4">
                <img
                  :src="item.imgUrl"
                  class="
                    card-img-top card-img
                    rounded rounded-top-4 rounded-bottom-0
                  "
                  :alt="item.Image"
                />
                <div class="p-40">
                  <h5 class="card-title p-0 mb-3">
                    <router-link
                      :to="`/activity-content/${item.Id}`"
                      class="stretched-link text-dark"
                    >
                      {{ item.Name }}
                    </router-link>
                  </h5>
                  <p class="text-dark mb-2">
                    活動日期｜{{ item.transStartDate }}
                  </p>
                  <p class="text-dark mb-2">
                    活動時間｜{{ item.transStartTime }} ～
                    {{ item.transEndTime }}
                  </p>
                  <p class="text-dark mb-0">
                    活動講者｜{{ item.OrganizerName }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="carousel-item" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newWorkShop.slice(6, 9)"
              :key="item.Id"
            >
              <div class="card h-100 rounded-4">
                <img
                  :src="item.imgUrl"
                  class="
                    card-img-top card-img
                    rounded rounded-top-4 rounded-bottom-0
                  "
                  :alt="item.Image"
                />
                <div class="p-40">
                  <h5 class="card-title p-0 mb-3">
                    <router-link
                      :to="`/activity-content/${item.Id}`"
                      class="stretched-link text-dark"
                    >
                      {{ item.Name }}
                    </router-link>
                  </h5>
                  <p class="text-dark mb-2">
                    活動日期｜{{ item.transStartDate }}
                  </p>
                  <p class="text-dark mb-2">
                    活動時間｜{{ item.transStartTime }} ～
                    {{ item.transEndTime }}
                  </p>
                  <p class="text-dark mb-0">
                    活動講者｜{{ item.OrganizerName }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#workShop"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#workShop"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 從 api 取得並複製一份,內含有拆解後的日期與時間格式
      newOnlineActivity: [],
      newEntityActivity: [],
      newWorkShop: []
    }
  },
  methods: {
    getOnlineNew () {
      // GET請求
      this.$apiHelper.get('api/activities/new9/type/0').then((res) => {
        if (res.data.Status) {
          const activityData = res.data.Data
          // console.log(activityData)
          activityData.forEach((item) => {
            this.transDate(item)

            // 2. 加上圖片路徑
            const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
            item.imgUrl = imgUrl
          })
          this.newOnlineActivity = activityData
          // console.log(this.newOnlineActivity)
        }
      })
    },
    getEntityNew () {
      // GET請求
      this.$apiHelper.get('api/activities/new9/type/1').then((res) => {
        if (res.data.Status) {
          const activityData = res.data.Data
          activityData.forEach((item) => {
            this.transDate(item)

            // 2. 加上圖片路徑
            const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
            item.imgUrl = imgUrl
          })
          this.newEntityActivity = activityData
        }
      })
    },
    getWorkShopNew () {
      // GET請求
      this.$apiHelper.get('api/activities/new9/type/2').then((res) => {
        if (res.data.Status) {
          const activityData = res.data.Data
          activityData.forEach((item) => {
            this.transDate(item)
            // 2. 加上圖片路徑
            const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
            item.imgUrl = imgUrl
          })
          this.newWorkShop = activityData
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
  },
  created () {
    this.getOnlineNew()
    this.getEntityNew()
    this.getWorkShopNew()
  }
}
</script>
