<template>
  <!--TODO: add profile and logo -->
  <div class="sidenav" :class="{ expanded: expanded }">
    <Expandlink @click="toggleExpand" :isExpanded="expanded" />
    <hr>
    <Navlink
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      :label="link.label"
      :icon="link.icon"
      :isExpanded="expanded"
      :bottom="link.bottom"
    />
  </div>

  <div class="overlay" :class="{ darkened: expanded }" @click="toggleExpand"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import Expandlink from './Expandlink.vue'
import Navlink from './Navlink.vue'

let expanded = ref(false)

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: 'bi-house' },
  { to: '/map', label: 'Map', icon: 'bi-map' },
  { to: '/log', label: 'Logbook', icon: 'bi-journal-text' },
  { to: '/plans', label: 'Plans', icon: 'bi-file-earmark-text' },
  { to: '/aircraft', label: 'Aircraft', icon: 'bi-airplane' },
  { to: '/settings', label: 'Settings', icon: 'bi-gear', bottom: true },
  { to: '/logout', label: 'Logout', icon: 'bi-box-arrow-right', bottom: true }
]

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
  overflow: hidden;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.sidenav.expanded {
  width: 15%;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1;

  transition: background-color 0.3s linear;

  pointer-events: none;
}

.overlay.darkened {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: auto;
}
</style>
