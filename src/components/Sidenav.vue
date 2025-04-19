<template>
  <div class="sidenav" :class="{ expanded: expanded }">
    <a class="button" @click="toggleExpand">
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

let expanded = ref(false)

const toggleExpand = () => {
  expanded.value = !expanded.value
}
</script>

<style scoped>
.sidenav {
  background-color: #333;
  width: 70px;
  height: 100vh;
  transition: width 0.3s;
}

.sidenav.expanded {
  width: 15%;
}
</style>
