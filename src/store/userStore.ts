import { defineStore } from 'pinia';
import { UserModel } from '@/models/UserModel';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    async fetchUser(id: number) {
      this.user = await UserModel.fetchUserById(id);
    },
  },
});
