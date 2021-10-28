<template>
  <div class="position-relative shadow">
    <nav class="navbar navbar-expand-lg bg-white navbar-light py-5">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link text-secondary active"
                aria-current="page"
                href="#"
                >線上讀書會</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">實體讀書會</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-secondary"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >活動工作坊</a
              >
            </li>
          </ul>
          <!-- 右側 -->
          <ul class="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">
                <span class="material-icons d-flex align-items-center">
                  search
                </span>
              </a>
            </li>
            <!-- login -->
            <li class="nav-item">
              <ul class="list-unstyled nav-item d-flex mb-2 mb-lg-0">
                <li class="nav-item ms-7">
                  <router-link
                    to="/signUp"
                    class="nav-link text-secondary px-3 py-2"
                  >
                    註冊
                  </router-link>
                </li>
                <li class="nav-item ms-7">
                  <router-link
                    to="/login"
                    type="button"
                    class="
                      btn btn-secondary
                      nav-link
                      fw-bold
                      rounded-pill
                      text-white
                      px-3
                      py-2
                    "
                    >登入</router-link
                  >
                </li>
              </ul>
            </li>
            <!-- 登入後 + dropdown -->
            <!-- <li class="nav-item dropdown ">
                        <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://fakeimg.pl/40/" alt="memberPhoto" class="rounded-pill memberPhoto-40" >
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end p-0 rounded-top rounded-4" aria-labelledby="navbarDropdown">
                            <li class="text-center text-secondary ">
                                <a class="dropdown-item py-3 d-flex justify-content-center align-items-center" href="#">
                                <span class="material-icons pe-2">person</span>
                                    個人檔案</a>
                            </li>
                            <li class="text-center text-secondary ">
                                <a class="dropdown-item py-3 d-flex justify-content-center align-items-center" href="#">
                                <span class="material-icons pe-2">event_note</span>
                                    探索活動</a>
                            </li>
                            <li class="text-center text-secondary ">
                                <a class="dropdown-item py-3 d-flex justify-content-center align-items-center" href="#">
                                <span class="material-icons pe-2">settings</span>
                                    重設密碼</a>
                            </li>
                            <li class="text-center text-secondary px-32 py-0"><hr class="dropdown-divider m-0"></li>
                            <li class="text-center text-secondary">
                                <a class="dropdown-item py-3" href="#">登出</a>
                            </li>
                        </ul>
                    </li> -->
          </ul>
        </div>
      </div>
    </nav>
    <router-link to="/studyCircle">
      <img
        src="@/assets/photo/logo.png"
        class="position-absolute top-50 start-50 translate-middle"
        style="width: 239px; height: auto"
      />
    </router-link>
  </div>
</template>
