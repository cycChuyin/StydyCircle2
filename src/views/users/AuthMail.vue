<template>
  <!-- 註冊開通頁面 -->
  <!-- banner -->
  <div class="loginBannerBG py-10 border-bottom border-dark">
    <div class="container">
      <h2 class="text-secondary text-center mb-5 fw-light fs-1">- 註冊 -</h2>
      <!-- 登入頁內容 -->
      <div class="row justify-content-center">
        <div
          class="
            col-md-6
            border border-md-0 border-secondary border-widths-2
            rounded-6
            px-lg-6 px-md-5 px-5
            py-md-8 py-5
            d-flex
            flex-column
            justify-content-center
          "
        >
          <h4 class="fs-4 text-center text-secondary mb-3">
            恭喜您成功開通帳號！
          </h4>
          <p class="text-secondary text-center mb-32">
            很棒！您終於加入讀冊伙伴的一員了，趕快登入會員吧！
          </p>
          <div class="row justify-content-center">
            <div class="col-md-8">
              <router-link
                to="/study-circle"
                type="button"
                class="btn btn-secondary rounded-pill text-white w-100"
              >
                回到登入頁
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
