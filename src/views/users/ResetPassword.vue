<template>
  <!-- banner -->
  <div class="loginBannerBG py-10">
    <div class="container">
      <h2 class="text-secondary text-center mb-5 fw-light fs-1">
        - 重置密碼 -
      </h2>
      <!-- 重置密碼內容 -->
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div
            class="border border-secondary border-widths-2 rounded-6 px-6 py-7"
          >
            <form>
              <div class="mb-3">
                <label
                  for="inputNewPassword"
                  class="text-secondary fs-4 fw-normal me-3 mb-2"
                  >新密碼</label
                >
                <input
                  type="password"
                  class="
                    form-control
                    rounded-pill
                    position-relative
                    ps-3
                    border-0
                    form-control-darkGray
                    py-13
                    mb-1
                  "
                  id="inputNewPassword"
                  placeholder=""
                />
                <span class="fs-7 fw-light text-secondary mt-1"
                  >＊密碼必須為 8 個字元及至少一個大寫字母</span
                >
              </div>
              <div class="mb-5">
                <label
                  for="inputRePassword"
                  class="text-secondary fs-4 fw-normal me-3 mb-2"
                  >確認密碼</label
                >
                <input
                  type="password"
                  class="
                    form-control
                    rounded-pill
                    position-relative
                    ps-3
                    border-0
                    form-control-darkGray
                    py-13
                  "
                  id="inputRePassword"
                  placeholder=""
                />
              </div>

              <button
                class="btn btn-secondary rounded-pill w-100 text-white py-13"
                type="submit"
                id="button-addon2"
              >
                確認送出
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
