<script setup>
import Instrumental from '@/components/Instrumental.vue';
</script>

<template>
  <div class="pageTopMargin instrumentalsPage">
    <Instrumental v-for="instrumental in instrumentalsJSON.slice().reverse()"
      :soundcloud="instrumental.soundcloudLink"
      :title="instrumental.title"
      :airbit="instrumental.airbit"
    ></Instrumental>
  </div>
</template>

<script>
import instrumentals from '@/assets/instrumentals.json'
export default {
  data() {
    return {
      instrumentalsJSON: instrumentals
    };
  }
}
</script>
<style scoped>
.instrumentalsPage {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
