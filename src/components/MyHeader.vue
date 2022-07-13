<template>
  <div>
    <!-- nav搜索页面 -->
    <div class="sp-header navbar navbar-expand-lg navbar-light bg-light mb-1">
      <div class="container">
        <!-- logo -->
        <a href="http://127.0.0.1:3030/header.html" class="navbar-brand">
          <img src="http://127.0.0.1:3030/img/logo.png" alt=""
        /></a>
        <!-- 小菜单 -->
        <button
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#big-menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- 大菜单 -->
        <div
          id="big-menu"
          class="collapse navbar-collapse justify-content-between"
        >
          <!-- 搜索完全自定义样式 -->
          <div
            class="xz-search w-50 border border-warning d-flex justify-content-between"
            style="height: 34px"
          >
            <input
              type="text"
              class="border border-0 w-75 bg-transparent"
              style="outline: none"
              id="cxmsg"
            />
            <span
              class="bi-search me-2 text-warning"
              style="line-height: 34px"
              id="cx"
            ></span>
          </div>
          <!-- 右侧菜单 -->
          <ul class="nav nav-pills" id="usernav"></ul>
        </div>
      </div>
    </div>
    <!-- nav导航文字 -->
    <div class="sp-nav mb-2">
      <div class="container">
        <ul class="nav bg-light">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-black">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/activity" class="nav-link text-black"
              >活动中心</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/alllist" class="nav-link text-black"
              >商品列表</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
