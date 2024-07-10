<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center">
        <v-app-bar-title>
          <img src="./assets/tomato.png">
          番茄鐘
        </v-app-bar-title>
        <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-format-list-bulleted" to="/list">事項</v-btn>
        <v-btn prepend-icon="mdi-cog" to="/settings">設定</v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <!-- Component = 目前路由應該顯示的元件 -->
      <router-view v-slot="{ Component }">
        <keep-alive include="index">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
//
</script>

<style scoped lang="scss">
.v-app-bar-title img{
  width: 20px;
}

.v-app-bar{
  background: rgb(204, 37, 3);
}

.v-main{
  background: rgb(238, 102, 75);
}

</style>
