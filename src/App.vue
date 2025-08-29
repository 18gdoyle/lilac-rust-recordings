<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import MovingGradient from '@/components/MovingGradient.vue';
import Footer from '@/components/Footer.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <NavBar />
  <MovingGradient></MovingGradient>
  <div class="navBarMargin"></div>
  <div class="pageContainer">
    <RouterView />
  </div>
  <Footer v-if="route.path !== '/instrumentals'"></Footer>
</template>

<style scoped>
.navBarMargin {
  height: 75px;
}

.pageContainer {
  min-height: calc(100vh - 225px);
}

@media (max-width: 850px) {
  .navBarMargin {
    height: 60px;
  }

  .pageContainer {
    min-height: calc(100vh - 210px);
  }
}
</style>
