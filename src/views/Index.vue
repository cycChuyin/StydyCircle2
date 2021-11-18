<template>
  <!-- 熱門 banner -->
  <hot-activity></hot-activity>
  <!-- 想要找夥伴一起讀書嗎 -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10 pt-10 pb-5">
        <h6 class="display-6 text-center text-secondary mb-6 fw-bold">
          想要找伙伴一起讀書嗎？
        </h6>
        <div class="row row-cols-md-2">
          <div class="col-md-6">
            <div class="row justify-content-center">
              <div
                class="
                  col-lg-6 col-md-10 col-6
                  d-flex
                  flex-column
                  justify-content-center
                  text-secondary
                  mb-5
                "
              >
                <span class="material-icons fs-1 text-center pb-32">
                  groups
                </span>
                <p>
                  我們擁有來自不同地方的讀書好伙伴，讓您能找到志同道合的伙伴，一起來讀書、分享和交流心得！
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row justify-content-center">
              <div
                class="
                  col-lg-6 col-md-10 col-6
                  d-flex
                  flex-column
                  justify-content-center
                  text-secondary
                  mb-5
                "
              >
                <span class="material-icons fs-1 text-center pb-32">
                  menu_book
                </span>
                <p>
                  我們提供您各式各樣的讀書會種類，從此讀書不再局限於單一類別，讓您在平台上可以享受讀書的樂趣！
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row justify-content-center">
              <div
                class="
                  col-lg-6 col-md-10 col-6
                  d-flex
                  flex-column
                  justify-content-center
                  text-secondary
                  mb-5
                "
              >
                <span class="material-icons fs-1 text-center pb-32">
                  video_camera_front
                </span>
                <p>
                  我們想縮短伙伴之間的距離，所以除了給您實體讀書會的體驗，還提供線上讀書會，讓距離不再成為問題！
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row justify-content-center">
              <div
                class="
                  col-lg-6 col-md-10 col-6
                  d-flex
                  flex-column
                  justify-content-center
                  text-secondary
                  mb-5
                "
              >
                <span class="material-icons fs-1 text-center pb-32">
                  celebration
                </span>
                <p>
                  我們還提供讀書會的延伸活動，讓有趣的活動工作坊貫穿書籍的中心思想，從而融入讀冊伙伴的生活裡。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 金句輪播 -->
  <div class="container">
    <div class="row justify-content-center mb-10">
      <div class="col-md-10">
        <div
          id="carouselExampleIndicators"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner rounded-6 position-relative">
            <div class="carousel-item active">
              <div
                class="
                  bg-searchselect
                  d-flex
                  justify-content-center
                  align-items-center
                  px-4
                  text-center
                "
                style="height: 538px"
              >
                <div class="text-secondary">
                  <h5 class="display-5 fw-light mb-32">
                    「想獲得真正自由就必須高度自律。」
                  </h5>
                  <p class="fs-4 fw-light">
                    Mortimer J. Adler《如何閱讀一本書》
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item rounded-6 position-relative">
              <div
                class="
                  bg-searchselect
                  d-flex
                  justify-content-center
                  align-items-center
                  px-4
                  text-center
                "
                style="height: 538px"
              >
                <div class="text-secondary">
                  <h5 class="display-5 fw-light mb-32">
                    所有的大人都曾經是小孩，<br />雖然，只有少數人記得。
                  </h5>
                  <p class="fs-4 fw-light">
                    Antoine de Saint-Exupéry 《小王子》
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item rounded-6 position-relative">
              <div
                class="
                  bg-searchselect
                  d-flex
                  justify-content-center
                  align-items-center
                  px-4
                  text-center
                "
                style="height: 538px"
              >
                <div class="text-secondary">
                  <h5 class="display-5 fw-light mb-32">
                    有陰影的地方，必定有光。
                  </h5>
                  <p class="fs-4 fw-light">幾米《星空》</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 如何使用作伙來讀冊？ -->
  <div class="bg-searchselect">
    <div class="container">
      <div class="row justify-content-center py-10">
        <div class="col-md-10">
          <h6 class="display-6 text-center text-secondary mb-6 fw-bold">
            如何使用作伙來讀冊？
          </h6>
          <div class="text-secondary mb-7">
            <p class="fs-4">/ 選擇您想要的進行的方式 /</p>
            <p class="fw-light mb-0">
              歡迎來到作伙來讀冊，讀冊伙伴們登入後，就可以先來選擇讀書會的進行方式，我們平台有提供三種可參加的方式，分別是：線上讀書會、實體讀書會、活動工作坊。讀冊伙伴們可以考量自己的需求，再來選擇適合自己的方式來趣名唷！
            </p>
          </div>
          <div class="text-secondary mb-7">
            <p class="fs-4">/ 選擇您感興趣的類別 /</p>
            <p class="fw-light mb-0">
              再來，選擇完想要進行的讀書會方式後，可以來選擇您感興趣的讀書會類別。我們平台有提供七大分類 —— 商業理財、文學小說、人文史地、醫療保健、生活風格、自然科學和電腦資訊。讀冊伙伴可以挑選感興趣的類別來搜索唷！
            </p>
          </div>
          <div class="text-secondary">
            <p class="fs-4">/ 報名您最終選擇的活動 /</p>
            <p class="fw-light mb-0">
              最後，選擇完進行方式和讀書會類別後，讀冊伙伴可以在最終的選擇活動詳情頁裡報名。這邊要提醒選冊伙伴們，請報名前要安排好時間，因為報名完畢 7 日內如需取消報名，只能取回活動費用總額之 50%；若在報名完成之 7 日後取消報名，活動費用將無法退還唷！
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 活動卡片輪播 -->
  <div class="py-10">
    <activity-carouse></activity-carouse>
    <!-- <activity-carouse></activity-carouse>
    <activity-carouse></activity-carouse> -->
  </div>
  <!-- <component-swiper></component-swiper> -->
</template>

<script>
import hotActivity from '@/components/Activity/HotActivity.vue'
import activityCarouse from '@/components/ActivityCarouse.vue'
// import componentSwiper from '@/components/Swiper.vue'

export default {
  components: {
    // componentSwiper,
    hotActivity,
    activityCarouse
  }
}
</script>
