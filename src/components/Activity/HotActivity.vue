<template>
  <div class="bg-searchselect">
    <div class="container">
      <div class="row justify-content-end py-10">
        <div class="col-md-6">
          <img :src="HotOnlineActivity.Image" ref="bannerImage" />
        </div>
        <div class="col-md-6">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li
              class="nav-item"
              role="presentation"
              ref="HotOnline"
              @click="inputEvent"
            >
              <button
                class="nav-link active"
                id="pills-HotOnline"
                data-bs-toggle="pill"
                data-bs-target="#pills-HotOnline"
                type="button"
                role="tab"
                aria-controls="pills-HotOnline"
                aria-selected="true"
              >
                線上讀書會
              </button>
            </li>
            <li class="nav-item" role="presentation" @click="inputEvent">
              <button
                class="nav-link"
                id="pills-HotEntity"
                data-bs-toggle="pill"
                data-bs-target="#pills-HotEntity"
                type="button"
                role="tab"
                aria-controls="pills-HotEntity"
                aria-selected="false"
              >
                實體讀書會
              </button>
            </li>
            <li class="nav-item" role="presentation" @click="inputEvent">
              <button
                class="nav-link"
                id="pills-HotWorkShop"
                data-bs-toggle="pill"
                data-bs-target="#pills-HotWorkShop"
                type="button"
                role="tab"
                aria-controls="pills-HotWorkShop"
                aria-selected="false"
              >
                活動工作坊
              </button>
            </li>
          </ul>
          <div class="tab-content text-secondary" id="pills-tabContent">
            <div
              class="tab-pane fade show active px-4 pt-3"
              id="pills-HotOnline"
              role="tabpanel"
              aria-labelledby="pills-HotOnline-tab"
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
              id="pills-HotEntity"
              role="tabpanel"
              aria-labelledby="pills-HotEntity-tab"
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
              id="pills-HotWorkShop"
              role="tabpanel"
              aria-labelledby="pills-HotWorkShop-tab"
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

        const imgUrl = `${process.env.VUE_APP_IMG}`
        this.HotOnlineActivity.Image = `${imgUrl}/${this.HotOnlineActivity.Image}`
        this.HotEntityActivity.Image = `${imgUrl}/${this.HotEntityActivity.Image}`
        this.HotWorkShop.Image = `${imgUrl}/${this.HotWorkShop.Image}`
      })
    },
    splitDateString (stringToSplit, separator) {
      const arrayOfStrings = stringToSplit.split(separator)
      console.log(arrayOfStrings)
      console.log(arrayOfStrings.length)
    }
    // inputEvent (e) {
    //   console.log(e.target.id)
    //   const id = e.target.id
    //   const imgUrl = `${process.env.VUE_APP_IMG}`
    //   if (id === 'pills-HotOnline') {
    //     this.bannerImage = `${imgUrl}/${this.HotOnlineActivity.Image}`
    //   } else if (id === 'pills-HotEntity') {
    //     this.bannerImage = `${imgUrl}/${this.HotEntityActivity.Image}`
    //   } else if (id === 'pills-HotWorkShop') {
    //     this.bannerImage = `${imgUrl}/${this.HotWorkShop.Image}`
    //   }
    // }
  },
  created () {
    this.getHotActivityData()
  },
  mounted () {
    console.log(this.$refs, this.$refs.bannerImage)
  }
}
</script>
