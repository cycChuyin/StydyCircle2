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
        :class="{ active: open === 'unopinion' }"
        @click="open = 'unopinion'"
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
  <un-opinion v-else-if="open === 'unopinion'"></un-opinion>
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
      open: 'comingsoon',
      routeUserId: ''
    }
  },
  components: {
    comingSoon,
    unOpinion,
    hadFinished,
    hadCollected,
    hadDeleted
  },
  watch: {
    '$route.params.UserId': 'changePath'
  },
  created () {
    console.log(this.$route)

    const UserId = this.$route.params.UserId
    // 7-1 確認是否為本人瀏覽 (JWT)
    this.$apiHelper
      .get(`api/users/activity/attend/profile/status/${UserId}`)
      .then((res) => {
        this.userAttendObj = res.data
        console.log(this.userAttendObj)
      })
  },
  methods: {
    // 當路由變化時，更新資料
    changePath () {
      console.log(this.$route)
      this.routeUserId = this.$route.params.UserId
      // 7-1 確認是否為本人瀏覽 (JWT)
      this.$apiHelper
        .get(`api/users/activity/attend/profile/status/${this.routeUserId}`)
        .then((res) => {
          this.userAttendObj = res.data
          console.log(this.userAttendObj)
        })
    }
  }
}
</script>
