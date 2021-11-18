<template>
  <!-- AuthMailModal -->
  <!-- popUp - 設定完成視窗  -->
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div
        class="
          modal-content
          px-8
          py-5
          rounded-4
          position-relative
          shadow-sm
          p-3
          mb-5
          bg-body
          rounded
        "
      >
        <router-link
          to="/study-circle"
          type="button"
          class="btn-close position-absolute top-29 end-29"
          @click="hideModal()"
          aria-label="Close"
        >
        </router-link>
        <p class="fs-4 text-secondary mb-4 text-center">恭喜您成功註冊會員！</p>
        <p class="text-secondary mb-4">
          系統已發送驗證信至您的信箱，請至電子信箱驗證信箱以啟用會員資格，方可享有參加活動之權利。
        </p>
        <router-link
          to="/study-circle"
          type="button"
          class="btn btn-secondary rounded-pill text-white py-13"
          @click="hideModal()"
        >
          回到首頁
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      modal: {}
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
    // this.$refs.modal.show()
  }
}
</script>
