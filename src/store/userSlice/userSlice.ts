import { AuthService } from "@/shared/service/authService/authService";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  id?: number;
  fullName?: string;
  email: string;
  password: string;
}

export interface IData {
  payload: {
    tokens?: Record<string, string>;
    user?: IUser;
  };
}

interface IInitialStateUsers {
  user: IUser | undefined;
  loading: boolean;
}

const initialStateUsers: IInitialStateUsers = {
  user: undefined,
  loading: false,
};

export const signUp = createAsyncThunk("auth/signUp", async (user: IUser) => {
  try {
    return await AuthService.signUp(user);
  } catch (error) {
    console.log(error);
  }
});

export const loginIn = createAsyncThunk("auth/signIn", async (user: IUser) => {
  try {
    return await AuthService.loginIn(user);
  } catch (error) {
    console.log(error);
  }
});

export const getUser = createAsyncThunk("auth/getUser", async () => {
  return {
    id: 3,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: "",
  };
});

export const userSlice = createSlice({
  name: "auth",
  initialState: initialStateUsers,
  reducers: {
    removeUser: (state) => {
      AuthService.logout();
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      })
      .addCase(loginIn.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { removeUser } = userSlice.actions;

export default userSlice.reducer;
