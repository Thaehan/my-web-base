import { createTheme, responsiveFontSizes } from "@mui/material";
import { useSelector } from "react-redux";

import { IRootState } from "Store";
import { DARK_COLOR_SET, LIGHT_COLOR_SET } from "Themes/Colors";
import COMPONENT_OPTIONS from "Themes/Components";
import TYPOGRAPHY_OPTIONS from "Themes/Typographies";

export default function useAppTheme() {
  const mode = useSelector((state: IRootState) => state.system.themeMode);

  const AppTheme = createTheme({
    typography: TYPOGRAPHY_OPTIONS,
    components: COMPONENT_OPTIONS,
    palette: mode === "light" ? LIGHT_COLOR_SET : DARK_COLOR_SET,
  });

  return {
    AppTheme: responsiveFontSizes(AppTheme),
    currentMode: mode,
  };
}
