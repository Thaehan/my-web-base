import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import useAppTheme from "Hooks/useAppTheme";
import MainRoutes from "Routes/MainRoutes";
import "Themes/AppFonts.css";

const queryClient = new QueryClient();

function App() {
  const { AppTheme } = useAppTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={AppTheme}>
        <MainRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
