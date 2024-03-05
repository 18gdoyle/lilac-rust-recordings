<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import MovingGradient from '@/components/MovingGradient.vue';
</script>

<template>
  <NavBar />
  <MovingGradient></MovingGradient>
  <RouterView />
</template>

<style scoped>

</style>
