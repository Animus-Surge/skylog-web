<template>
  <RouterLink :to="to" class="navlink" :class="{ active: isActive, bottom: bottom }">
    <i v-if="icon" class="link_icon bi" :class="icon"></i>
    <span v-if="isExpanded">{{ label }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: null
  },
  isExpanded: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()

const isActive = computed(() => {
  return route.path === props.to
})
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

.navlink.active {
  background-color: #555;
  color: #fa0;
}

.link_icon {
  margin-right: 10px;
  font-size: 1.2em;
}

.link_bottom {
  margin-top: auto;
}

</style>
