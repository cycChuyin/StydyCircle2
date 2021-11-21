<template>
  <!-- 追蹤中 -->
  <div class="container">
    <ul class="row row-cols-1 g-4 pt-32 mb-10 list-unstyled">
      <li
        class="col border-0 border-bottom"
        v-for="item in getFollowersData"
        :key="item.Id"
      >
        <div class="rounded-4 pb-3">
          <div class="row g-0">
            <div class="col-sm-10">
              <div class="d-flex">
                <router-link :to="`/profile/my-activity/${item.Id}`">
                  <img
                    :src="item.UserImgUrl"
                    alt="memberPhoto"
                    class="rounded-pill memberPhoto-88 me-4"
                  />
                </router-link>
                <div class="card-body p-0">
                  <router-link :to="`/profile/my-activity/${item.Id}`">
                    <p class="card-text text-dark mb-2 fs-5">
                      {{ item.Name }}｜{{ item.NickName }}
                    </p>
                  </router-link>
                  <p class="card-text text-dark mb-2 fw-light fs-8">
                    {{ item.FollowingNumber }} 關注中｜{{
                      item.FollowersNumber
                    }}
                    追蹤者
                  </p>
                  <p class="card-text text-dark fs-7">
                    {{ item.AboutMe }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-2 d-flex align-items-center justify-content-end">
              <!-- 有追蹤時的按鈕狀態 -->
              <router-link
                type="button"
                class="
                  btn btn-dark
                  fw-light
                  rounded-pill
                  d-flex
                  align-items-center
                  text-center text-white
                  py-2
                  px-3
                  fs-7
                "
                :to="`/profile/my-activity/${item.Id}`"
                :class="{ 'd-none': !item.Following }"
              >
                <span class="material-icons me-2"> person </span>
                查看檔案
              </router-link>
              <!-- 未追蹤時的按鈕狀態 -->
              <button
                type="button"
                class="
                  btn btn-dark
                  fw-light
                  rounded-pill
                  d-flex
                  align-items-center
                  text-center text-white
                  py-2
                  px-3
                  fs-7
                "
                :class="{ 'd-none': item.Following || Login }"
                ref="btnMyself"
              >
                <span class="material-icons me-2"> person_add </span>
                追蹤伙伴
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- pagination -->
    <div
      class="d-flex justify-content-end fs-4 align-items-center text-dark"
    >
      <nav aria-label="Page navigation example">
        <div class="d-flex align-items-center">
          <ul class="pagination m-0">
            <li class="page-item fs-4 rounded-pill">
              <a
                class="p-3 bg-transparent border-0"
                href="#"
                aria-label="Previous"
              >
                <span class="material-icons" aria-hidden="true"
                  >chevron_left</span
                >
              </a>
            </li>
            <li class="bg-primary fs-4 text-white rounded-pill active">
              <a class="p-3 border-0 text-white" href="#">1</a>
            </li>
            <li class="page-item fs-4 rounded-pill">
              <a class="p-3 bg-transparent border-0" href="#">2</a>
            </li>
            <li class="page-item fs-4 rounded-pill">
              <a class="p-3 bg-transparent border-0" href="#">3</a>
            </li>
            <li class="page-item fs-4 rounded-pill">
              <a class="p-3 bg-transparent border-0" href="#">...</a>
            </li>
            <li class="page-item fs-4 rounded-pill">
              <a class="p-3 bg-transparent border-0" href="#">18</a>
            </li>
            <li class="page-item fs-4 rounded-pill">
              <a class="p-3 bg-transparent border-0" href="#">19</a>
            </li>
            <li class="page-item fs-4 rounded-pill">
              <a class="p-3 bg-transparent border-0" href="#">20</a>
            </li>
            <li class="page-item fs-4 rounded-pill">
              <a class="bg-transparent" href="#" aria-label="Next">
                <span class="material-icons" aria-hidden="true"
                  >chevron_right</span
                >
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ['UserId'],
  data () {
    return {
      getFollowersData: [],
      Login: false,
      routeUserId: ''
    }
  },
  watch: {
    '$route.params.UserId': 'changePath'
  },
  created () {
    console.log(this.$route)
    this.routeUserId = this.$route.params.UserId
    // 1-8 Navbar 個人資料+頭貼 (JWT) - 判斷有無登入
    this.$apiHelper.get('api/users/profile-data').then((res) => {
      console.log(res.data)
      // 如果有登入
      if (res.data.Status) {
        // 7-15 關注中的會員資料+分頁 (JWT)
        this.$apiHelper
          .get(`api/users/login/followers/list/${this.routeUserId}/7/1`)
          .then((res) => {
            if (res.data.Status) {
              console.log(res.data)
              // 存新的 Token
              const getJwtToken = res.data.JwtToken
              localStorage.setItem('JwtToken', getJwtToken)
              const oriFollowersData = res.data.Data.Followers
              oriFollowersData.forEach((item) => {
                // 頭貼路徑
                const UserImgUrl = `${process.env.VUE_APP_USERIMG}/${item.Image}?2021`
                item.UserImgUrl = UserImgUrl
              })

              oriFollowersData.forEach((item) => {
                const UserId = JSON.stringify(item.UserId)
                const selfUserId = localStorage.getItem('UserId')
                if (UserId === selfUserId) {
                  item.Following = true
                }
              })

              this.getFollowersData = oriFollowersData
              console.log(this.getFollowersData)
            }
          })
      } else {
        console.log('沒有登入')
        // 如果沒登入
        // 接 7-5 關注中的會員資料+分頁
        this.$apiHelper
          .get(`api/users/followers/list/${this.routeUserId}/7/1`)
          .then((res) => {
            if (res.data.Status) {
              console.log(res.data)
              const oriFollowersData = res.data.Data.Followers
              oriFollowersData.forEach((item) => {
                // 頭貼路徑
                const UserImgUrl = `${process.env.VUE_APP_USERIMG}/${item.Image}?2021`
                item.UserImgUrl = UserImgUrl
              })
              this.getFollowersData = oriFollowersData
              console.log(this.getFollowersData)
            }
          })
      }
    })
  },
  methods: {
    // 當路由變化時，更新資料
    changePath () {
      console.log(this.$route)
      this.routeUserId = this.$route.params.UserId
      // 1-8 Navbar 個人資料+頭貼 (JWT) - 判斷有無登入
      this.$apiHelper.get('api/users/profile-data').then((res) => {
        console.log(res.data)
        // 如果有登入
        if (res.data.Status) {
          // 7-15 關注中的會員資料+分頁 (JWT)
          this.$apiHelper
            .get(`api/users/login/followers/list/${this.routeUserId}/7/1`)
            .then((res) => {
              if (res.data.Status) {
                console.log(res.data)
                // 存新的 Token
                const getJwtToken = res.data.JwtToken
                localStorage.setItem('JwtToken', getJwtToken)
                const oriFollowersData = res.data.Data.Followers
                oriFollowersData.forEach((item) => {
                  // 頭貼路徑
                  const UserImgUrl = `${process.env.VUE_APP_USERIMG}/${item.Image}?2021`
                  item.UserImgUrl = UserImgUrl
                })
                this.getFollowersData = oriFollowersData
                console.log(this.getFollowersData)
              }
            })
        } else {
          console.log('沒有登入')
          // 如果沒登入
          // 接 7-5 關注中的會員資料+分頁
          this.$apiHelper
            .get(`api/users/followers/list/${this.routeUserId}/7/1`)
            .then((res) => {
              if (res.data.Status) {
                console.log(res.data)
                const oriFollowersData = res.data.Data.Followers
                oriFollowersData.forEach((item) => {
                  // 頭貼路徑
                  const UserImgUrl = `${process.env.VUE_APP_USERIMG}/${item.Image}?2021`
                  item.UserImgUrl = UserImgUrl
                })
                this.getFollowersData = oriFollowersData
                console.log(this.getFollowersData)
              }
            })
        }
      })
    }
  }
}
</script>
