<template>
  <div>三個主題活動頁</div>
  <router-link :to="`/activity/online`">online</router-link>｜
  <router-link :to="`/activity/entity`">entity</router-link>｜
  <router-link :to="`/activity/workshop`">workshop</router-link>
  <router-view></router-view>
</template>
