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
        就是将两条相同的数据相加起来,显示总和,但是不同数据使用不用颜色来代替
    `
}

const chartOption = reactive({
    title: {
        text: route.query.title
    },
    tooltip: {},
    legend: {},
    xAxis: [
        {
            type: "value"
        }
    ],
    yAxis: [

        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    ],
    series: [
        {
            type: 'bar',
            data: [23, 24, 18, 25, 27, 28, 25],
            stack: 'x'
        },
        {
            type: 'bar',
            data: [2, 4, 8, 5, 7, 8, 5],
            stack: 'x'
        }
    ]
})
</script>

<style lang="scss" scoped></style>