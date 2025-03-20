// src/store/themes/themeStore.ts
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    primaryColor: '#3498db',  // Cor primária padrão
    secondaryColor: '#2ecc71', // Cor secundária padrão
    font: 'Roboto, sans-serif', // Fonte padrão
    logoUrl: '', // URL do logo personalizado
  }),
  actions: {
    setPrimaryColor(color: string) {
      this.primaryColor = color;
    },
    setSecondaryColor(color: string) {
      this.secondaryColor = color;
    },
    setFont(font: string) {
      this.font = font;
    },
    setLogoUrl(url: string) {
      this.logoUrl = url;
    },
  },
});
