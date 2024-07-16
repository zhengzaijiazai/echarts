<template>
    <div>
        <Et :etData="data">
            <v-chart style="width: 1200px;height:600px" :option="chartOption"></v-chart>
        </Et>
    </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { useRoute } from 'vue-router'

import { echartsTelpletItem } from "@/types/base"

const route = useRoute()

const data: echartsTelpletItem = {
    title: route.query.title as string,
    desc: `
    
    `
}
const Edata = [];
for (let i = 0; i < 5; ++i) {
    Edata.push(Math.round(Math.random() * 200));
}
const chartOption = reactive({
    title: {
        text: route.query.title,
    },
    legend: { show: true },
    tooltip: {},
    xAxis: [
        {
            max: "dataMax"
        }
    ],
    yAxis: [
        {
            type: "category",
            data: ['A', 'B', 'C', 'D', 'E'],
            inverse: true,
            max: 2,
            animationDuration: 300,
            animationDurationUpdate: 300,
        }
    ],
    series: [
        {
            realtimeSort: true,
            type: 'bar',
            data: Edata,
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            }
        }
    ],
    animationDuration: 3000,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
})

const upData = () => {
    //函数体
    for (let i = 0; i < chartOption.series[0].data.length; i++) {
        if (Math.random() > 0.8) {
            chartOption.series[0].data[i] += Math.round(Math.random() * 2000)
        } else {
            chartOption.series[0].data[i] += Math.round(Math.random() * 200)
        }
    }
}

onMounted(() => {
    //函数体
    const timer = setInterval(() => {
        //函数体
        upData()
    }, 2000)
}) 
</script>

<style lang="scss" scoped></style>