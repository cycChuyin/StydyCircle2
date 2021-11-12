<template>
  <!-- Modal -->
  <!-- <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="opinionModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div> -->
  <!-- oldtemplate -->
  <div
    class="modal fade"
    id="review"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref="opinionModal"
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
              <h3>《新手貓奴必看》- 林小強</h3>
              <div class="d-flex align-items-center">
                <p>｜活動日期｜</p>
                <p>2021.12.23（四）</p>
              </div>
              <div class="d-flex align-items-center">
                <p>｜活動時間｜</p>
                <p>15:00 - 18:00</p>
              </div>
              <p>｜活動內容｜</p>
              <p>
                活動內容活動內容活動內容活動內容活動內容活動內容活動內容活動內容活動內容活動內容活動內容活動。
              </p>
            </div>
            <div class="row justify-content-end">
              <div class="col-4">
                <button
                  type="button"
                  class="btn btn-outline-light rounded-pill w-100"
                  data-bs-dismiss="modal"
                >
                  查看詳情
                </button>
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
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body pt-40 px-0">
              <p class="text-secondary fs-4 fw-light">活動評分</p>
              <div class="d-flex align-items-center">
                <span class="material-icons fs-1 text-searchselect me-1"
                  >star_rate</span
                >
                <span class="material-icons fs-1 text-searchselect me-1"
                  >star_rate</span
                >
                <span class="material-icons fs-1 text-searchselect me-1"
                  >star_rate</span
                >
                <span class="material-icons fs-1 text-searchselect me-1"
                  >star_rate</span
                >
                <span class="material-icons fs-1 text-searchselect"
                  >star_rate</span
                >
              </div>
              <p class="text-secondary fs-4 fw-light">
                活動評論<span class="fw-light fs-6 ms-3"
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
              >
留下你對活動的心得與評論吧 ...</textarea
              >
            </div>
            <div class="modal-footer p-0 border-0">
              <button
                type="button"
                class="btn btn-outline-secondary rounded-pill"
                data-bs-dismiss="modal"
              >
                暫不評價
              </button>
              <button
                type="button"
                class="btn btn-secondary text-white rounded-pill"
              >
                送出評價
              </button>
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
  data () {
    return {
      opinionModal: {}
    }
  },
  mothods: {
    showModal () {
      this.opinionModal.show()
    },
    hideModal () {
      this.opinionModal.hide()
    }
  },
  mounted () {
    this.opinionModal = new Modal(this.$refs.opinionModal)
  }
}
</script>
