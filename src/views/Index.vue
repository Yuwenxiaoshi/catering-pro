<template>
  <div>
    <div class="sp-carousel" v-if="data">
      <div class="container">
        <div
          class="carousel slide"
          data-bs-ride="carousel"
          id="xz-carousel"
          data-bs-interval="2000"
        >
          <!-- 图片区 -->
          <div class="carousel-inner" id="lbt">
            <div class="carousel-item active">
              <a href="#"
                ><img :src="this.data.data[0].img" alt="" class="d-block w-100"
              /></a>
            </div>
            <div class="carousel-item">
              <a href="#"
                ><img :src="this.data.data[1].img" alt="" class="d-block w-100"
              /></a>
            </div>
            <div class="carousel-item">
              <a href="#"
                ><img :src="this.data.data[2].img" alt="" class="d-block w-100"
              /></a>
            </div>
            <div class="carousel-item">
              <a href="#"
                ><img :src="this.data.data[3].img" alt="" class="d-block w-100"
              /></a>
            </div>
          </div>
          <!-- 向左区 -->
          <button
            class="carousel-control-prev"
            data-bs-target="#xz-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <!-- 向右区 -->
          <button
            class="carousel-control-next"
            data-bs-target="#xz-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
          <!-- 控制区 -->
          <ul class="carousel-indicators">
            <li
              data-bs-target="#xz-carousel"
              data-bs-slide-to="0"
              class="active zdy-dian"
            ></li>
            <li
              data-bs-target="#xz-carousel"
              data-bs-slide-to="1"
              class="zdy-dian"
            ></li>
            <li
              data-bs-target="#xz-carousel"
              data-bs-slide-to="2"
              class="zdy-dian"
            ></li>
            <li
              data-bs-target="#xz-carousel"
              data-bs-slide-to="3"
              class="zdy-dian"
            ></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 网页主体 -->
    <div class="spindex">
      <div class="container">
        <h2>热销食品</h2>
        <!-- 第一行主体main -->
        <div class="spmain" id="rx" v-if="rx">
          <div class="row">
            <!-- 第一行第一列 -->
            <div class="col-xl-7 col-lg-6 col-12 mb-2">
              <!-- 借助天沟分缝 -->
              <div style="height: 376px" class="position-relative bg-light">
                <img
                  :src="this.rx[0].img"
                  alt=""
                  class="position-absolute"
                  style="bottom: 20px; right: 3px"
                />
                <div class="position-absolute" style="top: 20px; left: 20px">
                  <h4>{{ this.rx[0].title }}</h4>
                  <p>{{ this.rx[0].subtitle }}</p>
                  <button class="btn btn-outline-warning">查看详情</button>
                </div>
              </div>
            </div>
            <!-- 第一行第二列 -->
            <div class="col-xl-5 col-lg-6 col-12 mb-2">
              <!-- 借助天沟分缝 -->
              <div style="height: 376px" class="position-relative bg-light">
                <img
                  :src="this.rx[1].img"
                  alt=""
                  class="position-absolute"
                  style="bottom: 20px; right: 3px"
                />
                <div class="position-absolute" style="top: 20px; left: 20px">
                  <h4>{{ this.rx[1].title }}</h4>
                  <p>{{ this.rx[1].subtitle }}</p>
                  <button class="btn btn-outline-warning">查看详情</button>
                </div>
              </div>
            </div>
          </div>
          <!-- 第二行 -->
          <div class="row">
            <!--左侧列表块 -->
            <div class="col-xl-5 col-12 mb-3">
              <div style="height: 234px" class="position-relative bg-light">
                <img
                  :src="this.rx[2].img"
                  alt=""
                  class="position-absolute"
                  style="bottom: 20px; right: 3px"
                />
                <div class="position-absolute" style="top: 20px; left: 20px">
                  <h4>{{ this.rx[2].title }}</h4>
                  <p>{{ this.rx[2].subtitle }}</p>
                  <button class="btn btn-outline-warning">查看详情</button>
                </div>
              </div>
            </div>
            <!-- 右侧嵌套三小块 -->
            <div class="col-xl-7 col-12">
              <div class="row">
                <div class="col-md-4 col-12 mb-3" style="height: 234px">
                  <div class="card bg-light border-0">
                    <img
                      :src="this.rx[3].img"
                      alt=""
                      style="width: 111px; margin: 0 auto"
                    />
                    <div class="body">
                      <h4 class="card-title">{{ this.rx[3].title }}</h4>
                      <p class="text-truncate">{{ this.rx[3].subtitle }}</p>
                      <button class="btn btn-outline-warning w-100">
                        查看详情
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-12 mb-3" style="height: 234px">
                  <div class="card bg-light border-0">
                    <img
                      :src="this.rx[1].img"
                      alt=""
                      style="width: 111px; margin: 0 auto"
                    />
                    <div class="body">
                      <h4 class="card-title">{{ this.rx[1].title }}</h4>
                      <p class="text-truncate">{{ this.rx[1].subtitle }}</p>
                      <button class="btn btn-outline-warning w-100">
                        查看详情
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-12 mb-3" style="height: 234px">
                  <div class="card bg-light border-0">
                    <img
                      :src="this.rx[2].img"
                      alt=""
                      style="width: 111px; margin: 0 auto"
                    />
                    <div class="body">
                      <h4 class="card-title">{{ this.rx[2].title }}</h4>
                      <p class="text-truncate">{{ this.rx[2].subtitle }}</p>
                      <button class="btn btn-outline-warning w-100">
                        查看详情
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>推荐食品</h2>
        <!-- 第一行主体main -->
        <div class="spmain" v-if="tj">
          <div class="row" id="tj">
            <div
              class="col-6 mb-3 col-md-3"
              style="height: 234px"
              v-for="(i, n) in tj"
              :key="n"
            >
              <div class="card bg-light border-0">
                <img :src="i.img" alt="" style="width: 111px; margin: 0 auto" />
                <div class="body">
                  <h4 class="card-title">{{ i.title }}</h4>
                  <p class="text-truncate">{{ i.subtitle }}</p>
                  <button class="btn btn-outline-warning w-100">
                    查看详情
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>活动食品</h2>
        <!-- 第一行主体main -->
        <div class="spmain">
          <div class="row" id="hd" v-if="hd">
            <div
              class="col-6 mb-3 col-md-3"
              style="height: 234px"
              v-for="(i, n) in hd"
              :key="n"
            >
              <div class="card bg-light border-0">
                <img :src="i.img" alt="" style="width: 111px; margin: 0 auto" />
                <div class="body">
                  <h4 class="card-title">{{ i.title }}</h4>
                  <p class="text-truncate">{{ i.subtitle }}</p>
                  <button class="btn btn-outline-warning w-100">
                    查看详情
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      rx: null,
      tj: null,
      hd: null,
    };
  },
  mounted() {
    this.getData();
    this.getRx();
    this.getTj();
    this.getHd();
  },
  methods: {
    getData() {
      const url = "http://127.0.0.1:3030/v2/pro/lbt";
      this.axios.get(url).then((res) => {
        this.data = res.data;
      });
    },
    getRx() {
      const url = "http://127.0.0.1:3030/v2/pro/rx";
      this.axios.get(url).then((res) => {
        this.rx = res.data.data;
      });
    },
    getTj() {
      const url = "http://127.0.0.1:3030/v2/pro/hd";
      this.axios.get(url).then((res) => {
        console.log(res.data.data);
        this.tj = res.data.data;
      });
    },
    getHd() {
      const url = "http://127.0.0.1:3030/v2/pro/hd";
      this.axios.get(url).then((res) => {
        console.log(res.data.data);
        this.hd = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
