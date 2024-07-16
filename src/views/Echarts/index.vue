<template>
    <div>
        <TitleText title="echarts" />
        <HomeCard :title="item.dayname" :dataArr="item.data" type="1" v-for="item in data1" :key="item.id" />
    </div>
</template>

<script lang="ts" setup>
import HomeCard from "@/components/homeCard/index.vue"
import type { echartsData } from "@/types/base"

const data1: echartsData = [
    {
        id: 1,
        dayname: "第一天学习 引入",
        data: [
            {
                id: 1,
                text: '局部引入',
                path: 'echarts1'
            },
            {
                id: 2,
                text: '全局引入',
                path: 'echarts2'
            }
        ]
    },
    {
        id: 2,
        dayname: "第二天学习",
        data: [
            {
                id: 1,
                text: 'dataset数据集',
                path: 'echarts3'
            },
            {
                id: 2,
                text: '基本柱状图',
                path: 'echarts4'
            },
            {
                id: 3,
                text: '堆叠柱状图',
                path: 'echarts5'
            },
            {
                id: 4,
                text: '动态排序柱状图',
                path: 'echarts6'
            }
        ]
    }
]


</script>

<style lang="scss" scoped></style>