import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TUserState } from "Types";

const initialState: TUserState = {};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUserState>) => {
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
