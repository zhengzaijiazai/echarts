<template>
    <div class="homecrad">
        <h2>{{ title }}</h2>
        <div class="list">
            <div class="item" v-for="(item, index) in dataArr" :key="index" @click="goto(item)">
                <!-- <img :src="item.imgUrl" alt=""> -->
                <div v-if="type == '1'">{{ item.text }}</div>
                <div v-else class="info"><a :href="item.path" target="_blank">{{ item.text }}</a></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { homeCard, homeCardItem } from '@/types/base.ts'

const router = useRouter();

const { type, dataArr, title } = defineProps({
    type: {
        type: String,
        default: 0
    },
    dataArr: {
        type: Object as () => homeCard,
        default: []
    },
    title: {
        type: String,
        required: true
    }
})
const goto = (item: homeCardItem) => {
    //函数体
    if (type == '1') {
        router.push({
            name: item.path,
            query: {
                title: item.text
            }
        })
    }
}
</script>
<style scoped lang="scss">
.homecrad {
    padding: 20px 30px;

    .list {
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        place-items: center;
        row-gap: 20px;
        column-gap: 20px;

        .item {
            width: 100%;
            padding: 10px 0px;
            text-align: center;
            border-radius: 5px;
            background-color: #e5e5e5;
            transition: all 0.3s ease-in-out;
            cursor: pointer;

            &:hover {
                background-color: #80ff02;
            }

            .info {
                width: 100%;
                height: 100%;

                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                    color: #000;
                }
            }
        }
    }
}
</style>