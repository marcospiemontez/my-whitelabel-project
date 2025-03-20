import axios from 'axios';

export class UserModel {
  static async fetchUserById(id: number) {
    try {
      const response = await axios.get(`/api/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  }
}
