<template>
  <Sidenav />
  <div class="main">
    <!-- header -->
    <RouterView />
    <!-- footer -->
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import Sidenav from './components/Sidenav.vue'
</script>

<style scoped>

.main {
  margin-left: 70px;
}
</style>
