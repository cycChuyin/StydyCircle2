<template>
  <!-- banner -->
  <div
    class="banner pt-10"
    :style="{ backgroundImage: 'url(' + getActivityInfo.Image + ')' }"
    style="background-size:cover;"
  >
    <div class="container">
      <div class="row">
        <div class="col-xxl-5 col-6 py-8">
          <div class="activityBrief">
            <p class="fs-1 text-light fw-bold">
              {{ getActivityInfo.Name }}
            </p>
          </div>

          <p class="contentTextShadow text-light fw-nomal fs-4">
            {{ getActivityInfo.Summary }}
          </p>
          <p class="fs-6 text-light contentTextShadow">
            {{ getActivityInfo.transStartDate }} （{{
              getActivityInfo.transDay
            }}） {{ getActivityInfo.transStartTime }} -
            {{ getActivityInfo.transEndTime }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- 畫布 - offcanvas -->
  <div
    class="offcanvas offcanvas-end py-4"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
    data-bs-scroll="true"
    ref="offcanvas"
  >
    <div class="offcanvas-header border-bottom border-dark px-5">
      <h6 id="offcanvasRightLabel" class="text-dark fs-2 fw-bold">報名資訊</h6>
      <button
        type="button"
        class="btn-close text-reset"
        @click="hideOffcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body px-5">
      <!-- loading 讀取效果 -->
      <loading :active="isRegisterLoading"></loading>

      <form @submit.prevent="sendApply">
        <div class="py-5">
          <div class="row">
            <div class="col-6">
              <p class="text-dark">活動資訊</p>
              <ul class="list-unstyled">
                <li class="text-dark mb-2">
                  活動名稱｜{{ getActivityInfo.Name }}
                </li>
                <li class="text-dark mb-2">
                  活動類型｜{{ getActivityInfo.ActivityType }}
                </li>
                <li class="text-dark mb-2">
                  視訊軟體｜{{ getActivityInfo.Software }}
                </li>
                <li class="text-dark mb-2">
                  活動日期｜{{ getActivityInfo.transStartDate }} （{{
                    getActivityInfo.transDay
                  }})
                </li>
                <li class="text-dark mb-2">
                  活動時間｜{{ getActivityInfo.transStartTime }} -
                  {{ getActivityInfo.transEndTime }}
                </li>
                <li class="text-dark mb-2">
                  活動費用｜${{ getActivityInfo.Price }}
                </li>
              </ul>
            </div>
            <div class="col-6 border-start border-dark">
              <div
                class="
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                "
              >
                <ul class="list-unstyled">
                  <li>
                    <p class="text-dark text-start">參加人資訊</p>
                  </li>
                  <li class="text-dark mb-3">
                    <label for="name" class="form-label">姓名</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="
                          form-control-darkGray
                          rounded-pill
                          position-relative
                          ps-3
                        "
                        id="name"
                        placeholder="陳小明"
                        v-model="getUsersAttendData.Name"
                      />
                    </div>
                  </li>
                  <li class="text-dark mb-3">
                    <label for="cellphone" class="form-label">電話號碼</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="
                          form-control-darkGray
                          rounded-pill
                          position-relative
                          ps-3
                        "
                        id="cellphone"
                        placeholder="0912-345-678"
                        v-model="getUsersAttendData.MobilePhone"
                      />
                    </div>
                  </li>
                  <li class="text-dark disabled">
                    <label for="email" class="form-label">電子信箱</label>
                    <div class="input-group">
                      <input
                        type="email"
                        class="
                          form-control-darkGray
                          rounded-pill
                          position-relative
                          ps-3
                        "
                        id="email"
                        placeholder="chansiuming@email.com"
                        disabled
                        v-model="getUsersAttendData.Account"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p class="border border-dark mb-32 w-100 py-2 text-center text-dark">
          <span class="me-2">總計</span> NT$ {{ getActivityInfo.Price }}
        </p>
        <!-- 注意事項 -->
        <p class="text-dark mb-3">注意事項</p>
        <p class="text-dark mb-3">
          煩請在活動開始前先自行下載及註冊
          Zoom，以免影響活動進行。為了維持活動之品質，倘若遲到 30
          分鐘即代表放棄活動資格，敬請大家互相配合！
        </p>
        <p class="text-dark mb-3">取消規則</p>
        <p class="text-dark">
          若於報名 7 日內取消報名，將可取回活動費用總額之 50%。若在報名完成之 7
          日後取消報名，恕無法退還所有報名費用。煩請各位參加者事先預留活動之時間，希望大家可以好好享受活動的樂趣。
        </p>
        <!-- 按鈕 -->
        <div class="d-flex" :class="{ 'd-none': !isSuccessPay }">
          <button
            type="button"
            class="btn btn-outline-dark rounded-pill w-100 py-13 fs-4"
            @click="hideOffcanvas"
          >
            取消
          </button>
          <button
            type="submit"
            class="btn btn-dark rounded-pill w-100 py-13 fs-4"
          >
            確認報名
          </button>
        </div>
      </form>
      <!-- 藍新金流區塊 -->
      <form
        name="Newebpay"
        method="post"
        action="https://ccore.newebpay.com/MPG/mpg_gateway"
      >
        <!-- 設定 hidden 可以隱藏不用給使用者看的資訊 -->
        <!-- 藍新金流商店代號 -->
        <input
          type="hidden"
          id="MerchantID"
          name="MerchantID"
          :value="getPaymentData.MerchantID"
        />
        <!-- 交易資料透過 Key 及 IV 進行 AES 加密 -->
        <input
          type="hidden"
          id="TradeInfo"
          name="TradeInfo"
          :value="getPaymentData.TradeInfo"
        />
        <!-- 經過上述 AES 加密過的字串，透過商店 Key 及 IV 進行 SHA256 加密 -->
        <input
          type="hidden"
          id="TradeSha"
          name="TradeSha"
          :value="getPaymentData.TradeSha"
        />
        <!-- 串接程式版本 -->
        <input
          type="hidden"
          id="Version"
          name="Version"
          :value="getPaymentData.Version"
        />

        <!-- 按鈕 -->
        <div class="d-flex" :class="{ 'd-none': isSuccessPay }">
          <button
            type="button"
            class="btn btn-outline-dark rounded-pill w-100"
            @click="hideOffcanvas"
          >
            取消
          </button>
          <!-- 直接執行送出 -->
          <input
            type="submit"
            value="確認付款"
            class="btn btn-dark rounded-pill w-100"
          />
        </div>
      </form>
    </div>
  </div>
  <!-- main  -->
  <div class="bg-secondary pt-5">
    <div class="container">
      <!-- loading 元件 -->
      <loading :active="isActivityLoading" :is-full-page="fullPage"></loading>

      <!-- 活動詳情 - 標題區塊 -->
      <h2 class="text-dark fw-bold mb-4">
        <!-- {{ getActivityInfo.ActivityType }} - {{ getActivityInfo.Name }} -->
        {{ getActivityInfo.ActivityType }} - 活動詳情
      </h2>
      <div class="d-flex">
        <!-- 未收藏時的按鈕狀態 -->
        <button
          type="button"
          class="
            btn btn-outline-dark
            rounded-pill
            d-flex
            align-items-center
            me-3
          "
          :class="{ 'd-none': isCollected }"
          @click="changeCollect(getActivityInfo.Id)"
        >
          <span class="material-icons me-2">bookmark_border</span>收藏活動
        </button>
        <!-- 已收藏時的按鈕狀態 -->
        <button
          type="button"
          class="
            btn btn-dark
            rounded-pill
            text-white
            d-flex
            align-items-center
            me-3
          "
          :class="{ 'd-none': !isCollected }"
          @click="changeCollect(getActivityInfo.Id)"
        >
          <span class="material-icons me-2">bookmark</span>已收藏
        </button>
        <!-- 立即參加的按鈕狀態 -->
        <button
          type="button"
          class="
            btn btn-dark
            rounded-pill
            text-white
            d-flex
            align-items-center
          "
          @click="joinRightNow"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          :class="{ 'd-none': hadRegister }"
        >
          <span class="material-icons me-2">arrow_forward</span>立即參加
        </button>
        <!-- 5-2 活動頁_活動詳情_成功報名 -->
        <button
          type="button"
          class="
            btn btn-dark
            nav-link
            rounded-pill
            text-white
            d-flex
            align-items-center
            disabled
          "
          :class="{ 'd-none': unRegister }"
        >
          <span class="material-icons me-2">check_circle_outline</span>成功報名
        </button>
        <!-- 5-3 活動頁_活動詳情_已結束 -->
        <!-- <button
          type="button"
          class="
            btn btn-primary
            nav-link
            rounded-pill
            text-dark
            d-flex
            align-items-center
          "
        >
          <span class="material-icons me-2">rate_review</span>查看評價
        </button>
        <div class="position-relative">
          <div class="talkbubble"></div>
          <p class="text-dark m-0 position-absolute top-8 start-24">
            ＼ 感謝支持，活動已結束囉 /
          </p>
        </div> -->
      </div>
      <!-- 活動內文區塊 -->
      <div class="row py-5 justify-content-between">
        <!-- 左邊區塊 -->
        <div class="col-xl-7 col-md-12">
          <h3 class="text-dark fs-4">活動內容</h3>
          <p class="text-dark lh-base">
            {{ getActivityInfo.ContentText }}
          </p>
          <h3 class="text-dark mt-32 mb-3 fs-4">報名流程</h3>
          <div class="row">
            <div class="col-8">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <p class="text-dark m-0 fw-light">開始</p>
                <div class="line border border-dark px-3"></div>
                <p class="text-dark m-0 fw-light">結束</p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div class="start">
                  <p class="text-dark mb-1">
                    {{ getActivityInfo.transStartDate }}
                  </p>
                  <p class="text-dark m-0">
                    {{ getActivityInfo.transStartTime }}
                  </p>
                </div>
                <div class="end">
                  <p class="text-dark mb-1">
                    {{ getActivityInfo.transEndDate }}
                  </p>
                  <p class="text-dark mb-1">
                    {{ getActivityInfo.transEndTime }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h3 class="text-dark mt-32 mb-3 fs-4">主辦單位</h3>
          <p class="text-dark mb-1">{{ getActivityInfo.OrganizerName }}</p>
          <p class="text-dark mb-1">{{ getActivityInfo.OrganizerPhone }}</p>
          <a :href="getOrganizerInfo.OrganizerMail" class="text-dark mb-1">{{
            getActivityInfo.OrganizerMail
          }}</a>
          <h3 class="text-dark mt-32 mb-3 fs-4">活動備註</h3>
          <p class="text-dark mb-32">
            {{ getActivityInfo.PleaseNote }}
          </p>
          <p class="text-dark pt-32 border-top border-dark">
            已有 {{ getActivityInfo.ApplicantNumber }} 人參加｜{{
              getActivityInfo.CollectNumber
            }}
            人收藏
          </p>
          <div class="d-flex">
            <!-- 未收藏時的按鈕狀態 -->
            <button
              type="button"
              class="
                btn btn-outline-dark
                rounded-pill
                d-flex
                align-items-center
                me-3
              "
              :class="{ 'd-none': isCollected }"
              @click="changeCollect(getActivityInfo.Id)"
            >
              <span class="material-icons me-2">bookmark_border</span>收藏活動
            </button>
            <!-- 已收藏時的按鈕狀態 -->
            <button
              type="button"
              class="
                btn btn-outline-dark
                rounded-pill
                d-flex
                align-items-center
                me-3
              "
              :class="{ 'd-none': !isCollected }"
              @click="changeCollect(getActivityInfo.Id)"
            >
              <span class="material-icons me-2 text-dark">bookmark</span>已收藏
            </button>
            <button
              type="button"
              class="
                btn btn-dark
                text-white
                rounded-pill
                d-flex
                align-items-center
              "
              @click="joinRightNow"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              :class="{ 'd-none': hadRegister }"
            >
              <span class="material-icons me-2">arrow_forward</span>立即參加
            </button>
            <!-- 5-2 活動頁_活動詳情_成功報名 -->
            <button
              type="button"
              class="
                btn btn-dark
                rounded-pill
                text-white
                d-flex
                align-items-center
                disabled
              "
              :class="{ 'd-none': unRegister }"
            >
              <span class="material-icons me-2">check_circle_outline</span
              >成功報名
            </button>
            <!-- 5-3 活動頁_活動詳情_已結束 -->
            <!-- <button
              type="button"
              class="
                btn btn-primary
                nav-link
                rounded-pill
                text-dark
                d-flex
                align-items-center
              "
            >
              <span class="material-icons me-2">rate_review</span>查看評價
            </button> -->
          </div>
        </div>
        <!-- 右邊區塊 -->
        <div class="col-xl-4 col-md-12">
          <div class="bg-searchselect p-40 rounded-4 text-dark mb-5">
            <div class="d-flex justify-content-between">
              <p class="text-dark fw-bold fs-4">
                {{ getActivityInfo.transStartDate }}
              </p>
              <p class="text-dark fw-bold fs-4">
                星期{{ getActivityInfo.transDay }}
              </p>
            </div>
            <div class="d-flex justify-content-between align-items-center m-0">
              <p class="text-dark fw-light fs-4 mb-0">
                {{ getActivityInfo.transStartTime }}
              </p>
              <div class="line-sm border border-dark"></div>
              <p class="text-dark fw-light fs-4 mb-0">
                {{ getActivityInfo.transEndTime }}
              </p>
            </div>
            <h4 class="mt-32 mb-3 fw-bold fs-3">{{ getActivityInfo.Name }}</h4>
            <p class="fw-light">費用：{{ getActivityInfo.Price }} / 人</p>
            <p class="fw-light">線上：{{ getActivityInfo.Software }}</p>
            <p class="fw-light">實體：台南市幸福區快樂街 123 號 2 樓</p>
          </div>

          <div class="bg-searchselect p-40 rounded-4 text-dark">
            <div class="d-flex align-items-center mb-4">
              <router-link :to="`/profile/my-activity/${getOrganizerInfo.Id}`">
                <img
                  :src="getOrganizerInfo.Image"
                  alt="memberPhoto"
                  class="rounded-pill memberPhoto-56 me-4"
                />
              </router-link>
              <router-link :to="`/profile/my-activity/${getOrganizerInfo.Id}`">
                <p class="m-0 fw-bold">
                  {{ getOrganizerInfo.Name }} ｜ {{ getOrganizerInfo.NickName }}
                </p>
              </router-link>
            </div>
            <p>
              {{ getOrganizerInfo.AboutMe }}
            </p>
            <div class="d-flex border-top border-dark pt-3">
              <a :href="getOrganizerInfo.FacebookLink"
                ><i class="fab fa-facebook-square me-4"></i
              ></a>
              <a :href="getOrganizerInfo.InstagramLink"
                ><i class="fab fa-instagram me-4"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-secondary border-top border-dark py-5">
      <!-- 活動評論區塊 -->
      <div class="container">
        <h3 class="text-dark mb-3">活動評價</h3>
        <!-- 分數、星星區塊 -->
        <div class="d-flex">
          <h5 class="display-5 text-dark fw-bold me-3">5.0</h5>
          <div>
            <div class="d-flex align-items-center mb-2">
              <span class="material-icons text-primary me-1">star_rate</span>
              <span class="material-icons text-primary me-1">star_rate</span>
              <span class="material-icons text-primary me-1">star_rate</span>
              <span class="material-icons text-primary me-1">star_rate</span>
              <span class="material-icons text-primary">star_rate</span>
            </div>
            <p class="fs-7 text-dark m-0 ps-2">5/5 (25則評論)</p>
          </div>
        </div>

        <!-- 評論卡片區塊 -->
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <!-- 左邊評論-->
          <ul class="col-md-8">
            <li
              class="card mb-3 rounded-4 bg-white px-32 py-32"
              v-for="item in getOpinionData"
              :key="item.Id"
            >
              <div class="row g-0">
                <div class="col-md-2">
                  <div class="d-flex flex-column align-items-center">
                    <img
                      :src="item.userImgUrl"
                      alt="memberPhoto"
                      class="rounded-pill memberPhoto-64 mb-2"
                    />
                    <p class="text-dark m-0 mb-1 text-center">
                      {{ item.Name }}
                    </p>
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="card-body p-0">
                    <h5 class="card-title">
                      <p class="card-text text-dark mb-2">
                        {{ item.transCreatDate }}
                      </p>
                      <div class="d-flex align-items-center">
                        <span class="material-icons fs-4 text-primary me-1"
                          >star_rate</span
                        >
                        <span class="material-icons fs-4 text-primary me-1"
                          >star_rate</span
                        >
                        <span class="material-icons fs-4 text-primary me-1"
                          >star_rate</span
                        >
                        <span class="material-icons fs-4 text-primary me-1"
                          >star_rate</span
                        >
                        <span class="material-icons fs-4 text-primary"
                          >star_rate</span
                        >
                      </div>
                    </h5>
                    <p class="card-text text-dark lh-base">
                      {{ item.Opinion }}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!-- 右邊區塊-->
          <div class="col-md-4">
            <div
              class="bg-transparent p-40 rounded-4 text-dark border border-dark"
            >
              <p class="fs-4">
                看完評論是不是有點心動？<br />
                先趕快收藏起來吧！
              </p>
              <div class="border-top border-dark pt-4">
                <p class="text-dark border-dark">
                  已有 {{ getActivityInfo.ApplicantNumber }} 人參加｜{{
                    getActivityInfo.CollectNumber
                  }}
                  人收藏
                </p>
                <div class="d-flex">
                  <!-- 未收藏時的按鈕狀態 -->
                  <button
                    type="button"
                    class="
                      btn btn-outline-dark
                      rounded-pill
                      d-flex
                      align-items-center
                      me-3
                    "
                    :class="{ 'd-none': isCollected }"
                    @click="changeCollect(getActivityInfo.Id)"
                  >
                    <span class="material-icons me-2">bookmark_border</span
                    >收藏活動
                  </button>
                  <!-- 已收藏時的按鈕狀態 -->
                  <button
                    type="button"
                    class="
                      btn btn-dark
                      rounded-pill
                      text-white
                      d-flex
                      align-items-center
                      me-3
                    "
                    :class="{ 'd-none': !isCollected }"
                    @click="changeCollect(getActivityInfo.Id)"
                  >
                    <span class="material-icons me-2">bookmark</span>已收藏
                  </button>
                  <!-- 5-2 活動頁_活動詳情_尚未報名 -->
                  <button
                    type="button"
                    class="
                      btn btn-dark
                      nav-link
                      rounded-pill
                      text-white
                      d-flex
                      align-items-center
                    "
                    @click="joinRightNow"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    :class="{ 'd-none': hadRegister }"
                  >
                    <span class="material-icons me-2">arrow_forward</span
                    >立即參加
                  </button>
                  <!-- 5-2 活動頁_活動詳情_成功報名 -->
                  <button
                    type="button"
                    class="
                      btn btn-dark
                      nav-link
                      rounded-pill
                      text-white
                      d-flex
                      align-items-center
                      disabled
                    "
                    :class="{ 'd-none': unRegister }"
                  >
                    <span class="material-icons me-2">check_circle_outline</span
                    >成功報名
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- pagination -->
          <!-- <div
            class="
              d-flex
              justify-content-center
              fs-4
              align-items-center
              py-12
              text-dark
            "
          >
            <nav aria-label="Page navigation example">
              <div class="d-flex align-items-center">
                <ul class="pagination m-0">
                  <li class="page-item fs-4 rounded-pill">
                    <a
                      class="p-3 bg-transparent border-0"
                      href="#"
                      aria-label="Previous"
                    >
                      <span class="material-icons" aria-hidden="true"
                        >chevron_left</span
                      >
                    </a>
                  </li>
                  <li class="bg-primary fs-4 text-white rounded-pill active">
                    <a class="p-3 border-0 text-white" href="#">1</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="p-3 bg-transparent border-0" href="#">2</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="p-3 bg-transparent border-0" href="#">3</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="p-3 bg-transparent border-0" href="#">...</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="p-3 bg-transparent border-0" href="#">18</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="p-3 bg-transparent border-0" href="#">19</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="p-3 bg-transparent border-0" href="#">20</a>
                  </li>
                  <li class="page-item fs-4 rounded-pill">
                    <a class="bg-transparent" href="#" aria-label="Next">
                      <span class="material-icons" aria-hidden="true"
                        >chevron_right</span
                      >
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas'

export default {
  props: ['Id'],
  data () {
    return {
      offcanvas: {},
      getActivityInfo: {},
      getOrganizerInfo: {},
      getUsersAttendData: {},
      // 報名 API 需要的資料
      giveUserInfo: {
        ActivityId: '',
        ActivityPrice: '',
        UserId: '',
        UserName: '',
        UserMobilePhone: '',
        UserAccount: ''
      },
      getOpinionData: [],
      // 新增瀏覽次數
      putViews: {
        ActivityId: ''
      },
      // 已經報名的話，則 hadRegister 為 ture ，讓 d-none 效果觸發
      hadRegister: false,
      unRegister: true,
      // 藍新金流回傳的東西
      getPaymentData: {},
      isSuccessPay: true,
      isCollected: false,
      // loading 讀取效果
      isActivityLoading: false,
      isRegisterLoading: false,
      fullPage: true
    }
  },
  created () {
    console.log(this.$route.params)

    // 5-1 取得活動+舉辦者資料
    this.getActivityOrganizerInfo()
    // 5-2增加活動瀏覽次數
    this.addViewsNum()
    // 5-3 活動評價資料 + 分頁
    this.getActivityOpinionInfo()
    // 5-4 確認是否成功報名過活動 (JWT)
    this.checkAttendStatus()
    // 5-5 確認是否已收藏活動 (JWT)
    this.checkCollectStatus()
    // 6-1 報名活動 - 個資帶入
    this.getUsersAttendInfo()
    // 報名流程時需要送的資料
    this.getGiveUserInfo()
  },
  methods: {
    // 5-1 取得活動+舉辦者資料
    getActivityOrganizerInfo () {
      const Id = this.Id
      // 讀取效果開啟
      this.isActivityLoading = true

      // 5-1 活動+舉辦者資料
      this.$apiHelper.get(`api/activity/id/${Id}`).then((res) => {
        this.isActivityLoading = false
        if (res.data.Status) {
          // console.log(res.data)
          // 活動
          const oriActivityInfo = res.data.Data.ActivityData
          const activityImgUrl = `${process.env.VUE_APP_ACTIVITYIMG}/${res.data.Data.ActivityData.Image}?2021`
          this.transDate(oriActivityInfo)
          // 轉換成星期格式
          this.transDay(oriActivityInfo)
          this.getActivityInfo = oriActivityInfo
          this.getActivityInfo.Image = activityImgUrl
          console.log(this.getActivityInfo)
          // 講者
          const userImgUrl = `${process.env.VUE_APP_USERIMG}/${res.data.Data.OrganizerData.Image}?2021`
          const oriOrganizerInfo = res.data.Data.OrganizerData
          this.getOrganizerInfo = oriOrganizerInfo
          console.log(this.getOrganizerInfo)
          this.getOrganizerInfo.Image = userImgUrl
        }
      })
    },

    // 5-2 增加活動瀏覽次數
    addViewsNum () {
      // 送出活動 Id
      this.putViews.ActivityId = this.Id

      // 5-2增加活動瀏覽次數
      this.$apiHelper
        .put('api/organizer/activity/views', this.putViews)
        .then((res) => {
          if (res.data.Status) {
            console.log(res.data.Message)
          }
        })
    },

    // 5-3 取得活動評價資料 + 分頁
    getActivityOpinionInfo () {
      const Id = this.Id

      // 5-3 活動評價資料 + 分頁
      this.$apiHelper.get(`api/activity/opinion/${Id}`).then((res) => {
        if (res.data.Status) {
          // console.log(res.data.Data)
          const oriOpinionData = res.data.Data.Opinion
          oriOpinionData.forEach((item) => {
            const userUrl = `${process.env.VUE_APP_USERIMG}/${item.Image}?2021`
            item.userImgUrl = userUrl
            // 轉換成星期格式
            this.transDay(item)
            // 轉換成日期格式
            this.transDate(item)
          })
          this.getOpinionData = oriOpinionData
          console.log(this.getOpinionData)
        }
      })
    },

    // 5-4 進入活動詳情頁面之前，先判斷是否有沒有報名過活動
    checkAttendStatus () {
      const Id = this.Id
      // 先從 localStorage 取得 Token 做判斷有無登入
      const Token = localStorage.getItem('JwtToken')

      if (!Token || Token === 'undefined') {
        console.log('沒有登入喔！')
        this.hadRegister = false
        this.unRegister = true
      } else if (Token) {
        // 5-4 確認是否成功報名過活動 (JWT)
        this.$apiHelper
          .get(`api/users/activity/attend/status/${Id}`)
          .then((res) => {
            const status = res.data.Status
            if (status === true) {
              console.log('有登入而且有報名了！')
              localStorage.setItem('JwtToken', res.data.JwtToken)
              this.hadRegister = true
              this.unRegister = false
            } else {
              console.log('尚未報名唷！')
              localStorage.setItem('JwtToken', res.data.JwtToken)
              this.hadRegister = false
              this.unRegister = true
            }
          })
      }
    },

    // 5-5 進入活動詳情頁面之前，先判斷確認是否已收藏活動 (JWT)
    checkCollectStatus () {
      const Id = this.Id
      // 先從 localStorage 取得 Token 做判斷有無登入
      const Token = localStorage.getItem('JwtToken')
      // 5-5 確認是否已收藏活動 (JWT)
      if (!Token || Token === 'undefined') {
        console.log('沒有登入喔！')
        this.isCollected = false
      } else if (Token) {
        this.$apiHelper
          .get(`api/users/activity/collect/status/${Id}`)
          .then((res) => {
            const status = res.data.Status
            if (status === true) {
              console.log('有登入而且有收藏了！')
              // 存取 token
              localStorage.setItem('JwtToken', res.data.JwtToken)
              this.isCollected = true
            } else {
              console.log('尚未收藏')
              localStorage.setItem('JwtToken', res.data.JwtToken)
              this.isCollected = false
            }
          })
      }
    },

    // 6-1 報名活動的時候，需要將個資代入進去填寫報名的資料
    getUsersAttendInfo () {
      // 6-1 報名活動 - 個資帶入
      // * 如取得無姓名跟電話需提醒填入 *
      this.$apiHelper.post('api/users/attend-data').then((res) => {
        console.log(res)
        if (res.data.Status) {
          const getJwtToken = res.data.JwtToken
          localStorage.setItem('JwtToken', getJwtToken)
          this.getUsersAttendData = res.data.Data
          console.log(this.getUsersAttendData)
        }
      })
    },

    // 改變收藏、取消收藏功能
    changeCollect (ActivityId) {
      console.log('3-2 收藏/取消收藏活動 (JWT)')
      console.log(ActivityId)
      // 3-2 收藏/取消收藏活動 (JWT)
      // 先把 body 要的資料準備好
      const sentActivityId = {}
      sentActivityId.ActivityId = ActivityId
      console.log(sentActivityId)

      // 3-2 收藏/取消收藏活動 (JWT)
      this.$apiHelper
        .put('api/users/activity/collect', sentActivityId)
        .then((res) => {
          if (res.data.Status) {
            console.log('3-2 收藏/取消收藏活動 (JWT)')
            // 先存 token
            const token = res.data.JwtToken
            localStorage.setItem('JwtToken', token)

            // 收藏、取消收藏 - 改變 icon
            this.isCollected = !this.isCollected
          } else {
            // 如果沒有登入的話，請他先登入
            // 但這部分還沒做登入後如何直接回來活動詳情頁面
            this.$router.push('/login')
          }
        })
    },
    // 轉換成星期格式
    transDay (item) {
      const dayList = ['日', '一', '二', '三', '四', '五', '六']
      const oriDay = item.ActivityStartDate
      const newday = new Date(oriDay).getDay() // or "new Date().getDay()";

      const transDay = dayList[newday]
      item.transDay = transDay
      return item
    },
    // 拆分日期
    transDate (item) {
      // 1. 針對日期格式進行轉換
      // 取得開始、結束日期
      const startDate = item.ActivityStartDate
      const endDate = item.ActivityEndDate
      const creatDate = item.CreatDate
      // 轉換日期格式,呼叫函式
      const transStartDateObj = this.splitDate(startDate)
      const transEndDateObj = this.splitDate(endDate)
      const transCreatDateObj = this.splitDate(creatDate)
      // transDate:{splitFinalDate: '2021.12.12', splitFinalTime: '16:00'}
      // 將拆解好的時間加入陣列
      item.transStartDate = transStartDateObj.splitFinalDate
      item.transStartTime = transStartDateObj.splitFinalTime
      item.transEndDate = transEndDateObj.splitFinalDate
      item.transEndTime = transEndDateObj.splitFinalTime
      item.transCreatDate = transCreatDateObj.splitFinalDate
      item.transCreatTime = transCreatDateObj.splitFinalTime
      // 回傳每筆資料
      return item
    },
    // 轉換日期格式
    splitDate (date) {
      const Time = new Date(date)
      Time.getFullYear()
      Time.getMonth()
      Time.getDate()
      Time.getHours()
      Time.getMinutes()
      const splitFinalDate = `${Time.getFullYear()}.${
        Time.getMonth() + 1
      }.${Time.getDate()}`
      const splitFinalTime = `${Time.getHours()}:${
        (Time.getMinutes() < 10 ? '0' : '') + Time.getMinutes()
      }`
      return { splitFinalDate, splitFinalTime }
    },

    // 【 立即參加 】如果使用者沒登入，需先請使用者登入（轉至登入頁）
    joinRightNow () {
      this.isActivityLoading = true
      // 判斷有無登入
      // 先用 1-8 確認是否有沒有登入
      this.$apiHelper.get('api/users/profile-data').then((res) => {
        this.isActivityLoading = false
        if (res.data.Status) {
          // 如果有登入
          console.log('1-8,登入')
          // 打開 Offcanvas
          this.showOffcanvas()
          // 存 Token
          const token = res.data.JwtToken
          localStorage.setItem('JwtToken', token)
        } else {
          // 沒有登入
          console.log('1-8,沒有登入，請先登入')
          // 跳轉到登入頁面
          this.$router.push('/login')
        }
      })
    },
    // 報名流程時需要送的資料
    getGiveUserInfo () {
      // 先取得 api 要送的資料
      this.giveUserInfo = {
        ActivityId: this.getActivityInfo.Id,
        ActivityPrice: this.getActivityInfo.Price,
        UserId: this.getUsersAttendData.Id,
        UserName: this.getUsersAttendData.Name,
        UserMobilePhone: this.getUsersAttendData.MobilePhone,
        UserAccount: this.getUsersAttendData.Account
      }
      // console.log(this.giveUserInfo)
    },

    // 報名活動 -【 確認報名 】
    sendApply () {
      this.isRegisterLoading = true
      console.log(this.getActivityInfo.Price)
      this.getGiveUserInfo()
      // 前往報名成功頁面時，路由參數給活動 ID
      const ActivityId = this.giveUserInfo.ActivityId
      // console.log(this.giveUserInfo)

      // 報名活動流程邏輯
      // 如果是免費的話，直接送 6-2
      if (this.getActivityInfo.Price === 0) {
        // 6-2 報名活動 - 免費＋發信
        // const Token = localStorage.getItem('JwtToken')
        this.$apiHelper
          .post('api/users/activity/free/attend', this.giveUserInfo)
          .then((res) => {
            this.isRegisterLoading = false
            console.log(res)
            if (res.data.Status) {
              // 存取 Token
              const getJwtToken = res.data.JwtToken
              localStorage.setItem('JwtToken', getJwtToken)
              // 關閉 Offcanvas
              this.hideOffcanvas()
              // 轉換到成功頁面
              this.$router.push(`/register-success/${ActivityId}`)
              console.log(res.data)
            }
          })
      } else if (this.getActivityInfo.Price > 0) {
        // 如果價錢不是免費的話
        // 6-3 確認報名-付費活動-付款前 (JWT)
        this.$apiHelper
          .post('api/users/activity/charge/attend', this.giveUserInfo)
          .then((res) => {
            this.isRegisterLoading = false
            console.log(res)
            if (res.data.Status) {
              const getJwtToken = res.data.JwtToken
              localStorage.setItem('JwtToken', getJwtToken)
              this.getPaymentData = res.data.PaymentData
              this.isSuccessPay = false
            }
          })
      }
    },

    // 打開畫布
    showOffcanvas () {
      this.offcanvas.show()
    },

    // 關閉畫布
    hideOffcanvas () {
      this.offcanvas.hide()
    }
  },
  mounted () {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas)
  }
}
</script>
