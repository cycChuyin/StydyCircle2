<template>
  <!-- <div>個人檔案頁的導覽頁面（全部共用元件處）</div> -->
  <component-navbar></component-navbar>
  <div class="container">
    <div class="row py-10">
      <div class="col-md-3">
        <!-- 左邊：個人資料檔案區塊 -->
        <div class="px-40 py-5 border border-secondary rounded-6">
          <div class="text-center">
            <img
              src="https://fakeimg.pl/120/"
              alt="memberPhoto"
              class="rounded-pill memberPhoto-120 mb-4 text-center"
            />
            <h2 class="text-center text-secondary mb-2 fw-normal">
              陳小明｜May
            </h2>
            <p class="text-secondary fw-light">99 追蹤者｜199 關注中</p>
            <button
              type="button"
              class="
                btn btn-secondary
                fw-light
                rounded-pill
                d-flex
                align-items-center
                text-center
                mx-auto
                text-white
                fs-7
                mb-32
              "
            >
              <span class="material-icons fs-6 me-2">done_outline</span>
              追蹤我
            </button>
            <button
              type="button"
              class="
                btn btn-secondary
                fw-light
                rounded-pill
                d-flex
                align-items-center
                text-center
                mx-auto
                text-white
                fs-7
                mb-32
              "
            >
              <span class="material-icons fs-6 me-2">edit</span>
              編輯個人檔案
            </button>
            <button
              type="button"
              class="
                btn btn-secondary
                fw-light
                rounded-pill
                d-flex
                align-items-center
                text-center
                mx-auto
                text-white
                fs-7
                mb-32
              "
            >
              <span class="material-icons fs-6 me-2">download_done</span>
              儲存編輯
            </button>
          </div>
          <!-- 地點 -->
          <div class="address py-32 border-secondary border-top border-bottom">
            <p
              class="
                d-flex
                justify-content-start
                align-items-center
                text-secondary
                m-0
              "
            >
              <span class="material-icons me-2">place</span>
              台灣．高雄市．快樂區
            </p>
          </div>
          <!-- 關於我 -->
          <div class="aboutMe py-32">
            <h3 class="text-secondary fs-6 mb-2">關於我</h3>
            <p class="text-secondary mb-32 fw-light">
              我是一個人，以下是關於我的介紹。我是一個人，以下是關於我的介紹。我是一個人。我是一個人，以下是關於我的介紹。我是一個人，以下是關於我的介紹。我是一個人。我是一個人，以下是關於我的介紹。
            </p>
            <h3 class="text-secondary fs-6 mb-2">我的專長</h3>
            <p class="text-secondary mb-32 fw-light">
              我是一個人，以下是關於我的介紹。我是一個人，以下是關於我的介紹。我是一個人。
            </p>
            <h3 class="text-secondary fs-6 mb-2">我的興趣</h3>
            <p class="text-secondary mb-0 fw-light">
              我是一個人，以下是關於我的介紹。我是一個人，以下是關於我的介紹。我是一個人。
            </p>
          </div>
          <!-- 社群軟體 -->
          <div class="py-32 border-secondary border-top">
            <h3 class="text-secondary fs-6 mb-32">社群軟體</h3>
            <ul class="list-unstyled d-flex justify-content-between mb-0">
              <li>
                <a href="#"><i class="bi bi-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i class="bi bi-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i class="bi bi-envelope-fill"></i></a>
              </li>
              <li>
                <a href="#"><i class="bi bi-envelope-fill"></i></a>
              </li>
            </ul>
          </div>
          <!-- 加入時間、瀏覽次數 -->
          <p
            class="
              text-secondary
              fs-7
              pt-32
              border-top border-secondary
              mb-2
              fw-light
            "
          >
            於 2021/05/21 加入
          </p>
          <p class="text-secondary fw-light">瀏覽次數：999</p>
        </div>
      </div>
      <div class="col-md-9 px-13">
        <router-link to="/profile/my-activity" class="mb-32 fw-bold fs-4 text-secondary me-4" type="button">我的活動</router-link>
        <router-link to="/profile/study-partner" class="mb-32 fw-bold fs-4 text-secondary me-4" type="button">讀冊夥伴</router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
  <component-footer></component-footer>
</template>

<script>
import componentNavbar from '@/components/Layout/Navbar.vue'
import componentFooter from '@/components/Layout/Footer.vue'

export default {
  name: 'Home',
  components: {
    componentNavbar,
    componentFooter
  }
}
</script>
