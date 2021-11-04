<template>
  <!-- 摺疊卡片 -->
  <div class="px-13 py-32">
    <ul class="row row-cols-1 list-unstyled">
      <!-- <template> -->
      <li class="col mb-4">
        <div class="card text-secondary fw-light border-secondary rounded-7">
          <img
            src="@/assets/photo/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg"
            alt="..."
            class="card-img-top rounded-7 rounded-bottom-0"
            style="height:220px;"
            v-if="isCollapse"
          />
          <div class="row g-0" v-else>
            <div class="col-md-4">
              <img
                src="@/assets/photo/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg"
                alt="..."
                class="card-img-top rounded-7 rounded-end-0"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title fw-light fs-4 mb-2">
                  《新手貓奴必看》- 林小強
                </h5>
                <p class="card-text mb-2">2021/12/23（四）15:00 - 18:00</p>
                <p class="card-text mb-3">
                  活動簡介活動簡介活動簡介活動簡介活動簡介活動簡介活動簡介活動簡介活動簡介活動簡介。
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="card-text fs-7 m-0">
                    <span class="material-icons fs-6">favorite_border</span>
                    已有 14 人參加
                  </p>
                  <button
                    class="
                      btn btn-outline-secondary
                      rounded-pill
                      d-flex
                      align-items-center
                    "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="false"
                    aria-controls="collapse1"
                    @click="changeTopImg"
                  >
                    查看票券
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="collapse" id="collapse1">
            <div class="card-body border-top border-dark p-5">
              <h6 class="fs-4 text-secondary mb-3">
                《新手貓奴必看》 - 林小強
              </h6>
              <p class="fw-light text-secondary m-0">
                活動簡介活動簡介活動簡介活動簡介活動簡介活動簡介活動簡介活動簡介活動簡介活動簡介。
              </p>
              <div class="py-32 border-bottom border-secondary">
                <p class="fw-light text-secondary mb-3">
                  進行方式｜線上讀書會 - zoom
                </p>
                <p class="fw-light text-secondary mb-3">
                  活動日期｜2021 / 12 / 23 （四）
                </p>
                <p class="fw-light text-secondary mb-3">
                  活動時間｜15:00 - 18:00
                </p>
                <p class="fw-light text-secondary mb-3">活動費用｜$ 100</p>
                <p class="fw-light text-secondary">
                  活動連結｜https://www.zoom.com/1234567
                </p>
              </div>
              <div class="pt-4 pb-8">
                <p class="fw-normal text-secondary mb-2">注意事項</p>
                <p class="fw-light text-secondary mb-24">
                  煩請在活動開始前先自行下載及註冊
                  Zoom，以免影響活動進行。為了維持活動之品質，倘若遲到 30
                  分鐘即代表放棄活動資格，並不會退還活動之費用，敬請大家互相配合！
                </p>
                <p class="fw-normal text-secondary mb-2">取消規則</p>
                <p class="fw-light text-secondary mb-24">
                  若於報名 7 日內取消報名，將可取回活動費用總額之
                  50%。若在報名完成之 7
                  日後取消報名，恕無法退還所有報名費用。煩請各位參加者事先預留活動之時間，希望大家可以好好享受活動的樂趣。
                </p>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="card-text fs-7 m-0">
                  <span class="material-icons fs-6">favorite_border</span>
                  已有 14 人參加
                </p>
                <div class="d-flex">
                  <button
                    class="
                      btn btn-outline-secondary
                      rounded-pill
                      d-flex
                      align-items-center
                    "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="false"
                    aria-controls="collapse1"
                    @click="changeTopImg"
                  >
                    收回展開
                  </button>
                  <button
                    class="
                      btn btn-outline-secondary
                      rounded-pill
                      d-flex
                      align-items-center
                      ms-3
                    "
                    type="button"
                  >
                    取消報名
                  </button>
                  <button
                    class="
                      btn btn-outline-secondary
                      rounded-pill
                      d-flex
                      align-items-center
                      ms-3
                    "
                    type="button"
                  >
                    查看詳情
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <!-- </template> -->
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    changeTopImg () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
