import { authorization, registration } from "@/shared/api/authApi/authApi";
import { IUser } from "@/store/userSlice/userSlice";

export class AuthService {
  static async loginIn(user: IUser) {
    try {
      const data = await authorization(user);
      localStorage.setItem("token", data.payload.tokens.token);
      localStorage.setItem("refresh_token", data.payload.tokens.refresh_token);
      return data.payload.user;
    } catch (error) {
      console.log(error);
    }
  }

  static async signUp(user: IUser) {
    try {
      return await registration(user);
    } catch (error) {
      console.log(error);
    }
  }

  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
  }

  static async refreshToken() {}
}
