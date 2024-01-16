import {
  PaletteOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { useSelector } from "react-redux";

import { IRootState } from "Store";
import { DARK_COLOR_SET, LIGHT_COLOR_SET } from "./Colors";

export default function useAppTheme() {
  const mode = useSelector((state: IRootState) => state.system.themeMode);
  const currentTheme: PaletteOptions =
    mode === "light" ? LIGHT_COLOR_SET : DARK_COLOR_SET;

  const AppTheme = createTheme({
    typography: {
      fontFamily: "Open Sans",
    },
    components: {},
    palette: {
      mode: mode,
      ...currentTheme,
    },
  });

  return {
    AppTheme: responsiveFontSizes(AppTheme),
  };
}
