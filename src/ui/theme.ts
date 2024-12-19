import { createTheme } from "@mui/material/styles";

import components from "./components";
import palette from "./palette";
import typography from "./typography";

export default function theme() {
  return createTheme({
    palette,
    typography,
    components,
  });
}
