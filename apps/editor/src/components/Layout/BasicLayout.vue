<template>
  <div class="w-100%">
    <!-- 网站 tailwin的 头部   -->
    <div class="flex justify-between w-100% bg-[#fff9] h-[50px]">
      <div class="logo flex p-1.5 items-center">
        <img :src="logoPng" alt="" class="w-[50px] h-[50px]">
        <h2>活动页生成</h2>
      </div>
    </div>
    <div class="w-100% flex justify-between bg-[grey]">
      <div class="w-[300px] h-[calc(100vh-50px)] overflow-hidden">
        <LeftContent></LeftContent>
      </div>
      <div class="flex-1 h-[calc(100vh-50px)] overflow-hidden bg-[pink]">
        <MainContent></MainContent>
      </div>


      <!--    <RightContent></RightContent>-->
    </div>
  </div>
</template>
<script setup lang="ts">
import logoPng from '@/assets/images/2024_logo.png'
import LeftContent from './LeftContent/index.vue';
import MainContent from './MainContent/index.vue';
</script>