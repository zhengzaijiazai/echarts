<template>
    <div class="titletext">

        <h1><span v-if="title != '首页'" class="back" @click="back"><- </span> {{ title }}</h1>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const back = () => {
    router.back()
}

const { title } = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.titletext {
    padding: 20px 20px;
    background-color: lightblue;

    h1 {
        .back {
            cursor: pointer;
        }
    }
}
</style>