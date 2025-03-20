// src/store/settings.ts
import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    logoUrl: '',  // URL para o logo personalizado
  }),
  actions: {
    setLogoUrl(url: string) {
      this.logoUrl = url;
    },
  },
});
