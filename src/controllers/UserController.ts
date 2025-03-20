import { UserModel } from "@/models/UserModel";
import { defineStore } from "pinia";
export class UserController {
  static async getUser(id: number) {
    const user = await UserModel.fetchUserById(id);
    return user;
  }
}
