<template>
    <div>
        <Et :etData="data">
            <v-chart style="width: 1200px;height:600px" :option="chartOption"></v-chart>
        </Et>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRoute } from 'vue-router'

import { echartsTelpletItem } from "@/types/base"

const route = useRoute()

const data: echartsTelpletItem = {
    title: route.query.title as string,
    desc: `
        dataset选项是一个综合对象,里面有一个source属性(一个数组),在里面设置图表的数据,
        source是一个二元数组,里面的第一列是关于x轴的,第二列到最后一列是关于y轴的数据暂时
        source的第一行数据是作为legend(在图表里面显示一排可点击的按钮,然后选择要看的数据的品种)的标签,
        在定义xAxis的时候定义一个type就够了,然后series里面也设置type属性就可以但是要设置多个对象,
        多个(source的行数-1).
        legend对应的是series里面有多少个对象.
        series里面如果对象太多但是没有对应的数据回取第一个数据
    `
}


const chartOption = reactive({
    //标题名字
    title: {
        text: route.query.title
    },
    // 可点击区域
    legend: {},
    // 鼠标移上去的提示
    tooltip: {

    },
    // X轴
    xAxis: [
        {
            type: "category",
            gridIndex: 0,
        },
        {
            type: "category",
            gridIndex: 1,
        },
    ],
    // Y轴
    yAxis: [
        {
            gridIndex: 0,
        },
        {
            gridIndex: 1,
        }
    ],
    grid: [
        { bottom: '55%' }, { top: '55%' },
    ],
    // 数据集
    dataset: {
        source: [
            ["product", "2015", "2016", "2017", "2018"],
            ["MatchaLatte", 5, 6, 4, 8],
            ["LiHua", 15, 16, 14, 18],
            ["Tom", 25, 26, 24, 28],
            ["Jcak", 35, 36, 34, 38],
        ],
    },
    // 图表类型  
    series: [
        // 这几个系列会出现在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
        { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 0, yAxisIndex: 0 },
        { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 0, yAxisIndex: 0 },
        { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 0, yAxisIndex: 0 },
        // 这几个系列会出现在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
        { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', seriesLayoutBy: 'column', xAxisIndex: 1, yAxisIndex: 1 },
        // 这几个系列会出现在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
    ]
})
</script>

<style lang="scss" scoped></style>