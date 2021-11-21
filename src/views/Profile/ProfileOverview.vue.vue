<template>
  <!-- <div>個人檔案頁的導覽頁面（全部共用元件處）</div> -->
  <component-navbar></component-navbar>
  <div class="pt-10">
    <div class="container">
      <div class="row py-10">
        <div class="col-md-3">
          <!-- 左邊：個人資料檔案區塊 -->
          <div class="px-40 py-5 border border-dark rounded-6">
            <div class="text-center">
              <img
                :src="profileObj.UserImgUrl"
                alt="memberPhoto"
                class="rounded-pill memberPhoto-120 mb-4 text-center"
              />
              <h2 class="text-center text-dark mb-1 fw-bold fs-4 lh-36">
                {{ profileObj.Name }}
              </h2>
              <p class="text-center text-dark mb-3 fw-bold fs-4 lh-36">
                {{ profileObj.NickName }}
              </p>
              <p class="text-dark fw-light lh-base mb-3">
                {{ profileObj.FollowersNumber }} 追蹤者｜{{
                  profileObj.FollowingNumber
                }}
                關注中
              </p>
              <button
                type="button"
                class="
                  btn btn-dark
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
                :class="{ 'd-none': userAttendObj.Status }"
                @click="changeFollowStatus(profileObj.Id)"
              >
                <span class="material-icons fs-6 me-2">done_outline</span>
                {{ userAttendObj.Fallowed }}
              </button>
              <button
                type="button"
                class="
                  btn btn-dark
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
                :class="{ 'd-none': !userAttendObj.Status }"
              >
                <span class="material-icons fs-6 me-2">edit</span>
                編輯個人檔案
              </button>
            </div>
            <!-- 地點 -->
            <div class="address py-32 border-dark border-top border-bottom">
              <p
                class="
                  d-flex
                  justify-content-start
                  align-items-center
                  text-dark
                  m-0
                "
              >
                <span class="material-icons me-2">place</span>
                {{ profileObj.Country }}．{{ profileObj.City }}．{{
                  profileObj.Area
                }}
              </p>
            </div>
            <!-- 關於我 -->
            <div class="aboutMe py-32">
              <h3 class="text-dark fs-6 mb-2">關於我</h3>
              <p class="text-dark mb-32 fw-light">
                {{ profileObj.AboutMe }}
              </p>
              <h3 class="text-dark fs-6 mb-2">我的專長</h3>
              <p class="text-dark mb-32 fw-light">
                {{ profileObj.MySkill }}
              </p>
              <h3 class="text-dark fs-6 mb-2">我的興趣</h3>
              <p class="text-dark mb-0 fw-light">
                {{ profileObj.MyInterest }}
              </p>
            </div>
            <!-- 社群軟體 -->
            <div class="py-32 border-dark border-top">
              <h3 class="text-dark fs-6 mb-4">社群軟體</h3>
              <ul class="list-unstyled d-flex justify-content-between mb-0">
                <li class="nav-item py-0">
                  <a
                    class="nav-link text-dark p-0 fs-3"
                    :href="profileObj.FacebookLink"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li class="nav-item py-0">
                  <a
                    class="nav-link text-dark p-0 fs-3"
                    :href="profileObj.InstagramLink"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="nav-item py-0">
                  <a
                    class="nav-link text-dark p-0 fs-3"
                    :href="profileObj.LineLink"
                  >
                    <i class="fab fa-line"></i>
                  </a>
                </li>
              </ul>
            </div>
            <!-- 加入時間、瀏覽次數 -->
            <p
              class="text-dark fs-7 pt-32 border-top border-dark mb-2 fw-light"
            >
              於 {{ profileObj.transCreatDate }} 加入
            </p>
            <p class="text-dark fw-light">瀏覽次數：{{ profileObj.Views }}</p>
          </div>
        </div>
        <div class="col-md-9 px-13">
          <router-link
            :to="`/profile/my-activity/${this.routeUserId}`"
            class="mb-32 fw-bold fs-4 text-dark me-4"
            @click="changeActive('MyActivityOverview')"
            :class="{ 'text-searchselect': !isPage }"
            type="button"
            >我的活動</router-link
          >
          <router-link
            :to="`/profile/study-partner/${this.routeUserId}`"
            class="mb-32 fw-bold fs-4 text-dark me-4"
            @click="changeActive('StudyPartnerOverview')"
            :class="{ 'text-searchselect': isPage }"
            type="button"
            >讀冊夥伴</router-link
          >
          <router-view></router-view>
        </div>
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
  props: ['UserId'],
  data () {
    return {
      userAttendObj: {},
      profileObj: {},
      routeUserId: '',
      putFollowStaus: {
        FollowingUserId: ''
      },
      isPage: true
    }
  },
  components: {
    componentNavbar,
    componentFooter
  },
  watch: {
    '$route.params.UserId': 'changePath'
  },
  created () {
    this.changeLinkActive()

    console.log(this.$route)
    this.routeUserId = this.$route.params.UserId
    console.log(this.UserId)
    // 7-2 取得個人檔案
    this.$apiHelper.get(`api/users/profile/${this.UserId}`).then((res) => {
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
    // 7-1 確認是否為本人瀏覽 (JWT)
    this.$apiHelper
      .get(`api/users/activity/attend/profile/status/${this.UserId}`)
      .then((res) => {
        const getJwtToken = res.data.JwtToken
        this.userAttendObj = res.data
        if (res.data.Status) {
          console.log(res.data.Message)
          localStorage.setItem('JwtToken', getJwtToken)
        } else {
          console.log(res.data.Message)
          const apiMessage = res.data.Message
          // 已登入狀態下判斷有無追蹤
          if (apiMessage === '非本人資料') {
            localStorage.setItem('JwtToken', getJwtToken)
            if (res.data.Following === true) {
              this.userAttendObj.Fallowed = '已追蹤'
            } else {
              this.userAttendObj.Fallowed = '追蹤我'
            }
          } else {
            // 沒有登入狀態下的「追蹤我」
            this.userAttendObj.Fallowed = '追蹤我'
          }
        }
        console.log(this.userAttendObj)
      })
    // 7-3 增加個人頁瀏覽人數
    // PUT 請求
    this.$apiHelper
      .put(`api/users/profile/views/${this.UserId}`)
      .then((res) => {
        if (res.data.Status) {
          console.log(res.data.Message)
        }
      })
  },
  methods: {
    // 當路由變化時，更新資料
    changePath () {
      // 我的活動、讀冊夥伴樣事業換
      this.changeLinkActive()
      console.log(this.$route)
      this.routeUserId = this.$route.params.UserId
      // 7-1 確認是否為本人瀏覽 (JWT)
      this.$apiHelper
        .get(`api/users/activity/attend/profile/status/${this.routeUserId}`)
        .then((res) => {
          const getJwtToken = res.data.JwtToken
          this.userAttendObj = res.data
          if (res.data.Status) {
            console.log(res.data.Message)
            localStorage.setItem('JwtToken', getJwtToken)
          } else {
            console.log(res.data.Message)
            const apiMessage = res.data.Message
            // 已登入狀態下判斷有無追蹤
            if (apiMessage === '非本人資料') {
              localStorage.setItem('JwtToken', getJwtToken)
              if (res.data.Following === true) {
                this.userAttendObj.Fallowed = '已追蹤'
              } else {
                this.userAttendObj.Fallowed = '追蹤我'
              }
            } else {
              // 沒有登入狀態下的「追蹤我」
              this.userAttendObj.Fallowed = '追蹤我'
            }
          }
          console.log(this.userAttendObj)
        })

      // 7-2 取得個人檔案
      this.$apiHelper
        .get(`api/users/profile/${this.routeUserId}`)
        .then((res) => {
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
    },
    // 7-4 追蹤、取消追蹤
    changeFollowStatus (followerId) {
      console.log('followerId', followerId)
      this.putFollowStaus.FollowingUserId = followerId
      // 7-4 追蹤/取消追蹤功能 (JWT)
      this.$apiHelper
        .put('api/users/follow/someone', this.putFollowStaus)
        .then((res) => {
          const getJwtToken = res.data.JwtToken
          if (res.data.Status) {
            console.log(res.data.Message)
            // 追蹤、取消追蹤成功的話，就更新得到的 Token
            localStorage.setItem('JwtToken', getJwtToken)
            // 按鈕畫面變化
            if (this.userAttendObj.Fallowed === '已追蹤') {
              this.userAttendObj.Fallowed = '追蹤我'
            } else if (this.userAttendObj.Fallowed === '追蹤我') {
              this.userAttendObj.Fallowed = '已追蹤'
            }
          } else {
            console.log(res.data.Message)
            // 如果沒有登入的話，就跳轉到登入頁請他登入
            this.$router.push('login')
          }
          console.log(this.userAttendObj)
        })
    },
    // 頁面剛進來時，我的活動、讀冊夥伴 樣式切換
    changeLinkActive () {
      const pageName = this.$route.name
      console.log(pageName)
      if (pageName === 'MyActivityOverview') {
        this.isPage = true
        console.log('是我的活動')
      } else if (pageName === 'StudyPartnerOverview') {
        this.isPage = false
        console.log('是讀冊夥伴')
      }
    },
    changeActive (category) {
      if (category === 'MyActivityOverview') {
        this.isPage = true
        console.log('是我的活動')
      } else if (category === 'StudyPartnerOverview') {
        this.isPage = false
        console.log('是讀冊夥伴')
      }
    }
  }
}
</script>
