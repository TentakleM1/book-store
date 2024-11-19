import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  id?: number;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  birthDate: string;
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
  user: {
    id: 1,
  firstName: 'dsd',
  lastName: '',
  email: '',
  password: '',
  birthDate: ''
  },
  loading: false,
};

export const signUp = createAsyncThunk("auth/signUp", async () => {
  return {
    id: 3,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: ''
  };
});

export const signIn = createAsyncThunk("auth/signIn", async () => {
    return {
        id: 3,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthDate: ''
      };
});

export const getUser = createAsyncThunk("auth/getUser", async () => {
    return {
        id: 3,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthDate: ''
      };
});

export const userSlice = createSlice({
  name: "auth",
  initialState: initialStateUsers,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<IUser>) => {
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

export default userSlice.reducer;
