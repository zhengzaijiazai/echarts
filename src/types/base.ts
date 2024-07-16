// homeCard数据类型
export interface homeCardItem {
    id: number;
    text: string;
    path: string;
}
export type homeCard = homeCardItem[]

// echarts数据类型
export interface echartsDataItem {
    id: number;
    dayname: string;
    data: homeCard
}
export type echartsData = echartsDataItem[]


// echartsTelplet组件 数据类型
export interface echartsTelpletItem {
    title: string;
    desc?: string;
}


