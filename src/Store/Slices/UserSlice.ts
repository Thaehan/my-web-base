import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  username?: string;
  token?: string;
}

const initialState: IUserState = {};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    removeUser: (state) => {
      state.username = "";
      state.token = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
