<template>
    <div>
        <Et :etData="data">
            <button @click="handleClick">点击切换数据</button>
            <v-chart class="chart" :option="chartOption"></v-chart>
        </Et>
    </div>
</template>

<script lang="ts" setup>
import { reactive, provide } from 'vue';
import { THEME_KEY } from "vue-echarts"
import { useRoute } from 'vue-router';

import { echartsTelpletItem } from '@/types/base'

provide(THEME_KEY, 'dark')

const route = useRoute()

const data: echartsTelpletItem = {
    title: route.query.title as string,
    desc: `
        如果我们自己去全局引入echarts的话，会很麻烦，所以需要借助VueEcharts这个库配合使用
        需要下载echarts和VueEcharts(下载时名字叫vue-echarts),全局引入需要去main.ts或者main.js中引入
        然后注册vue-echarts为全局组件即可(一般名字叫做v-chart),还需要再里面引入echarts(CanvasRenderer或者SVGRenderer)
        的渲染器，然后通过echarts.use(参数为一个数组)来进行设置渲染器不然会报错，
        错误为(Renderer 'undefined' is not imported. Please import it first)
        设置图表主题,在使用图表的vue文件里面引入THEME_KEY从vue-echarts，通过provide(THEME_KEY, 'dark')来设置主题
    `
}
const chartOption = reactive({
    title: {
        text: '全局引入'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
        {
            name: "销量",
            type: 'bar',
            data: [10, 25, 24, 60, 40, 50]
        }
    ]
})

const handleClick = () => {
    //函数体
    chartOption.series[0].data = [15, 20, 25, 65, 45, 55]
}
</script>

<style lang="scss" scoped>
.chart {
    width: 800px;
    height: 500px;
}
</style>