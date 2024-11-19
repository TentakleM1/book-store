import axios from "axios";
import { axiosDefault } from "@/shared/api/axiosDefault";
import { IUser } from "@/store/userSlice/userSlice";

export const registration = async (user: IUser) => {
  try {
    const res = await axiosDefault.post("/auth/signup", user);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error", error.response?.data.message);
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const authorization = async (user: IUser) => {
  try {
    const res = await axiosDefault.post("/auth/signin", user);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error", error.response?.data.message);
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
};