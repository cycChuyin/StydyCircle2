<template>
  <ul
    class="
      nav nav-pills nav-justified
      mb-32
      pb-3
      border-bottom border-secondary
    "
  >
    <li class="nav-item" role="presentation">
      <button
        type="button"
        class="nav-link rounded-pill py-13"
        :class="{ active: open === 'comingsoon' }"
        @click="open = 'comingsoon'"
      >
        即將到臨的活動
      </button>
    </li>
    <li
      class="nav-item"
      role="presentation"
      :class="{ 'd-none': !userAttendObj.Status }"
    >
      <button
        type="button"
        class="nav-link rounded-pill py-13"
        :class="{ active: open === 'unopion' }"
        @click="open = 'unopion'"
      >
        尚未評價的活動
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        type="button"
        class="nav-link rounded-pill py-13"
        :class="{ active: open === 'collected' }"
        @click="open = 'collected'"
      >
        已收藏的活動
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        type="button"
        class="nav-link rounded-pill py-13"
        :class="{ active: open === 'finished' }"
        @click="open = 'finished'"
      >
        已完成的活動
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        type="button"
        class="nav-link rounded-pill py-13"
        :class="{ active: open === 'deleted' }"
        @click="open = 'deleted'"
      >
        已取消的活動
      </button>
    </li>
  </ul>
  <coming-soon v-if="open === 'comingsoon'"></coming-soon>
  <un-opinion v-else-if="open === 'unopion'"></un-opinion>
  <had-collected v-else-if="open === 'collected'"></had-collected>
  <had-finished v-else-if="open === 'finished'"></had-finished>
  <had-deleted v-else-if="open === 'deleted'"></had-deleted>
</template>

<script>
import comingSoon from '@/components/Profile/MyActivity/ComingSoon.vue'
import unOpinion from '@/components/Profile/MyActivity/UnOpinion.vue'
import hadFinished from '@/components/Profile/MyActivity/HadFinished.vue'
import hadCollected from '@/components/Profile/MyActivity/HadCollected.vue'
import hadDeleted from '@/components/Profile/MyActivity/HadDeleted.vue'

export default {
  props: ['UserId'],
  data () {
    return {
      userAttendObj: {},
      open: 'comingsoon'
    }
  },
  components: {
    comingSoon,
    unOpinion,
    hadFinished,
    hadCollected,
    hadDeleted
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
