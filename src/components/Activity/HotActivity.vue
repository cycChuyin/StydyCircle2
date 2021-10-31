<template>
  <div class="bg-searchselect">
    <div class="container">
      <div class="row justify-content-end py-10">
        <div class="col-md-6">
          <img :src="HotOnlineActivity.Image" />
        </div>
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
                {{ HotOnlineActivity.Name }}
              </h3>
              <p class="mb-0">
                ｜日期：<span>2021.10.10（日）</span> ｜時間：<span
                  >16:00 - 18:00</span
                >
                ｜人數：<span>{{ HotOnlineActivity.LimitNumber }} 人以內</span>
              </p>
              <p class="py-3">
                {{ HotOnlineActivity.Summary }}
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
                {{ HotEntityActivity.Name }}
              </h3>
              <p class="mb-0">
                ｜日期：<span>2021.10.10（日）</span> ｜時間：<span
                  >16:00 - 18:00</span
                >
                ｜人數：<span>{{ HotEntityActivity.LimitNumber }} 人以內</span>
              </p>
              <p class="py-3">
                {{ HotEntityActivity.Summary }}
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
                {{ HotWorkShop.Name }}
              </h3>
              <p class="mb-0">
                ｜日期：<span>2021.10.10（日）</span> ｜時間：<span
                  >16:00 - 18:00</span
                >
                ｜人數：<span>{{ HotWorkShop.LimitNumber }} 人以內</span>
              </p>
              <p class="py-3">
                {{ HotWorkShop.Summary }}
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

<script>
import splitDateString from '@/components/SpiltDateString.vue'

export default {
  components: splitDateString,
  data () {
    return {
      HotOnlineActivity: {
        Id: '',
        Name: '書名',
        Image: 'Image',
        ActivityStartDate: 'ActivityStartDate',
        ActivityEndDate: 'ActivityEndDate',
        LimitNumber: '人數',
        Summary: 'brief',
        newActivityStartDate: [],
        newActivityEndDate: []
      },
      HotEntityActivity: {},
      HotWorkShop: {}
    }
  },
  methods: {
    getHotActivityData () {
      // const api = `${process.env.VUE_APP_API}/activities/top-views`
      this.$apiHelper.get('api/activities/top-views').then((res) => {
        this.HotOnlineActivity = res.data.HotOnlineActivity
        this.HotEntityActivity = res.data.HotEntityActivity
        this.HotWorkShop = res.data.HotWorkShop
      })
    },
    splitDateString (stringToSplit, separator) {
      const arrayOfStrings = stringToSplit.split(separator)
      console.log(arrayOfStrings)
      console.log(arrayOfStrings.length)
    }
  },
  created () {
    this.getHotActivityData()
  }
}
</script>
