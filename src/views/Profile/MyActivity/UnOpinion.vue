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
      <a
        href="#"
        class="
          btn btn-secondary
          rounded-pill
          d-flex
          align-items-center
          text-white
          fs-7
        "
        data-bs-toggle="modal"
        data-bs-target="#review"
      >
        <span class="material-icons me-2 fs-7">rate_review</span>
        我要評價
      </a>
      <!-- Modal -->
      <div
        class="modal fade"
        id="review"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
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
    </div>
  </div>
</template>
