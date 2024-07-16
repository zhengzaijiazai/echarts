<template>
    <div class="card">
        <div class="title space">
            <h1> <span class="back" @click="goBack"> <- </span> {{ etData?.title }}</h1>
        </div>
        <div class="desc space">
            <h2>详细描述:</h2>
            <p class="texts">{{ etData?.desc == '' ? '暂无描述' : etData?.desc }}</p>
        </div>
        <div class="content space">
            <h2>图表如下:</h2>
            <div class="content_slot">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { echartsTelpletItem } from '@/types/base'

const router = useRouter()

const { etData } = defineProps({
    etData: {
        type: Object as () => echartsTelpletItem,
        requires: true
    }
})

const goBack = () => {
    router.back()
}
</script>

<style lang="scss" scoped>
.card {
    .title {
        .back {
            cursor: pointer;
            color: green;
            font-weight: bolder;
            font-size: larger;
            margin-right: 20px;
        }
    }

    .content {
        width: 100%;
        height: 100%;

        .content_slot {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .desc {
        .texts {
            margin-top: 10px;
            font-size: 20px;
            text-indent: 2em;
        }
    }

    .space {
        margin: 20px auto;
    }
}
</style>