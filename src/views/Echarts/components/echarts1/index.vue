<template>
    <div>
        <Et :etData="data">
            <div id="echarts1" style="width: 800px;height: 500px"></div>
        </Et>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import * as echarts from "echarts"
import { useRoute } from "vue-router";

const route = useRoute()

// 引入组件和组件数据类型
import { echartsTelpletItem } from '@/types/base'

// 传入组件的数据
const data: echartsTelpletItem = {
    title: route.query.title as string,
    desc: `
        如果图标不多可以使用按需引入，但是按需引入的注意点：
            1.由于我们需要获取元素交给echarts，就是获取DOM，如果是在vue3的setup语法糖里面，我们需要放在
            onMounted生命周期里面，否则会获取不到DOM，因为setup的执行的时候还没有渲染页面元素，所以获取不到。
            2.引入echarts的时候，需要使用到echarts.init()方法，这个方法需要传入一个参数，这个参数是获取
            echarts的DOM，给echarts一个容器渲染图标
            3.需要设定图标的数据，echarts的setOption()方法，这个方法需要传入一个对象，这个对象就是图标的配置项。
            4.需要设定图标的高度和宽度
    `
}
onMounted(() => {
    // 按需引入的echarts
    let myChart = echarts.init(document.getElementById("echarts1"))
    myChart.setOption({
        title: {
            text: '按需引入'
        },
        tooltip: {

        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            },
            {
                name: '进量',
                type: 'bar',
                data: [15, 20, 36, 15, 15, 25]
            },
            {
                name: '出口',
                type: 'bar',
                data: [15, 20, 36, 15, 15, 25]
            }
        ]
    })
})


</script>

<style lang="scss" scoped></style>