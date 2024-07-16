const echartsData: any[] = [
    {
        name: "echarts",
        path: "/echarts",
        // @ts-ignore
        component: () => import("@/views/Echarts/index.vue"),
    },
    {
        name: "echarts1",
        path: "/echarts1",
        component: () => import("@/views/Echarts/components/echarts1/index.vue"),
    },
    {
        name: "echarts2",
        path: "/echarts2",
        component: () => import("@/views/Echarts/components/echarts2/index.vue"),
    },
    {
        name: "echarts3",
        path: "/echarts3",
        component: () => import("@/views/Echarts/components/echarts3/index.vue"),
    },
    {
        name: "echarts4",
        path: "/echarts4",
        component: () => import("@/views/Echarts/components/echarts4/index.vue"),
    },
    {
        name: "echarts5",
        path: "/echarts5",
        component: () => import("@/views/Echarts/components/echarts5/index.vue"),
    },
    {
        name: "echarts6",
        path: "/echarts6",
        component: () => import("@/views/Echarts/components/echarts6/index.vue"),
    },
]

export default echartsData