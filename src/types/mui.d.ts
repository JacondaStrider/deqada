import {
  ButtonPropsVariantOverrides,
  InputLabelOwnProps,
  PaletteColor,
  PaletteOptions,
  SimplePaletteColorOptions,
} from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

// declare module "@mui/material/styles" {
//     interface TypeBackground extends TypeBackground {
//         a75: string;
//     }
// }

declare module "@mui/material/InputLabel" {
  interface InputLabelOwnProps extends InputLabelOwnProps {
    above?: boolean;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    inactive: true;
  }
}

declare module "@mui/material/styles" {
  interface SimplePaletteColorOptions extends SimplePaletteColorOptions {
    a10?: string;
    a20?: string;
    a30?: string;
  }

  interface PaletteColor extends PaletteColor {
    a10?: string;
    a20?: string;
    a30?: string;
  }

  interface PaletteOptions extends PaletteOptions {
    inactive: PaletteColorOptions;
  }
}
