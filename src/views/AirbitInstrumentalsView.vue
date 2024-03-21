<script setup>
import LoadingWheel from '@/components/LoadingWheel.vue';
</script>
<template>
    <div class="instrumentalsPage">
        <iframe id="airbit_infinity" src="https://lilacrust.infinity.airbit.com?config_id=15306&embed=1" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
    </div>
    <div style="height: 100vh; width: 100vw; position: fixed; top: 0; left: 0; display: flex; justify-content: center; align-items: center; z-index: 1;">
        <LoadingWheel></LoadingWheel>
    </div>
</template>

<style scoped>
    .instrumentalsPage {
        position: relative;
        margin-top: max(8vh, 50px);
        height: min(92vh, calc(100vh - 50px));
        overflow: hidden;
        z-index: 5;
    }
</style>
