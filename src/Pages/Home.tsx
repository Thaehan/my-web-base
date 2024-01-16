import { Button, Container, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { setThemeMode } from "Store/Slices/SystemSlice";
import useAppTheme from "Hooks/useAppTheme";

export default function Home() {
  const dispatch = useDispatch();
  const { currentMode } = useAppTheme();

  const onClickChangeTheme = () => {
    if (currentMode === "dark") {
      dispatch(setThemeMode("light"));
      return;
    }
    dispatch(setThemeMode("dark"));
  };

  return (
    <Container>
      <Typography
        color='primary'
        style={{
          backgroundColor: "cyan",
        }}>
        Home
      </Typography>
      <Typography color='secondary'>Home</Typography>
      <Button onClick={onClickChangeTheme} color='secondary'>
        Change theme mode
      </Button>
    </Container>
  );
}
