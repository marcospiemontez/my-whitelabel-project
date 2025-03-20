<template>
  <header>
    <img :src="logoUrl" alt="Logo" />
  </header>
</template>

<script setup lang="ts">
import { useSettingsStore } from '@/store/settings';
import { computed } from 'vue';

const settingsStore = useSettingsStore();
const logoUrl = computed(() => settingsStore.logoUrl || '/default-logo.png');
</script>
