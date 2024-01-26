import { PaletteMode } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TLanguages } from "Languages";

interface ISystemState {
  themeMode: PaletteMode;
  language: TLanguages;
}

const initialState: ISystemState = {
  themeMode: "light",
  language: "en",
};

export const systemSlice = createSlice({
  name: "system",
  initialState: initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<PaletteMode>) => {
      state.themeMode = action.payload;
    },
    setLanguage: (state, action: PayloadAction<TLanguages>) => {
      state.language = action.payload;
    },
  },
});

export const { setThemeMode, setLanguage } = systemSlice.actions;

export default systemSlice.reducer;
