<template>
  <div class="card h-100 rounded-4 shadow-card">
    <div class="position-relative">
      <img src="#" class="card-img-top rounded-top-4" alt="..." />
      <div class="card-img-overlay d-flex justify-content-between">
        <p class="card-text text-white">生活/寵物</p>
      </div>
      <div class="card-body p-3">
        <h5 class="card-title mb-2 p-0 fw-light fs-4">
          <a href="#" class="stretched-link text-secondary">《新手貓奴必看》</a>
        </h5>
        <div class="d-flex align-items-center mb-2">
          <div class="d-flex align-items-center">
            <span class="material-icons text-primary me-1">star_rate</span>
            <span class="material-icons text-primary me-1">star_rate</span>
            <span class="material-icons text-primary me-1">star_rate</span>
            <span class="material-icons text-primary me-1">star_rate</span>
            <span class="material-icons text-primary">star_rate</span>
          </div>
          <p class="text-gray m-0 ps-2">5/5 (25則評論)</p>
        </div>
        <p class="text-secondary mb-4">
          <span class="pe-13">2021.01.16</span>｜<span class="px-13"
            >14:00 - 18:00</span
          >｜<span class="ps-13">haha</span>
        </p>
        <div
          class="
            card-footer
            border-0
            bg-transparent
            p-0
            d-flex
            justify-content-between
            align-items-end
          "
        >
          <p class="text-secondary fs-8 m-0">3人參加 ｜ 1人收藏</p>
          <!-- <p class="text-secondary fs-4 m-0">NT$ {{ item.Price }}</p> -->
        </div>
      </div>
    </div>
    <div
      class="
        card-footer
        mx-3
        px-0
        py-3
        border-top border-secondary
        bg-transparent
        d-flex
        justify-content-end
      "
    >
      <!-- Button trigger modal -->
      <button
        href="#"
        class="
          btn btn-secondary
          rounded-pill
          d-flex
          align-items-center
          text-white
          fs-7
        "
        type="button"
      >
        <span class="material-icons me-2 fs-7">rate_review</span>
        我要評價
      </button>
    </div>
  </div>
  <opinion-modal ref="opinionModal"></opinion-modal>
</template>

<script>
// import opinionModal from '../../../components/Activity/OpinionModal.vue'
export default {
  data () {
    return {
      opinionObj: {
        ActivityId: 18,
        Star: 5,
        Opinion: '蒸蚌!抄蚌的!'
      }
    }
  },
  components: {
    // opinionModal
  },
  method: {
    sendOpinion () {
      console.log('我要準備送出評價了')
      // 7-13 填寫活動評價 (JWT)
      // POST 請求
      const Token = localStorage.getItem('JwtToken')
      console.log(Token)
      if (Token) {
        this.$apiHelper
          .post('api/users/activity/attend/opinion', this.opinionObj)
          .then((res) => {
            if (res.data.Status) {
              const getJwtToken = res.data.JwtToken
              localStorage.setItem('JwtToken', getJwtToken)
              // 這個跳轉頁面還不確定，因為目前是彈跳視窗
              this.$route.push('/profile/my-activity/un-opinion')
              console.log('已送出評價')
            }
          })
      }
    }
  }
}
</script>
