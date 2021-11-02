<template>
  <!-- 熱門 banner -->
  <hot-activity></hot-activity>
  <!-- 想要找夥伴一起讀書嗎 -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10 pt-10 pb-5">
        <h6 class="display-6 text-center text-secondary mb-6">
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
                  menu_book
                </span>
                <p>
                  我們的宗旨是可以找到同伴一起來讀書！我們的宗旨是可以找到同伴一起來讀書！
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
                  我們的宗旨是可以找到同伴一起來讀書！我們的宗旨是可以找到同伴一起來讀書！
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
                  我們的宗旨是可以找到同伴一起來讀書！我們的宗旨是可以找到同伴一起來讀書！
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
                  我們的宗旨是可以找到同伴一起來讀書！我們的宗旨是可以找到同伴一起來讀書！
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
          <h6 class="display-6 fw-bold text-secondary text-center mb-5">
            如何使用作伙來讀冊？
          </h6>
          <div class="text-secondary mb-7">
            <p class="fs-4">／選擇您想要的進行的方式／</p>
            <p class="fw-light mb-0">
              歡迎來到作伙來讀冊，我們在三種參加的方式，登入後即可選擇感興趣的讀書會參加喔！歡迎來到作伙來讀冊，我們在三種參加的方式。歡迎來到作伙來讀冊，我們在三種參加的方式，登入後即可選擇感興趣的讀書會參加喔！歡迎來到作伙來讀冊，我們在三種參加的方式。
            </p>
          </div>
          <div class="text-secondary mb-7">
            <p class="fs-4">／選擇您想要的進行的方式／</p>
            <p class="fw-light mb-0">
              歡迎來到作伙來讀冊，我們在三種參加的方式，登入後即可選擇感興趣的讀書會參加喔！歡迎來到作伙來讀冊，我們在三種參加的方式。歡迎來到作伙來讀冊，我們在三種參加的方式，登入後即可選擇感興趣的讀書會參加喔！歡迎來到作伙來讀冊，我們在三種參加的方式。
            </p>
          </div>
          <div class="text-secondary">
            <p class="fs-4">／選擇您想要的進行的方式／</p>
            <p class="fw-light mb-0">
              歡迎來到作伙來讀冊，我們在三種參加的方式，登入後即可選擇感興趣的讀書會參加喔！歡迎來到作伙來讀冊，我們在三種參加的方式。歡迎來到作伙來讀冊，我們在三種參加的方式，登入後即可選擇感興趣的讀書會參加喔！歡迎來到作伙來讀冊，我們在三種參加的方式。
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
