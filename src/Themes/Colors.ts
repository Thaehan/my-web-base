import { PaletteOptions } from "@mui/material";

export const DARK_COLOR_SET: PaletteOptions = {
  mode: "light",
  primary: {
    light: "#ffef62",
    main: "#ffeb3b",
    dark: "#b2a429",
    contrastText: "#fff",
  },
  secondary: {
    light: "#a2cf6e",
    main: "#8bc34a",
    dark: "#618833",
    contrastText: "#fff",
  },
};

export const LIGHT_COLOR_SET: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#90E0EF",
    light: "#90E0EF",
    dark: "#000000",
    contrastText: "#fff",
  },
  secondary: {
    main: "#FFFFFF",
    light: "#FFFFFF",
    dark: "#FFFFFF",
    contrastText: "#fff",
  },
};
