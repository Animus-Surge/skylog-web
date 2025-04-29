<template>
  <a class="navlink" :class="{expanded: isExpanded}" @click="button_click">
    <i class="nav_icon bi" :class="isExpanded ? 'bi-x-lg' : 'bi-list'"></i>
    <span v-if="isExpanded" class="nav_text">Expand</span>
  </a>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  isExpanded: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const button_click = () => {
  emit('click')
}

</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.navlink {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s;
  transition: color 0.3s;
}

.navlink:hover {
  background-color: #444;
}

.nav_icon {
  margin-right: 10px;
  font-size: 1.7em;
}

.expanded {
  background-color: #444;
  color: #fa0;
}
</style>
