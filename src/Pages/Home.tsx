import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Flex from "Components/Flex";
import { setThemeMode } from "Store/Slices/SystemSlice";
import { IRootState } from "Store";

export default function Home() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: IRootState) => state.system.themeMode);

  return (
    <div>
      <Typography color='primary'>Home</Typography>
      <Typography color='secondary'>Home</Typography>
      <Flex />
      <Button
        title='Change theme'
        onClick={() => {
          if (themeMode === "dark") {
            dispatch(setThemeMode("light"));
            return;
          }
          dispatch(setThemeMode("dark"));
        }}
      />
    </div>
  );
}
