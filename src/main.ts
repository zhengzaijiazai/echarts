import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index";
// @ts-ignore
import * as echarts from 'echarts'
import { CanvasRenderer } from "echarts/renderers"

// 第三方全局组件
import VueEcharts from "vue-echarts"

// 自定义全局组件
import TitleText from "./components/titleText/index.vue"
import Et from '@/components/echartsTelplet/index.vue'

// 设置echarts的渲染器还有SVG渲染器
// @ts-ignore
echarts.use([CanvasRenderer])


const app = createApp(App)

app.component("TitleText", TitleText)
app.component("Et", Et)
app.component("v-chart", VueEcharts)

app.use(router)

app.mount('#app')