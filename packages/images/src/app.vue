<template>

    <img :src="src" alt="" />
</template>
<script lang="ts" setup>
import {defineProps} from 'vue';

const {src} = defineProps<{
    src:string
}>()

</script>