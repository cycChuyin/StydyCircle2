<template>
<component-navbar></component-navbar>
<div class="container">
    <!-- 篩選搜尋區塊 -->
    <div class="filterSearchBar">
        <div class="row">
            <div class="col-10">
                <div class="categorySearchBar rounded-pill border border-secondary d-flex align-items-center">
                    <div class="input-group px-32 py-2">
                    <button class="btn btn-outline-secondary dropdown-toggle  border-0 text-secondary fw-light border-end border-secondary fs-6 bg-transparent " type="button" data-bs-toggle="dropdown" aria-expanded="false">類別</button>
                    <ul class="dropdown-menu  text-dark fw-light p-0 border-0 rounded-3" aria-labelledby="defaultDropdown">
                        <li><a class="dropdown-item py-2 text-center rounded-3" href="#">所有分類</a></li>
                        <li><a class="dropdown-item py-2 text-center rounded-3" href="#">商業理財</a></li>
                        <li><a class="dropdown-item py-2 text-center rounded-3" href="#">文學小說</a></li>
                        <li><a class="dropdown-item py-2 text-center rounded-3" href="#">人文史地</a></li>
                        <li><a class="dropdown-item py-2 text-center rounded-3" href="#">醫療保健</a></li>
                        <li><a class="dropdown-item py-2 text-center rounded-3" href="#">生活風格</a></li>
                        <li><a class="dropdown-item py-2 text-center rounded-3" href="#">自然科學</a></li>
                        <li><a class="dropdown-item py-2 text-center rounded-3" href="#">電腦資訊</a></li>
                    </ul>
                    <button class="btn btn-outline-secondary dropdown-toggle  border-0 text-secondary fw-light border-end border-secondary fs-6 bg-transparent " type="button" data-bs-toggle="dropdown" aria-expanded="false">地點</button>
                    <ul class="dropdown-menu  text-dark fw-light p-0 border-0 rounded-3" aria-labelledby="defaultDropdown">
                        <li><a class="dropdown-item py-2 text-center rounded-3" href="#">基隆市</a></li>
                        <li><a class="dropdown-item py-2 text-center rounded-3" href="#">台北市</a></li>
                    </ul>
                    <input type="text" class="form-control form-control border-0 position-relative ps-3 bg-transparent" aria-label="Text input with dropdown button" placeholder="請輸入關鍵字搜尋（書籍名稱、活動名稱等）">
                    </div>
                </div>
            </div>
            <div class="col-2 d-flex justify-content-end">
                <button type="button" class="btn btn-secondary rounded-pill text-white w-100 d-flex justify-content-center align-items-center" >
                <span class="material-icons me-2">search</span>
                立即搜尋
                </button>
            </div>
        </div>
    </div>
    <!-- 活動區塊 -->
    <div class="activityCardGroup mt-5 d-flex justify-content-between mb-5">
        <p class="fs-1  text-secondary">搜尋結果</p>
        <div class="btn-group">
            <button class="btn bg-transparent dropdown-toggle fs-4 text-secondary" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
            排序
            </button>
            <ul class="dropdown-menu dropdown-menu-end text-dark fw-light p-0 border-0 rounded-bottom-3" aria-labelledby="defaultDropdown">
            <li><a class="dropdown-item py-2 text-center" href="#">最新發佈（預設）</a></li>
            <li><a class="dropdown-item py-2 text-center" href="#">最熱門活動</a></li>
            <li><a class="dropdown-item py-2 text-center rounded-bottom-3" href="#">日期由舊到新</a></li>
            </ul>
        </div>
    </div>
    <!-- 卡片區塊 -->
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card h-100 rounded-4">
            <img src="@/assets/photo/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg" class="card-img-top card-img" alt="...">
            <div class="card-img-overlay d-flex justify-content-between">
                <p class="card-text text-white ">線上讀書會｜人文史地</p>
                <span class="material-icons text-white fs-1">bookmark_border</span>
            </div>
            <div class="card-body p-4">
                <p class="card-text mb-2 p-0">2021/10/12 13:00 - 15:00</p>
                <h5 class="card-title p-0"><a href="#" class="stretched-link text-dark">《新手貓奴必看》</a></h5>
                <p class="text-dark py-4">線上讀書會的宗旨是希望閱讀、分享不再局限於地點的距離，不論您是在地球的另一邊，我們都很歡迎大家一起來參加！</p>
                <div class="card-footer border-0 bg-transparent p-0" >
                <p class="text-secondary fs-8 m-0">10人參加 ｜ 25人收藏</p>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 rounded-4">
            <img src="@/assets/photo/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg" class="card-img-top card-img" alt="...">
            <div class="card-img-overlay d-flex justify-content-between">
                <p class="card-text text-white ">線上讀書會｜人文史地</p>
                <span class="material-icons text-white fs-1">bookmark_border</span>
            </div>
            <div class="card-body p-4">
                <p class="card-text mb-2 p-0">2021/10/12 13:00 - 15:00</p>
                <h5 class="card-title p-0"><a href="#" class="stretched-link text-dark">《新手貓奴必看》</a></h5>
                <p class="text-dark py-4">線上讀書會的宗旨是希望閱讀、分享不再局限於地點的距離，不論您是在地球的另一邊，我們都很歡迎大家一起來參加！</p>
                <div class="card-footer border-0 bg-transparent p-0" >
                <p class="text-secondary fs-8 m-0">10人參加 ｜ 25人收藏</p>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 rounded-4">
            <img src="@/assets/photo/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg" class="card-img-top card-img" alt="...">
            <div class="card-img-overlay d-flex justify-content-between">
                <p class="card-text text-white ">線上讀書會｜人文史地</p>
                <span class="material-icons text-white fs-1">bookmark_border</span>
            </div>
            <div class="card-body p-4">
                <p class="card-text mb-2 p-0">2021/10/12 13:00 - 15:00</p>
                <h5 class="card-title p-0"><a href="#" class="stretched-link text-dark">《新手貓奴必看》</a></h5>
                <p class="text-dark py-4">線上讀書會的宗旨是希望閱讀、分享不再局限於地點的距離，不論您是在地球的另一邊，我們都很歡迎大家一起來參加！</p>
                <div class="card-footer border-0 bg-transparent p-0" >
                <p class="text-secondary fs-8 m-0">10人參加 ｜ 25人收藏</p>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 rounded-4">
            <img src="@/assets/photo/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg" class="card-img-top card-img" alt="...">
            <div class="card-img-overlay d-flex justify-content-between">
                <p class="card-text text-white ">線上讀書會｜人文史地</p>
                <span class="material-icons text-white fs-1">bookmark_border</span>
            </div>
            <div class="card-body p-4">
                <p class="card-text mb-2 p-0">2021/10/12 13:00 - 15:00</p>
                <h5 class="card-title p-0"><a href="#" class="stretched-link text-dark">《新手貓奴必看》</a></h5>
                <p class="text-dark py-4">線上讀書會的宗旨是希望閱讀、分享不再局限於地點的距離，不論您是在地球的另一邊，我們都很歡迎大家一起來參加！</p>
                <div class="card-footer border-0 bg-transparent p-0" >
                <p class="text-secondary fs-8 m-0">10人參加 ｜ 25人收藏</p>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 rounded-4">
            <img src="@/assets/photo/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg" class="card-img-top card-img" alt="...">
            <div class="card-img-overlay d-flex justify-content-between">
                <p class="card-text text-white ">線上讀書會｜人文史地</p>
                <span class="material-icons text-white fs-1">bookmark_border</span>
            </div>
            <div class="card-body p-4">
                <p class="card-text mb-2 p-0">2021/10/12 13:00 - 15:00</p>
                <h5 class="card-title p-0"><a href="#" class="stretched-link text-dark">《新手貓奴必看》</a></h5>
                <p class="text-dark py-4">線上讀書會的宗旨是希望閱讀、分享不再局限於地點的距離，不論您是在地球的另一邊，我們都很歡迎大家一起來參加！</p>
                <div class="card-footer border-0 bg-transparent p-0" >
                <p class="text-secondary fs-8 m-0">10人參加 ｜ 25人收藏</p>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 rounded-4">
            <img src="@/assets/photo/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg" class="card-img-top card-img" alt="...">
            <div class="card-img-overlay d-flex justify-content-between">
                <p class="card-text text-white ">線上讀書會｜人文史地</p>
                <span class="material-icons text-white fs-1">bookmark_border</span>
            </div>
            <div class="card-body p-4">
                <p class="card-text mb-2 p-0">2021/10/12 13:00 - 15:00</p>
                <h5 class="card-title p-0"><a href="#" class="stretched-link text-dark">《新手貓奴必看》</a></h5>
                <p class="text-dark py-4">線上讀書會的宗旨是希望閱讀、分享不再局限於地點的距離，不論您是在地球的另一邊，我們都很歡迎大家一起來參加！</p>
                <div class="card-footer border-0 bg-transparent p-0" >
                <p class="text-secondary fs-8 m-0">10人參加 ｜ 25人收藏</p>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 rounded-4">
            <img src="@/assets/photo/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg" class="card-img-top card-img" alt="...">
            <div class="card-img-overlay d-flex justify-content-between">
                <p class="card-text text-white ">線上讀書會｜人文史地</p>
                <span class="material-icons text-white fs-1">bookmark_border</span>
            </div>
            <div class="card-body p-4">
                <p class="card-text mb-2 p-0">2021/10/12 13:00 - 15:00</p>
                <h5 class="card-title p-0"><a href="#" class="stretched-link text-dark">《新手貓奴必看》</a></h5>
                <p class="text-dark py-4">線上讀書會的宗旨是希望閱讀、分享不再局限於地點的距離，不論您是在地球的另一邊，我們都很歡迎大家一起來參加！</p>
                <div class="card-footer border-0 bg-transparent p-0" >
                <p class="text-secondary fs-8 m-0">10人參加 ｜ 25人收藏</p>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 rounded-4">
            <img src="@/assets/photo/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg" class="card-img-top card-img" alt="...">
            <div class="card-img-overlay d-flex justify-content-between">
                <p class="card-text text-white ">線上讀書會｜人文史地</p>
                <span class="material-icons text-white fs-1">bookmark_border</span>
            </div>
            <div class="card-body p-4">
                <p class="card-text mb-2 p-0">2021/10/12 13:00 - 15:00</p>
                <h5 class="card-title p-0"><a href="#" class="stretched-link text-dark">《新手貓奴必看》</a></h5>
                <p class="text-dark py-4">線上讀書會的宗旨是希望閱讀、分享不再局限於地點的距離，不論您是在地球的另一邊，我們都很歡迎大家一起來參加！</p>
                <div class="card-footer border-0 bg-transparent p-0" >
                <p class="text-secondary fs-8 m-0">10人參加 ｜ 25人收藏</p>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 rounded-4">
            <img src="@/assets/photo/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg" class="card-img-top card-img" alt="...">
            <div class="card-img-overlay d-flex justify-content-between">
                <p class="card-text text-white ">線上讀書會｜人文史地</p>
                <span class="material-icons text-white fs-1">bookmark_border</span>
            </div>
            <div class="card-body p-4">
                <p class="card-text mb-2 p-0">2021/10/12 13:00 - 15:00</p>
                <h5 class="card-title p-0"><a href="#" class="stretched-link text-dark">《新手貓奴必看》</a></h5>
                <p class="text-dark py-4">線上讀書會的宗旨是希望閱讀、分享不再局限於地點的距離，不論您是在地球的另一邊，我們都很歡迎大家一起來參加！</p>
                <div class="card-footer border-0 bg-transparent p-0" >
                <p class="text-secondary fs-8 m-0">10人參加 ｜ 25人收藏</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    <!-- pagination -->
    <div class="d-flex justify-content-center fs-4 align-items-center py-12 text-secondary">
        <nav aria-label="Page navigation example">
            <div class="d-flex align-items-center">
                <ul class="pagination m-0">
                    <li class="page-item fs-4 rounded-pill">
                        <a class="p-3  bg-transparent border-0" href="#" aria-label="Previous">
                            <span class="material-icons " aria-hidden="true">chevron_left</span>
                        </a>
                    </li>
                    <li class="bg-secondary fs-4  text-white rounded-pill active"><a class="p-3 border-0 text-white" href="#">1</a></li>
                    <li class="page-item fs-4 rounded-pill"><a class="p-3  bg-transparent border-0" href="#">2</a></li>
                    <li class="page-item fs-4 rounded-pill"><a class="p-3  bg-transparent border-0" href="#">3</a></li>
                    <li class="page-item fs-4 rounded-pill"><a class="p-3  bg-transparent border-0" href="#">...</a></li>
                    <li class="page-item fs-4 rounded-pill"><a class="p-3  bg-transparent border-0" href="#">18</a></li>
                    <li class="page-item fs-4 rounded-pill"><a class="p-3  bg-transparent border-0" href="#">19</a></li>
                    <li class="page-item fs-4 rounded-pill"><a class="p-3  bg-transparent border-0" href="#">20</a></li>
                    <li class="page-item fs-4 rounded-pill">
                        <a class="bg-transparent" href="#" aria-label="Next">
                            <span class="material-icons " aria-hidden="true">chevron_right</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>
<component-footer></component-footer>
</template>

<script>
import componentNavbar from '@/components/Layout/Navbar.vue'
import componentFooter from '@/components/Layout/Footer.vue'

export default {
  components: {
    componentNavbar,
    componentFooter
  }
}
</script>
