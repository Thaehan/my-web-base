import { createTheme, responsiveFontSizes } from "@mui/material";
import { useSelector } from "react-redux";

import { IRootState } from "Store";

export default function useAppTheme() {
  const mode = useSelector((state: IRootState) => state.system.themeMode);

  const AppTheme = createTheme({
    typography: {
      fontFamily: "Open Sans",
    },
    components: {},
    palette: {
      mode: mode,
      primary: {
        main: "#90E0EF",
        light: "#90E0EF",
        dark: "#000000",
      },
      secondary: {
        main: "#FFFFFF",
        light: "#FFFFFF",
        dark: "#FFFFFF",
      },
    },
  });

  return {
    AppTheme: responsiveFontSizes(AppTheme),
  };
}
