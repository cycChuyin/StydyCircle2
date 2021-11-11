<template>
  <!-- <div>個人檔案頁的導覽頁面（全部共用元件處）</div> -->
  <component-navbar></component-navbar>
  <div class="container">
    <div class="row py-10">
      <div class="col-md-3">
        <!-- 左邊：個人資料檔案區塊 -->
        <div class="px-40 py-5 border border-secondary rounded-6">
          <div class="text-center">
            <img
              :src="profileObj.UserImgUrl"
              alt="memberPhoto"
              class="rounded-pill memberPhoto-120 mb-4 text-center"
            />
            <h2 class="text-center text-secondary mb-2 fw-normal">
              {{ profileObj.Name }}<br />
              {{ profileObj.NickName }}
            </h2>
            <p class="text-secondary fw-light">
              {{ profileObj.FollowersNumber }} 追蹤者｜{{
                profileObj.FollowingNumber
              }}
              關注中
            </p>
            <button
              type="button"
              class="
                btn btn-secondary
                fw-light
                rounded-pill
                d-flex
                align-items-center
                text-center
                mx-auto
                text-white
                fs-7
                mb-32
              "
            >
              <span class="material-icons fs-6 me-2">done_outline</span>
              追蹤我
            </button>
            <button
              type="button"
              class="
                btn btn-secondary
                fw-light
                rounded-pill
                d-flex
                align-items-center
                text-center
                mx-auto
                text-white
                fs-7
                mb-32
              "
            >
              <span class="material-icons fs-6 me-2">edit</span>
              編輯個人檔案
            </button>
            <button
              type="button"
              class="
                btn btn-secondary
                fw-light
                rounded-pill
                d-flex
                align-items-center
                text-center
                mx-auto
                text-white
                fs-7
                mb-32
              "
            >
              <span class="material-icons fs-6 me-2">download_done</span>
              儲存編輯
            </button>
          </div>
          <!-- 地點 -->
          <div class="address py-32 border-secondary border-top border-bottom">
            <p
              class="
                d-flex
                justify-content-start
                align-items-center
                text-secondary
                m-0
              "
            >
              <span class="material-icons me-2">place</span>
              {{ profileObj.Area }}．{{ profileObj.City }}．{{
                profileObj.Country
              }}
            </p>
          </div>
          <!-- 關於我 -->
          <div class="aboutMe py-32">
            <h3 class="text-secondary fs-6 mb-2">關於我</h3>
            <p class="text-secondary mb-32 fw-light">
              {{ profileObj.AboutMe }}
            </p>
            <h3 class="text-secondary fs-6 mb-2">我的專長</h3>
            <p class="text-secondary mb-32 fw-light">
              {{ profileObj.MySkill }}
            </p>
            <h3 class="text-secondary fs-6 mb-2">我的興趣</h3>
            <p class="text-secondary mb-0 fw-light">
              {{ profileObj.MyInterest }}
            </p>
          </div>
          <!-- 社群軟體 -->
          <div class="py-32 border-secondary border-top">
            <h3 class="text-secondary fs-6 mb-32">社群軟體</h3>
            <ul class="list-unstyled d-flex justify-content-between mb-0">
              <li>
                <a :href="profileObj.FacebookLink"
                  ><i class="bi bi-facebook"></i
                ></a>
              </li>
              <li>
                <a :href="profileObj.InstagramLink"
                  ><i class="bi bi-instagram"></i
                ></a>
              </li>
              <li>
                <a href="#"><i class="bi bi-envelope-fill"></i></a>
              </li>
              <li>
                <a href="#"><i class="bi bi-envelope-fill"></i></a>
              </li>
            </ul>
          </div>
          <!-- 加入時間、瀏覽次數 -->
          <p
            class="
              text-secondary
              fs-7
              pt-32
              border-top border-secondary
              mb-2
              fw-light
            "
          >
            於 {{profileObj.transCreatDate}} 加入
          </p>
          <p class="text-secondary fw-light">瀏覽次數：{{profileObj.Views}}</p>
        </div>
      </div>
      <div class="col-md-9 px-13">
        <router-link
          to="/profile/my-activity"
          class="mb-32 fw-bold fs-4 text-secondary me-4"
          type="button"
          >我的活動</router-link
        >
        <router-link
          to="/profile/study-partner"
          class="mb-32 fw-bold fs-4 text-secondary me-4"
          type="button"
          >讀冊夥伴</router-link
        >
        <router-view></router-view>
      </div>
    </div>
  </div>
  <component-footer></component-footer>
</template>

<script>
import componentNavbar from '@/components/Layout/Navbar.vue'
import componentFooter from '@/components/Layout/Footer.vue'
// import { createApp } from '@vue/runtime-dom'

export default {
  data () {
    return {
      profileObj: {}
    }
  },
  components: {
    componentNavbar,
    componentFooter
  },
  created () {
    console.log(this.$route)
    const UserId = this.$route.params.UserId
    // 7-1 確認是否為本人瀏覽 (JWT)
    const Token = localStorage.getItem('JwtToken')
    if (!Token || Token === 'undefinded') {
      this.isSelf = false
    } else {
      // 7-1
      this.$apiHelper
        .get(`api/users/activity/attend/profile/status/${UserId}`)
        .then((res) => {
          if (res.data.Status) {
            console.log(res.data.Message)
            const getJwtToken = res.data.JwtToken
            localStorage.setItem('JwtToken', getJwtToken)
            this.isSelf = true
            console.log('是本人資料', this.isSelf)
          } else {
            console.log(res.data.Message)
            const getJwtToken = res.data.JwtToken
            localStorage.setItem('JwtToken', getJwtToken)
            this.isSelf = false
          }
        })
    }

    // 7-2 取得個人檔案
    this.$apiHelper.get(`api/users/profile/${UserId}`).then((res) => {
      if (res.data.Status) {
        console.log(res.data)
        const oriProfileObj = res.data.Data
        // 頭貼路徑
        const UserImgUrl = `${process.env.VUE_APP_USERIMG}/${res.data.Data.Image}?2021`
        oriProfileObj.UserImgUrl = UserImgUrl
        // 創建日期
        this.transDate(oriProfileObj)
        this.profileObj = oriProfileObj
        console.log(this.profileObj)
      }
    })
  },
  methods: {
    transDate (item) {
      // 1. 針對日期格式進行轉換
      // 取得開始、結束日期
      const creatDate = item.CreatDate
      // 轉換日期格式,呼叫函式
      const transCreatDateObj = this.splitDate(creatDate)
      // transDate:{splitFinalDate: '2021.12.12', splitFinalTime: '16:00'}
      // 將拆解好的時間加入陣列
      item.transCreatDate = transCreatDateObj.splitFinalDate
      item.transCreatTime = transCreatDateObj.splitFinalTime
      // 回傳每筆資料
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
    }
  }
}
</script>
