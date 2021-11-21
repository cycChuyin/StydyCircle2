<template>
  <!-- CancleRegisterModal 取消報名-->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered px-md-0 px-4">
      <div class="modal-content rounded-6 px-sm-8 py-5 px-5">
        <div class="modal-header border-0 d-flex justify-content-center">
          <h5
            class="modal-title text-center text-dark fs-4 fw-bold mb-32"
            id="exampleModalLabel"
          >
            確定取消報名？
          </h5>
        </div>
        <div class="modal-body text-dark">
          <p class="lh-4">你要取消的活動如下：</p>
          <p class="lh-4 fw-light">
            活動｜<span
              >{{ emitCommingInfo.Name }} -
              {{ emitCommingInfo.OrganizerName }}</span
            >
          </p>
          <p class="lh-4 fw-light">
            日期｜<span
              >{{ emitCommingInfo.transStartDate }} （{{
                emitCommingInfo.transDay
              }}）</span
            >
          </p>
          <p class="lh-4 fw-light">
            時間｜<span
              >{{ emitCommingInfo.transStartTime }} -
              {{ emitCommingInfo.transEndTime }}</span
            >
          </p>
          <p class="lh-4 fw-light">
            費用｜<span>＄{{ emitCommingInfo.Price }}</span>
          </p>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input rounded-0 border-dark rounded-1"
              id="rule"
              ref="cancleRule"
              @click="checkAgreeBtn"
            />
            <label class="form-check-label fs-7" for="rule">
              我已詳閱並同意平台之取消條款，得悉於報名 7
              日內取消報名，將可取回活動費用總額之 50%。若在報名完成之 7
              日後取消報名，活動費用將無法退還。
            </label>
          </div>
          <!-- 有無勾選，如果沒有擇題是要先閱讀過同意 -->
          <div
            class="errorMessenger text-danger d-flex mt-2"
            :class="{ 'd-none': isCheck }"
          >
            <span class="material-icons fs-6 me-1"> error </span>
            <p class="fs-8">請閱讀取消條款</p>
          </div>
        </div>
        <div class="border-0 d-flex">
          <button
            type="button"
            class="btn btn-searchselect text-dark rounded-8 w-50 me-4"
            @click="cancleRegister"
          >
            確定取消
          </button>

          <button
            type="button"
            class="btn btn-dark text-white rounded-8 w-50"
            @click="hideModal"
          >
            保留票券
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  // 接收父層傳送來的 Data
  props: {
    comming: {
      type: Object,
      // 重點 : 避免傳進來是空的陣列或是物件
      default: () => {}
    }
  },
  data () {
    return {
      modal: {},
      emitCommingInfo: {},
      isCheck: true
    }
  },
  // 每次傳送的資料都不同，需監聽內容有無變動
  watch: {
    comming () {
      this.emitCommingInfo = this.comming
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    cancleRegister () {
      // 取得 checkbox 的 DOM
      // 查看有無勾選狀態
      const cancleStatus = this.$refs.cancleRule.checked
      if (cancleStatus === true) {
        this.$emit('deleted-register', this.emitCommingInfo.ActivityId)
      } else {
        this.isCheck = false
      }
    },
    // 檢查是否有勾選同意
    checkAgreeBtn () {
      if (this.isCheck === false) {
        this.isCheck = true
      }
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
    console.log(this.emitCommingData)
  }
}
</script>
