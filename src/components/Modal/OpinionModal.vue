<template>
  <!-- OpinionModal -->
  <div class="container">
    <div
      class="modal fade"
      id="review"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      ref="modal"
    >
      <div class="modal-dialog modal-dialog-xxl modal-dialog-centered">
        <div class="modal-content rounded-8">
          <div class="row">
            <div
              class="
                col-md-5
                px-7
                py-8
                bg-secondary
                text-white
                d-flex
                flex-column
                justify-content-between
                rounded-8 rounded-end-0
              "
            >
              <div class="info">
                <h3>
                  {{ emitOpinionInfo.Name }} -
                  {{ emitOpinionInfo.OrganizerName }}
                </h3>
                <div class="d-flex align-items-center">
                  <p>｜活動日期｜</p>
                  <p>
                    {{ emitOpinionInfo.transStartDate }}（{{
                      emitOpinionInfo.transDay
                    }}）
                  </p>
                </div>
                <div class="d-flex align-items-center">
                  <p>｜活動時間｜</p>
                  <p>
                    {{ emitOpinionInfo.transStartTime }} -
                    {{ emitOpinionInfo.transEndTime }}
                  </p>
                </div>
                <p>｜活動內容｜</p>
                <p>
                  {{ emitOpinionInfo.Summary }}
                </p>
              </div>
              <div class="row justify-content-end">
                <div class="col-4">
                  <router-link
                    @click="hideModal"
                    :to="`/activity-content/${emitOpinionInfo.ActivityId}`"
                    type="button"
                    class="btn btn-outline-light rounded-pill w-100"
                  >
                    查看詳情
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-md-7 ps-10 pe-7 py-8">
              <div class="modal-header p-0 border-secondary">
                <h5
                  class="modal-title pb-32 text-secondary fw-bold fs-2"
                  id="staticBackdropLabel"
                >
                  活動評價
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  @click="hideModal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body pt-40 px-0">
                <p class="text-secondary fs-4 fw-light">活動評分</p>
                <div class="d-flex align-items-center">
                  <span class="material-icons fs-1 text-primary me-1"
                    >star_rate</span
                  >
                  <span class="material-icons fs-1 text-primary me-1"
                    >star_rate</span
                  >
                  <span class="material-icons fs-1 text-primary me-1"
                    >star_rate</span
                  >
                  <span class="material-icons fs-1 text-primary me-1"
                    >star_rate</span
                  >
                  <span class="material-icons fs-1 text-primary"
                    >star_rate</span
                  >
                </div>
                <p class="text-secondary fs-4 fw-light pt-32">
                  活動評論<span class="fw-light fs-6 ms-3 text-dark"
                    >＊字數限制在200字以內，禁止留下冒犯性評論</span
                  >
                </p>
                <textarea
                  class="
                    form-control
                    bg-searchselect
                    border-0
                    rounded-4
                    text-dark
                  "
                  id="exampleFormControlTextarea1"
                  rows="10"
                  placeholder="留下你對活動的心得與評論吧 ..."
                  v-model="emitOpinionTemplate.Opinion"
                ></textarea>
                <div
                  class="errorMessenger text-danger d-flex mt-2"
                  :class="{ 'd-none': isCorrect }"
                >
                  <span class="material-icons fs-6 me-1"> error </span>
                  <p class="fs-8">{{ errorText }}</p>
                </div>
              </div>
              <div class="modal-footer p-0 border-0">
                <button
                  type="button"
                  class="btn btn-outline-secondary rounded-pill"
                  @click="hideModal"
                >
                  暫不評價
                </button>
                <button
                  type="button"
                  class="btn btn-secondary text-white rounded-pill"
                  @click="sendOpinion"
                >
                  送出評價
                </button>
              </div>
            </div>
          </div>
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
    parentOpinionInfo: {
      type: Object,
      // 重點 : 避免傳進來是空的陣列或是物件
      default: () => {}
    }
  },
  data () {
    return {
      modal: {},
      emitOpinionInfo: {},
      emitOpinionTemplate: {
        ActivityId: 0,
        Star: 5,
        Opinion: ''
      },
      isCorrect: true,
      errorText: ''
    }
  },
  // 每次傳送的資料都不同，需監聽內容有無變動
  watch: {
    parentOpinionInfo () {
      this.emitOpinionInfo = this.parentOpinionInfo
      this.emitOpinionTemplate.ActivityId = this.parentOpinionInfo.ActivityId
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },

    // 填寫活動評價
    sendOpinion () {
      console.log('我要準備送出評價了')
      const opinion = this.emitOpinionTemplate.Opinion
      if (opinion.length <= 0) {
        this.isCorrect = false
        this.errorText = '評價內容不得為空'
      } else if (opinion.length > 200) {
        this.isCorrect = false
        this.errorText = '超出字數限制'
      } else {
        // 7-13 填寫活動評價 (JWT)
        // POST 請求
        this.$apiHelper
          .post('api/users/activity/attend/opinion', this.emitOpinionTemplate)
          .then((res) => {
            if (res.data.Status) {
              // 存Token
              const getJwtToken = res.data.JwtToken
              localStorage.setItem('JwtToken', getJwtToken)
              console.log(res.data.Message)
              this.$emit('send-opinion')
              this.hideModal()
            } else {
              console.log(res.data.Message)
              this.isCorrect = false
              this.errorText = res.data.Message
            }
          })
      }
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
    console.log(this.emitOpinionTemplate)
    console.log(this.emitOpinionTemplate.ActivityId)
  }
}
</script>
