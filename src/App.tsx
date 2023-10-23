import { ThemeProvider } from "@mui/material";

import useAppTheme from "Themes";
import Home from "Pages/Home";
import "Themes/AppFonts.css";

function App() {
  const { AppTheme } = useAppTheme();

  return (
    <ThemeProvider theme={AppTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
