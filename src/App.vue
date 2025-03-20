<template>
  <div :style="themeStyles">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from './store/themes/themeStore';
import { computed } from 'vue';

const themeStore = useThemeStore();
const themeStyles = computed(() => ({
  '--primary-color': themeStore.primaryColor,
  '--secondary-color': themeStore.secondaryColor,
  '--font-family': themeStore.font,
  backgroundImage: `url(${themeStore.logoUrl})`,
}));
</script>

<style scoped>
/* Use as variáveis CSS customizadas */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-family: 'Roboto', sans-serif;
}

body {
  font-family: var(--font-family);
}
</style>
