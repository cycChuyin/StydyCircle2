<template>
  <ul
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
    <li class="nav-item" role="presentation">
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
    <router-view></router-view>
</template>
