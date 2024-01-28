import { PaletteMode } from "@mui/material";

import { TLanguages } from "./Language";

export interface TSystemState {
  themeMode: PaletteMode;
  language: TLanguages;
}
