<template>
  <ul class="nav nav-pills mb-32 pb-3 border-bottom border-secondary">
    <li class="nav-item" role="presentation">
      <button
        type="button"
        class="nav-link rounded-pill py-13"
        :class="{ active: open === 'following' }"
        @click="open = 'following'"
      >
        關注中
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        type="button"
        class="nav-link rounded-pill py-13"
        :class="{ active: open === 'follower' }"
        @click="open = 'follower'"
      >
        追蹤者
      </button>
    </li>
  </ul>
  <following v-if="open === 'following'"></following>
  <follower v-else-if="open === 'follower'"></follower>
</template>

<script>
import following from '@/components/Profile/StudyPartner/Following.vue'
import follower from '@/components/Profile/StudyPartner/Follower.vue'
export default {
  data () {
    return {
      open: 'following'
    }
  },
  components: {
    following,
    follower
  }
}
</script>
