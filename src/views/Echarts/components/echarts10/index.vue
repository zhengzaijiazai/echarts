<template>
    <div>
        <Et :etData="data">

        </Et>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRoute } from 'vue-router'

import { echartsTelpletItem } from "@/types/base"

const route = useRoute()

const data: echartsTelpletItem = {
    title: route.query.title as string,
    desc: `
    
    `
}
</script>

<style lang="scss" scoped></style>