<template>
    <div>
        <Et :etData="data">
            <v-chart style="width: 1200px;height:600px" :option="chartOption"></v-chart>
        </Et>
    </div>
</template>

<script lang="ts" setup>
import { reactive, provide } from "vue";
import { useRoute } from 'vue-router'
import { THEME_KEY } from "vue-echarts";

import { echartsTelpletItem } from "@/types/base"

provide(THEME_KEY, 'dark')

const route = useRoute()

const data: echartsTelpletItem = {
    title: route.query.title as string,
    desc: `
    
    `
}

const chartOption = reactive({
    title: {
        text: route.query.title
    },
    tooltip: {},
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
            showBackground: true,
            barGap: "0%",
            barCategoryGap: '40%'
        },
        {
            type: 'bar',
            data: [2, 4, 8, 5, 7, 8, 5],
            showBackground: true
        }
    ]
})
</script>

<style lang="scss" scoped></style>