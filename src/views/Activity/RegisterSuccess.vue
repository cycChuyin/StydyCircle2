<template>
  <div class="bg-searchselect">
    <!-- 報名成功資訊區塊 -->
    <div class="container">
      <div class="row justify-content-center py-10">
        <div class="col-xl-6 col-md-10 px-0">
          <p class="fs-9 text-center">
            <span class="material-icons">check_circle_outline</span>
          </p>
          <h2 class="text-secondary text-center mb-5">＼報名成功／</h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-6 col-md-9 px-0">
            <!-- 活動標題 -->
            <div class="d-md-flex justify-content-md-between">
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-xl-start justify-content-center
                "
              >
                <span
                  class="material-icons text-secondary me-2 d-none d-md-block"
                  >location_on</span
                >
                <p class="fs-4 text-secondary m-0 fw-light">
                  《新手貓奴必看》線上讀書會
                </p>
              </div>
              <div class="d-flex justify-content-center mt-md-0 mt-3">
                <button
                  type="button"
                  class="
                    btn btn-outline-secondary
                    rounded-pill
                    d-flex
                    align-items-center
                    fs-7
                    px-2
                    py-1
                  "
                >
                  <span class="material-icons text-secondary me-2 fs-6"
                    >print</span
                  >
                  列印報名資訊
                </button>
              </div>
            </div>
            <!-- 活動日期 -->
            <div class="d-md-flex justify-content-between mt-13">
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-xl-start justify-content-center
                  mt-md-0 mt-4
                "
              >
                <span
                  class="material-icons text-secondary me-2 d-none d-md-block"
                  >event_note</span
                >
                <p class="fs-4 text-secondary m-0 fw-light">
                  2021 / 12 / 23（四）15:00 - 18:00
                </p>
              </div>
              <div class="d-flex justify-content-center mt-md-0 mt-3">
                <button
                  type="button"
                  class="
                    btn btn-outline-secondary
                    rounded-pill
                    d-flex
                    align-items-center
                    fs-7
                    px-2
                    py-1
                  "
                >
                  <span class="material-icons text-secondary me-2 fs-6"
                    >event_note</span
                  >
                  新增至行事曆
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- 分隔線 -->
        <div class="row justify-content-center">
          <div class="col-xl-6 col-md-10 px-0">
            <hr class="dropdown-divider my-4 text-secondary" />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-6 col-md-10">
            <!-- 提醒事項區塊 -->
            <div class="text-secondary">
              <div class="d-flex">
                <span class="material-icons me-2">warning_amber</span>
                <p>提醒事項</p>
              </div>
              <ul class="p-0 fw-light">
                <li class="text-secondary d-flex">
                  <p class="me-2">-</p>
                  <p>
                    線上活動之連結將會傳送至您的電子信箱，若在活動開始前一天尚未收到，請聯絡線上客服，或來電聯絡我們。
                  </p>
                </li>
                <li class="text-secondary d-flex">
                  <p class="me-2">-</p>
                  <p>
                    活動開始的前 10 日如需取消報名，需酌收票價 10%
                    手續費。若在活動開始的 10
                    日內取消報名，恕無法退還所有報名費用。煩請各位參加者事先預留活動之時間，希望大家可以好好享受活動的樂趣。
                  </p>
                </li>
              </ul>
            </div>
            <!-- 分享區塊 -->
            <div class="row justify-content-center mb-5">
              <div class="col-md-9">
                <p class="text-center fs-4 text-secondary">
                  分享參加的活動給朋友吧！
                </p>
                <div class="row justify-content-center">
                  <div class="col-6">
                    <ul
                      class="list-unstyled d-flex justify-content-between m-0"
                    >
                      <li class="nav-item">
                        <a class="nav-link text-secondary p-0" href="#">
                          <i class="bi bi-facebook fs-2"></i>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-secondary p-0" href="#">
                          <i class="bi bi-instagram fs-2"></i>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-secondary p-0" href="#">
                          <i class="bi bi-facebook fs-2"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- 按鈕區塊 -->
            <div class="row justify-content-center">
              <div class="col-9">
                <div class="row">
                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="
                        btn btn-outline-secondary
                        rounded-pill
                        d-flex
                        justify-content-center
                        align-items-center
                        fs-6
                        py-2
                        w-100
                      "
                    >
                      <span class="material-icons text-secondary me-2"
                        >search</span
                      >
                      查看票券
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <router-link
                      to="/study-circle"
                      type="button"
                      class="
                        btn btn-outline-secondary
                        rounded-pill
                        d-flex
                        justify-content-center
                        align-items-center
                        fs-6
                        py-2
                        w-100
                        mt-sm-0 mt-3
                      "
                    >
                      <span class="material-icons text-secondary me-2"
                        >home</span
                      >
                      回到首頁
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
