<template>
  <!-- <ul
    class="
      nav nav-pills nav-justified
      mb-32
      pb-3
      border-bottom border-secondary
    "
    id="pills-tab"
    role="tablist"
  >
    <li class="nav-item" role="presentation">
      <router-link
        to="/profile/my-activity/coming-soon"
        type="button"
        class="nav-link rounded-pill py-13 active"
        >即將到臨的活動</router-link
      >
    </li>
    <li
      class="nav-item"
      role="presentation"
      :class="{ 'd-none': !userAttendObj.Status }"
    >
      <router-link
        to="/profile/my-activity/un-opinion"
        type="button"
        class="nav-link rounded-pill py-13"
        >尚未評價的活動</router-link
      >
    </li>
    <li class="nav-item" role="presentation">
      <router-link
        to="/profile/my-activity/had-collected"
        type="button"
        class="nav-link rounded-pill py-13"
        >已收藏的活動</router-link
      >
    </li>
    <li class="nav-item" role="presentation">
      <router-link
        to="/profile/my-activity/had-finished"
        type="button"
        class="nav-link rounded-pill py-13"
        >已完成的活動</router-link
      >
    </li>
    <li class="nav-item" role="presentation">
      <router-link
        to="/profile/my-activity/had-deleted"
        type="button"
        class="nav-link rounded-pill py-13"
        >已取消的活動</router-link
      >
    </li>
  </ul>
  <router-view></router-view> -->
  <div>a</div>
</template>

<script>
export default {
  data () {
    return {
      userAttendObj: {}
    }
  },
  created () {
    console.log(this.$route)

    const UserId = this.$route.params.UserId
    // 7-1 確認是否為本人瀏覽 (JWT)
    this.$apiHelper
      .get(`api/users/activity/attend/profile/status/${UserId}`)
      .then((res) => {
        this.userAttendObj = res.data
        // if (res.data.Status) {
        //   console.log(res.data.Message)
        //   localStorage.setItem('JwtToken', getJwtToken)
        // } else {
        //   console.log(res.data.Message)
        //   const apiMessage = res.data.Message
        //   if (apiMessage === '非本人資料') {
        //     localStorage.setItem('JwtToken', getJwtToken)
        //     if (res.data.Following === true) {
        //       this.userAttendObj.Fallowed = '已追蹤'
        //     } else {
        //       this.userAttendObj.Fallowed = '追蹤我'
        //     }
        //   }
        // }
        console.log(this.userAttendObj)
      })
  }
}
</script>
