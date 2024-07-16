<template>
    <div class="home">
        <TitleText title="首页" />
        <!-- <div class="home_item">学习内容区域</div>
        <div class="home_item">学习网站地址</div> -->
        <HomeCard title="学习内容区域" :dataArr="data1" type="1" />
        <HomeCard title="学习网站地址" :dataArr="data2" type="2" />
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import HomeCard from "@/components/homeCard/index.vue"
import type { homeCard } from "@/types/base"

const data1: homeCard = [
    {
        id: 1,
        text: 'echarts',
        path: 'echarts'
    }
]
const data2 = [
    {
        id: 1,
        text: 'echarts官网',
        path: 'https://echarts.js.cn/zh/index.html'
    },
    {
        id: 2,
        text: 'vue官网',
        path: 'https://cn.vuejs.org/'
    },
    {
        id: 3,
        text: 'react中文文档',
        path: 'https://react.docschina.org/'
    },
    {
        id: 4,
        text: 'npm官网',
        path: 'https://www.npmjs.com/'
    },
]

</script>
<style lang="scss" scoped>
.home {
    .home_item {
        padding: 20px 30px;
    }
}
</style>