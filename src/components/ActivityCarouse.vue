<template>
  <div
    id="onlineStudyCircle"
    class="carousel carousel-dark slide pb-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#onlineStudyCircle"
        data-bs-slide-to="0"
        class="rounded-circle active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#onlineStudyCircle"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class="rounded-circle"
      ></button>
      <button
        type="button"
        data-bs-target="#onlineStudyCircle"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        class="rounded-circle"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="false">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card h-100 rounded-4">
                <img
                  src="https://fakeimg.pl/424x334/?text=1"
                  class="card-img-top card-img"
                  alt="..."
                />
                <div class="p-40">
                  <h5 class="card-title p-0 mb-3">
                    <a href="signUp.html" class="stretched-link text-dark">
                      {{ newActivies.Name }}
                    </a>
                  </h5>
                  <p class="text-dark mb-2">活動日期｜2021.10.12</p>
                  <p class="text-dark mb-2">活動時間｜16:00 ～ 18:00</p>
                  <p class="text-dark mb-0">
                    活動講者｜{{ newActivies.OrganizerName }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 rounded-4">
                <img
                  src="https://fakeimg.pl/424x334/?text=2"
                  class="card-img-top card-img"
                  alt="..."
                />
                <div class="p-40">
                  <h5 class="card-title p-0 mb-3">
                    <a href="signUp.html" class="stretched-link text-dark">
                      {{ newActivies.Name }}
                    </a>
                  </h5>
                  <p class="text-dark mb-2">活動日期｜2021.10.12</p>
                  <p class="text-dark mb-2">活動時間｜16:00 ～ 18:00</p>
                  <p class="text-dark mb-0">活動講者｜小筑筑</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 rounded-4">
                <img
                  src="https://fakeimg.pl/424x334/?text=3"
                  class="card-img-top card-img"
                  alt="..."
                />
                <div class="p-40">
                  <h5 class="card-title p-0 mb-3">
                    <a href="signUp.html" class="stretched-link text-dark">
                      {{ newActivies.Name }}
                    </a>
                  </h5>
                  <p class="text-dark mb-2">活動日期｜2021.10.12</p>
                  <p class="text-dark mb-2">活動時間｜16:00 ～ 18:00</p>
                  <p class="text-dark mb-0">活動講者｜小筑筑</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#onlineStudyCircle"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#onlineStudyCircle"
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
      // 從 api 取到並複製一份
      newActivies: [],
      transDateData: []
    }
  },
  methods: {
    getActivitiesNew () {
      // GET請求
      this.$apiHelper
        .get('api/activities/new9/type/0')
        .then((res) => {
          const activityData = res.data
          // 將得到結果放進 Data
          // this.newActivies = activityData
          // 針對日期格式進行轉換
          activityData.forEach((item) => {
            console.log(item)
            // 取得開始日期
            const startDate = item.ActivityStartDate
            // 轉換日期格式,呼叫函式
            const transDate = this.splitDate(startDate)
            // transDate:{splitFinalDate: '2021.12.12', splitFinalTime: '16:00'}
            const transStartDate = transDate.splitFinalDate
            const transStartTime = transDate.splitFinalTime
            // activityData.push(transStartDate, transStartTime)
            const obj = { transStartDate, transStartTime }
            this.transDateData.push(obj)
          })
          console.log(this.transDateData)
        })
        .catch((error) => {
          console.log('response: ', error.res.data)
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
      console.log(splitFinalDate, splitFinalTime)
      return { splitFinalDate, splitFinalTime }
    }
  },
  created () {
    this.getActivitiesNew()
  }
}
</script>
