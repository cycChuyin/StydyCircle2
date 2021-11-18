<template>
  <!-- 線上讀書會 -->
  <div class="container">
    <h6 class="display-6 text-dark fw-bold mb-32">線上讀書會</h6>
  </div>
  <div
    id="onlineActivity"
    class="carousel carousel-dark slide pb-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#onlineActivity"
        data-bs-slide-to="0"
        class="rounded-circle active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#onlineActivity"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class="rounded-circle"
      ></button>
      <button
        type="button"
        data-bs-target="#onlineActivity"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        class="rounded-circle"
      ></button>
    </div>
    <div class="container">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newOnlineActivity.slice(0, 3)"
              :key="item.Id"
            >
              <!-- 給標籤 position 用的 -->
              <div class="position-relative">
                <!-- 卡片圖片與內容 -->
                <div class="card h-100 rounded-4">
                  <router-link :to="`/activity-content/${item.Id}`">
                    <img
                      :src="item.imgUrl"
                      class="
                        card-img-top card-img
                        rounded rounded-top-4 rounded-bottom-0
                      "
                      :alt="item.Image"
                    />
                  </router-link>
                  <div class="card-body position-relative p-40">
                    <h5 class="card-title p-0 mb-3">
                      <router-link
                        :to="`/activity-content/${item.Id}`"
                        class="stretched-link text-dark"
                      >
                        {{ item.Name }}
                      </router-link>
                    </h5>
                    <p class="text-dark mb-2">
                      活動日期｜{{ item.transStartDate }}
                    </p>
                    <p class="text-dark mb-2">
                      活動時間｜{{ item.transStartTime }} ～
                      {{ item.transEndTime }}
                    </p>
                    <p class="text-dark mb-0">
                      活動講者｜{{ item.OrganizerName }}
                    </p>
                  </div>
                </div>
                <!-- 收藏按鈕 position ， 不受 stretched-link 效果影響 -->

                <div class="position-absolute top-0 end-0 mt-3 me-3">
                  <!-- 未收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': item.UserCollected }"
                    @click="changeCollect(item.Id, 'newOnlineActivity')"
                    >bookmark_border</span
                  >
                  <!-- 已收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': !item.UserCollected }"
                    @click="changeCollect(item.Id, 'newOnlineActivity')"
                    >bookmark</span
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="carousel-item" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newOnlineActivity.slice(3, 6)"
              :key="item.Id"
            >
              <!-- 給標籤 position 用的 -->
              <div class="position-relative">
                <!-- 卡片圖片與內容 -->
                <div class="card h-100 rounded-4">
                  <router-link :to="`/activity-content/${item.Id}`">
                    <img
                      :src="item.imgUrl"
                      class="
                        card-img-top card-img
                        rounded rounded-top-4 rounded-bottom-0
                      "
                      :alt="item.Image"
                    />
                  </router-link>
                  <div class="card-body position-relative p-40">
                    <h5 class="card-title p-0 mb-3">
                      <router-link
                        :to="`/activity-content/${item.Id}`"
                        class="stretched-link text-dark"
                      >
                        {{ item.Name }}
                      </router-link>
                    </h5>
                    <p class="text-dark mb-2">
                      活動日期｜{{ item.transStartDate }}
                    </p>
                    <p class="text-dark mb-2">
                      活動時間｜{{ item.transStartTime }} ～
                      {{ item.transEndTime }}
                    </p>
                    <p class="text-dark mb-0">
                      活動講者｜{{ item.OrganizerName }}
                    </p>
                  </div>
                </div>
                <!-- 收藏按鈕 position ， 不受 stretched-link 效果影響 -->
                <div class="position-absolute top-0 end-0 mt-3 me-3">
                  <!-- 未收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': item.UserCollected }"
                    @click="changeCollect(item.Id, 'newOnlineActivity')"
                    >bookmark_border</span
                  >
                  <!-- 已收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': !item.UserCollected }"
                    @click="changeCollect(item.Id, 'newOnlineActivity')"
                    >bookmark</span
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="carousel-item" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newOnlineActivity.slice(6, 9)"
              :key="item.Id"
            >
              <!-- 給標籤 position 用的 -->
              <div class="position-relative">
                <!-- 卡片圖片與內容 -->
                <div class="card h-100 rounded-4">
                  <router-link :to="`/activity-content/${item.Id}`">
                    <img
                      :src="item.imgUrl"
                      class="
                        card-img-top card-img
                        rounded rounded-top-4 rounded-bottom-0
                      "
                      :alt="item.Image"
                    />
                  </router-link>
                  <div class="card-body position-relative p-40">
                    <h5 class="card-title p-0 mb-3">
                      <router-link
                        :to="`/activity-content/${item.Id}`"
                        class="stretched-link text-dark"
                      >
                        {{ item.Name }}
                      </router-link>
                    </h5>
                    <p class="text-dark mb-2">
                      活動日期｜{{ item.transStartDate }}
                    </p>
                    <p class="text-dark mb-2">
                      活動時間｜{{ item.transStartTime }} ～
                      {{ item.transEndTime }}
                    </p>
                    <p class="text-dark mb-0">
                      活動講者｜{{ item.OrganizerName }}
                    </p>
                  </div>
                </div>
                <!-- 收藏按鈕 position ， 不受 stretched-link 效果影響 -->
                <div class="position-absolute top-0 end-0 mt-3 me-3">
                  <!-- 未收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': item.UserCollected }"
                    @click="changeCollect(item.Id, 'newOnlineActivity')"
                    >bookmark_border</span
                  >
                  <!-- 已收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': !item.UserCollected }"
                    @click="changeCollect(item.Id, 'newOnlineActivity')"
                    >bookmark</span
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#onlineActivity"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#onlineActivity"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- 實體讀書會 -->
  <div class="container">
    <h6 class="display-6 text-dark fw-bold mb-32">實體讀書會</h6>
  </div>
  <div
    id="entityActivity"
    class="carousel carousel-dark slide pb-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#entityActivity"
        data-bs-slide-to="0"
        class="rounded-circle active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#entityActivity"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class="rounded-circle"
      ></button>
      <button
        type="button"
        data-bs-target="#entityActivity"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        class="rounded-circle"
      ></button>
    </div>
    <div class="container">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newEntityActivity.slice(0, 3)"
              :key="item.Id"
            >
              <!-- 給標籤 position 用的 -->
              <div class="position-relative">
                <!-- 卡片圖片與內容 -->
                <div class="card h-100 rounded-4">
                  <router-link :to="`/activity-content/${item.Id}`">
                    <img
                      :src="item.imgUrl"
                      class="
                        card-img-top card-img
                        rounded rounded-top-4 rounded-bottom-0
                      "
                      :alt="item.Image"
                    />
                  </router-link>
                  <div class="card-body position-relative p-40">
                    <h5 class="card-title p-0 mb-3">
                      <router-link
                        :to="`/activity-content/${item.Id}`"
                        class="stretched-link text-dark"
                      >
                        {{ item.Name }}
                      </router-link>
                    </h5>
                    <p class="text-dark mb-2">
                      活動日期｜{{ item.transStartDate }}
                    </p>
                    <p class="text-dark mb-2">
                      活動時間｜{{ item.transStartTime }} ～
                      {{ item.transEndTime }}
                    </p>
                    <p class="text-dark mb-0">
                      活動講者｜{{ item.OrganizerName }}
                    </p>
                  </div>
                </div>
                <!-- 收藏按鈕 position ， 不受 stretched-link 效果影響 -->
                <div class="position-absolute top-0 end-0 mt-3 me-3">
                  <!-- 未收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': item.UserCollected }"
                    @click="changeCollect(item.Id, 'newEntityActivity')"
                    >bookmark_border</span
                  >
                  <!-- 已收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': !item.UserCollected }"
                    @click="changeCollect(item.Id, 'newEntityActivity')"
                    >bookmark</span
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="carousel-item" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newEntityActivity.slice(3, 6)"
              :key="item.Id"
            >
              <!-- 給標籤 position 用的 -->
              <div class="position-relative">
                <!-- 卡片圖片與內容 -->
                <div class="card h-100 rounded-4">
                  <router-link :to="`/activity-content/${item.Id}`">
                    <img
                      :src="item.imgUrl"
                      class="
                        card-img-top card-img
                        rounded rounded-top-4 rounded-bottom-0
                      "
                      :alt="item.Image"
                    />
                  </router-link>
                  <div class="card-body position-relative p-40">
                    <h5 class="card-title p-0 mb-3">
                      <router-link
                        :to="`/activity-content/${item.Id}`"
                        class="stretched-link text-dark"
                      >
                        {{ item.Name }}
                      </router-link>
                    </h5>
                    <p class="text-dark mb-2">
                      活動日期｜{{ item.transStartDate }}
                    </p>
                    <p class="text-dark mb-2">
                      活動時間｜{{ item.transStartTime }} ～
                      {{ item.transEndTime }}
                    </p>
                    <p class="text-dark mb-0">
                      活動講者｜{{ item.OrganizerName }}
                    </p>
                  </div>
                </div>
                <!-- 收藏按鈕 position ， 不受 stretched-link 效果影響 -->
                <div class="position-absolute top-0 end-0 mt-3 me-3">
                  <!-- 未收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': item.UserCollected }"
                    @click="changeCollect(item.Id, 'newEntityActivity')"
                    >bookmark_border</span
                  >
                  <!-- 已收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': !item.UserCollected }"
                    @click="changeCollect(item.Id, 'newEntityActivity')"
                    >bookmark</span
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="carousel-item" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newEntityActivity.slice(6, 9)"
              :key="item.Id"
            >
              <!-- 給標籤 position 用的 -->
              <div class="position-relative">
                <!-- 卡片圖片與內容 -->
                <div class="card h-100 rounded-4">
                  <img
                    :src="item.imgUrl"
                    class="
                      card-img-top card-img
                      rounded rounded-top-4 rounded-bottom-0
                    "
                    :alt="item.Image"
                  />
                  <div class="card-body position-relative p-40">
                    <h5 class="card-title p-0 mb-3">
                      <router-link
                        :to="`/activity-content/${item.Id}`"
                        class="stretched-link text-dark"
                      >
                        {{ item.Name }}
                      </router-link>
                    </h5>
                    <p class="text-dark mb-2">
                      活動日期｜{{ item.transStartDate }}
                    </p>
                    <p class="text-dark mb-2">
                      活動時間｜{{ item.transStartTime }} ～
                      {{ item.transEndTime }}
                    </p>
                    <p class="text-dark mb-0">
                      活動講者｜{{ item.OrganizerName }}
                    </p>
                  </div>
                </div>
                <!-- 收藏按鈕 position ， 不受 stretched-link 效果影響 -->
                <div class="position-absolute top-0 end-0 mt-3 me-3">
                  <!-- 未收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': item.UserCollected }"
                    @click="changeCollect(item.Id, 'newEntityActivity')"
                    >bookmark_border</span
                  >
                  <!-- 已收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': !item.UserCollected }"
                    @click="changeCollect(item.Id, 'newEntityActivity')"
                    >bookmark</span
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#entityActivity"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#entityActivity"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- 活動工作坊 -->
  <div class="container">
    <h6 class="display-6 text-dark fw-bold mb-32">活動工作坊</h6>
  </div>
  <div
    id="workShop"
    class="carousel carousel-dark slide pb-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#workShop"
        data-bs-slide-to="0"
        class="rounded-circle active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#workShop"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class="rounded-circle"
      ></button>
      <button
        type="button"
        data-bs-target="#workShop"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        class="rounded-circle"
      ></button>
    </div>
    <div class="container">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newWorkShop.slice(0, 3)"
              :key="item.Id"
            >
              <!-- 給標籤 position 用的 -->
              <div class="position-relative">
                <!-- 卡片圖片與內容 -->
                <div class="card h-100 rounded-4">
                  <img
                    :src="item.imgUrl"
                    class="
                      card-img-top card-img
                      rounded rounded-top-4 rounded-bottom-0
                    "
                    :alt="item.Image"
                  />
                  <div class="card-body position-relative p-40">
                    <h5 class="card-title p-0 mb-3">
                      <router-link
                        :to="`/activity-content/${item.Id}`"
                        class="stretched-link text-dark"
                      >
                        {{ item.Name }}
                      </router-link>
                    </h5>
                    <p class="text-dark mb-2">
                      活動日期｜{{ item.transStartDate }}
                    </p>
                    <p class="text-dark mb-2">
                      活動時間｜{{ item.transStartTime }} ～
                      {{ item.transEndTime }}
                    </p>
                    <p class="text-dark mb-0">
                      活動講者｜{{ item.OrganizerName }}
                    </p>
                  </div>
                </div>
                <!-- 收藏按鈕 position ， 不受 stretched-link 效果影響 -->
                <div class="position-absolute top-0 end-0 mt-3 me-3">
                  <!-- 未收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': item.UserCollected }"
                    @click="changeCollect(item.Id, 'newWorkShop')"
                    >bookmark_border</span
                  >
                  <!-- 已收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': !item.UserCollected }"
                    @click="changeCollect(item.Id, 'newWorkShop')"
                    >bookmark</span
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="carousel-item" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newWorkShop.slice(3, 6)"
              :key="item.Id"
            >
              <!-- 給標籤 position 用的 -->
              <div class="position-relative">
                <!-- 卡片圖片與內容 -->
                <div class="card h-100 rounded-4">
                  <img
                    :src="item.imgUrl"
                    class="
                      card-img-top card-img
                      rounded rounded-top-4 rounded-bottom-0
                    "
                    :alt="item.Image"
                  />
                  <div class="card-body position-relative p-40">
                    <h5 class="card-title p-0 mb-3">
                      <router-link
                        :to="`/activity-content/${item.Id}`"
                        class="stretched-link text-dark"
                      >
                        {{ item.Name }}
                      </router-link>
                    </h5>
                    <p class="text-dark mb-2">
                      活動日期｜{{ item.transStartDate }}
                    </p>
                    <p class="text-dark mb-2">
                      活動時間｜{{ item.transStartTime }} ～
                      {{ item.transEndTime }}
                    </p>
                    <p class="text-dark mb-0">
                      活動講者｜{{ item.OrganizerName }}
                    </p>
                  </div>
                </div>
                <!-- 收藏按鈕 position ， 不受 stretched-link 效果影響 -->
                <div class="position-absolute top-0 end-0 mt-3 me-3">
                  <!-- 未收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': item.UserCollected }"
                    @click="changeCollect(item.Id, 'newWorkShop')"
                    >bookmark_border</span
                  >
                  <!-- 已收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': !item.UserCollected }"
                    @click="changeCollect(item.Id, 'newWorkShop')"
                    >bookmark</span
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="carousel-item" data-bs-interval="false">
          <ul class="row list-unstyled">
            <li
              class="col"
              v-for="item in newWorkShop.slice(6, 9)"
              :key="item.Id"
            >
              <!-- 給標籤 position 用的 -->
              <div class="position-relative">
                <!-- 卡片圖片與內容 -->
                <div class="card h-100 rounded-4">
                  <img
                    :src="item.imgUrl"
                    class="
                      card-img-top card-img
                      rounded rounded-top-4 rounded-bottom-0
                    "
                    :alt="item.Image"
                  />
                  <div class="card-body position-relative p-40">
                    <h5 class="card-title p-0 mb-3">
                      <router-link
                        :to="`/activity-content/${item.Id}`"
                        class="stretched-link text-dark"
                      >
                        {{ item.Name }}
                      </router-link>
                    </h5>
                    <p class="text-dark mb-2">
                      活動日期｜{{ item.transStartDate }}
                    </p>
                    <p class="text-dark mb-2">
                      活動時間｜{{ item.transStartTime }} ～
                      {{ item.transEndTime }}
                    </p>
                    <p class="text-dark mb-0">
                      活動講者｜{{ item.OrganizerName }}
                    </p>
                  </div>
                </div>
                <!-- 收藏按鈕 position ， 不受 stretched-link 效果影響 -->
                <div class="position-absolute top-0 end-0 mt-3 me-3">
                  <!-- 未收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': item.UserCollected }"
                    @click="changeCollect(item.Id, 'newWorkShop')"
                    >bookmark_border</span
                  >
                  <!-- 已收藏 -->
                  <span
                    class="material-icons text-white fs-1"
                    type="button"
                    :class="{ 'd-none': !item.UserCollected }"
                    @click="changeCollect(item.Id, 'newWorkShop')"
                    >bookmark</span
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#workShop"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#workShop"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 從 api 取得並複製一份,內含有拆解後的日期與時間格式
      newOnlineActivity: [],
      newEntityActivity: [],
      newWorkShop: []
    }
  },
  methods: {
    getOnlineNew () {
      // 先用 1-8 確認是否有沒有登入
      this.$apiHelper.get('api/users/profile-data').then((res) => {
        // 判斷有無登入來決定接哪隻搜尋的 api
        if (res.data.Status) {
          // 如果有登入
          console.log('登入')

          // 存 Token
          const token = res.data.JwtToken
          localStorage.setItem('JwtToken', token)
          // 1-10 線上讀書會滾動區資料 (JWT)
          this.$apiHelper
            .get('api/users/activities/new9/type/0')
            .then((res) => {
              if (res.data.Status) {
                // 存 Token
                const token = res.data.JwtToken
                localStorage.setItem('JwtToken', token)
                // 取得活動資料
                const activityData = res.data.Data
                // console.log(activityData)
                activityData.forEach((item) => {
                  this.transDate(item)

                  // 2. 加上圖片路徑
                  const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                  item.imgUrl = imgUrl
                })
                this.newOnlineActivity = activityData
                console.log(
                  '1-10 線上讀書會滾動區資料 (JWT)',
                  this.newOnlineActivity
                )
              }
            })
        } else {
          // 沒有登入
          // 1-2 線上讀書會滾動區資料
          this.$apiHelper.get('api/activities/new9/type/0').then((res) => {
            if (res.data.Status) {
              const activityData = res.data.Data
              // console.log(activityData)
              activityData.forEach((item) => {
                this.transDate(item)

                // 2. 加上圖片路徑
                const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                item.imgUrl = imgUrl
              })
              this.newOnlineActivity = activityData
              console.log('1-2 線上讀書會滾動區資料', this.newOnlineActivity)
            }
          })
        }
      })
    },
    getEntityNew () {
      // 先用 1-8 確認是否有沒有登入
      this.$apiHelper.get('api/users/profile-data').then((res) => {
        // 判斷有無登入來決定接哪隻搜尋的 api
        if (res.data.Status) {
          // 如果有登入

          // 存 Token
          const token = res.data.JwtToken
          localStorage.setItem('JwtToken', token)
          // 1-11 實體讀書會滾動區資料 (JWT)
          this.$apiHelper
            .get('api/users/activities/new9/type/1')
            .then((res) => {
              if (res.data.Status) {
                // 存 Token
                const token = res.data.JwtToken
                localStorage.setItem('JwtToken', token)
                // 取得活動資料
                const activityData = res.data.Data
                activityData.forEach((item) => {
                  this.transDate(item)

                  // 2. 加上圖片路徑
                  const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                  item.imgUrl = imgUrl
                })
                this.newEntityActivity = activityData
                console.log(
                  '1-11 實體讀書會滾動區資料 (JWT)',
                  this.newEntityActivity
                )
              }
            })
        } else {
          // 沒有登入
          // 1-3 實體讀書會滾動區資料
          this.$apiHelper.get('api/activities/new9/type/1').then((res) => {
            if (res.data.Status) {
              console.log('1-3 實體讀書會滾動區資料')
              const activityData = res.data.Data
              activityData.forEach((item) => {
                this.transDate(item)

                // 2. 加上圖片路徑
                const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                item.imgUrl = imgUrl
              })
              this.newEntityActivity = activityData
              console.log('1-3 實體讀書會滾動區資料', this.newEntityActivity)
            }
          })
        }
      })
    },
    getWorkShopNew () {
      // 先用 1-8 確認是否有沒有登入
      this.$apiHelper.get('api/users/profile-data').then((res) => {
        // 判斷有無登入來決定接哪隻搜尋的 api
        if (res.data.Status) {
          // 如果有登入
          // 存 Token
          const token = res.data.JwtToken
          localStorage.setItem('JwtToken', token)
          // 1-12 活動工作坊滾動區資料 (JWT)
          this.$apiHelper
            .get('api/users/activities/new9/type/2')
            .then((res) => {
              if (res.data.Status) {
                // 存 Token
                const token = res.data.JwtToken
                localStorage.setItem('JwtToken', token)
                // 取得活動資料
                const activityData = res.data.Data
                activityData.forEach((item) => {
                  // 轉換成星期格式
                  this.transDay(item)
                  // 轉換日期格式
                  this.transDate(item)
                  // 2. 加上圖片路徑
                  const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                  item.imgUrl = imgUrl
                })
                this.newWorkShop = activityData
                console.log('1-12 活動工作坊滾動區資料 (JWT)', this.newWorkShop)
              }
            })
        } else {
          // 沒有登入
          console.log('沒有登入')
          // 1-4 活動工作坊滾動區資料
          this.$apiHelper.get('api/activities/new9/type/2').then((res) => {
            if (res.data.Status) {
              const activityData = res.data.Data
              activityData.forEach((item) => {
                // 轉換成星期格式
                this.transDay(item)
                // 轉換日期格式
                this.transDate(item)
                // 2. 加上圖片路徑
                const imgUrl = `${process.env.VUE_APP_CARDIMG}/${item.Image}?2021`
                item.imgUrl = imgUrl
              })
              this.newWorkShop = activityData
              console.log('1-4 活動工作坊滾動區資料', this.newWorkShop)
            }
          })
        }
      })
    },
    // 改變收藏、取消收藏功能
    changeCollect (ActivityId, type) {
      console.log('3-2 收藏/取消收藏活動 (JWT)', ActivityId)
      // 3-2 收藏/取消收藏活動 (JWT)
      // 先把 body 要的資料準備好
      const sentActivityId = {}
      sentActivityId.ActivityId = ActivityId
      console.log(sentActivityId)

      // 判斷是哪個 Data 要判別 Id
      let data = []
      // 判斷是哪一個類別的陣列要跑迴圈
      if (type === 'newOnlineActivity') {
        data = this.newOnlineActivity
      } else if (type === 'newEntityActivity') {
        data = this.newEntityActivity
      } else if (type === 'newWorkShop') {
        data = this.newWorkShop
      }
      console.log(data)
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
            // 將陣列跑迴圈，如果有對應的資料（Id），就切換狀態
            data.forEach((item) => {
              if (item.Id === ActivityId) {
                item.UserCollected = !item.UserCollected
              }
            })
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
    transDate (item) {
      // 1. 針對日期格式進行轉換
      // 取得開始、結束日期
      const startDate = item.ActivityStartDate
      const endDate = item.ActivityEndDate
      // 轉換日期格式,呼叫函式
      const transStartDateObj = this.splitDate(startDate)
      const transEndDateObj = this.splitDate(endDate)
      // transDate:{splitFinalDate: '2021.12.12', splitFinalTime: '16:00'}
      // 將拆解好的時間加入陣列
      item.transStartDate = transStartDateObj.splitFinalDate
      item.transStartTime = transStartDateObj.splitFinalTime
      item.transEndDate = transEndDateObj.splitFinalDate
      item.transEndTime = transEndDateObj.splitFinalTime
      // 回傳每筆資料
      return item
    }
  },
  created () {
    this.getOnlineNew()
    this.getEntityNew()
    this.getWorkShopNew()
  }
}
</script>
