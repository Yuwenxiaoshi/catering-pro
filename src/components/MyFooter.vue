<template>
  <div>
    <div class="sp-foot">
      <div class="container">
        <ul class="nav justify-content-center bg-light">
          <li class="nav-item text-center d-none d-lg-block">
            <img src="http://127.0.0.1:3030/img/left.png" alt="" />
          </li>
          <li class="nav-item text-center">
            <a class="nav-link text-black" aria-current="page" href="#">
              <h5 class="mb-0">买家帮助</h5>
            </a>
            <a class="nav-link text-black" aria-current="page" href="#"
              >新手指南</a
            >
            <a class="nav-link text-black" aria-current="page" href="#"
              >服务保障</a
            >
            <a class="nav-link text-black" aria-current="page" href="#"
              >常见问题</a
            >
          </li>
          <li class="nav-item text-center">
            <a class="nav-link text-black" aria-current="page" href="#">
              <h5 class="mb-0">商家帮助</h5>
            </a>
            <a class="nav-link text-black" href="#">商家入驻</a>
            <a class="nav-link text-black" href="#">商家后台</a>
          </li>
          <li class="nav-item text-center">
            <a class="nav-link text-black" aria-current="page" href="#">
              <h5 class="mb-0">关于我们</h5>
            </a>
            <a class="nav-link text-black" href="#">联系我们</a>
            <a class="nav-link text-black" href="#">广告投放</a>
          </li>
          <li class="nav-item text-center d-none d-lg-block">
            <img src="http://127.0.0.1:3030/img/right.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {},
};
</script>

<style lang="scss" scoped></style>
