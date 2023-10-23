import { PaletteMode } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SystemState {
  themeMode: PaletteMode;
}

const initialState: SystemState = {
  themeMode: "light",
};

export const systemSlice = createSlice({
  name: "system",
  initialState: initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<PaletteMode>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setThemeMode } = systemSlice.actions;

export default systemSlice.reducer;
