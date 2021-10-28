<template>
  <div class="bg-searchselect">
    <div class="container">
      <div class="row justify-content-end py-10">
        <div class="col-md-6">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-online-studyCircle"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                線上讀書會
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-offline-studyCircle"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                實體讀書會
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-activity"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                活動工作坊
              </button>
            </li>
          </ul>
          <div class="tab-content text-secondary" id="pills-tabContent">
            <div
              class="tab-pane fade show active px-4 pt-3"
              id="pills-online-studyCircle"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <h3 class="fs-4 fw-bold mb-2">
                《原子習慣：細微改變帶來巨大成就的實證法則》
              </h3>
              <p class="mb-0">
                ｜日期：<span>2021.10.10（日）</span>｜時間：<span
                  >16:00 - 18:00</span
                >｜人數：<span>10人以內</span>
              </p>
              <p class="py-3">
                每天都進步1%，一年後，你會進步37倍；每天都退步1%，一年後，你會弱化到趨近於0！你的一點小改變、一個好習慣，將會產生複利效應，如滾雪球般，為你帶來豐碩的人生成果！一出版立刻風行全球，企業界、運動界、教育界、瘦身界都在用的習慣養成實作指南！
              </p>
              <div class="d-flex justify-content-md-end">
                <button
                  type="button"
                  class="btn btn-secondary rounded-pill text-white"
                >
                  立即參加
                </button>
              </div>
            </div>
            <div
              class="tab-pane fade px-4 pt-3"
              id="pills-offline-studyCircle"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <h3 class="fs-4 fw-bold mb-2">
                《原子習慣：細微改變帶來巨大成就的實證法則 1 》
              </h3>
              <p class="mb-0">
                ｜日期：<span>2021.10.10（日）</span>｜時間：<span
                  >16:00 - 18:00</span
                >｜人數：<span>10人以內</span>
              </p>
              <p class="py-3">
                每天都進步1%，一年後，你會進步37倍；每天都退步1%，一年後，你會弱化到趨近於0！你的一點小改變、一個好習慣，將會產生複利效應，如滾雪球般，為你帶來豐碩的人生成果！一出版立刻風行全球，企業界、運動界、教育界、瘦身界都在用的習慣養成實作指南！
              </p>
              <div class="d-flex justify-content-md-end">
                <button
                  type="button"
                  class="btn btn-secondary rounded-pill text-white"
                >
                  立即參加
                </button>
              </div>
            </div>
            <div
              class="tab-pane fade px-4 pt-3"
              id="pills-activity"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <h3 class="fs-4 fw-bold mb-2">
                《原子習慣：細微改變帶來巨大成就的實證法則 2 》
              </h3>
              <p class="mb-0">
                ｜日期：<span>2021.10.10（日）</span>｜時間：<span
                  >16:00 - 18:00</span
                >｜人數：<span>10人以內</span>
              </p>
              <p class="py-3">
                每天都進步1%，一年後，你會進步37倍；每天都退步1%，一年後，你會弱化到趨近於0！你的一點小改變、一個好習慣，將會產生複利效應，如滾雪球般，為你帶來豐碩的人生成果！一出版立刻風行全球，企業界、運動界、教育界、瘦身界都在用的習慣養成實作指南！
              </p>
              <div class="d-flex justify-content-md-end">
                <button
                  type="button"
                  class="btn btn-secondary rounded-pill text-white"
                >
                  立即參加
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
