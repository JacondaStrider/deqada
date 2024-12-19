import type { PaletteOptions } from "@mui/material";

const palette: PaletteOptions = {
  text: {
    disabled: "#9a9a9a",
  },
  inactive: {
    main: "#6e6e6e",
  },
  warning: {
    main: "#ff9146",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#0095e1",
    contrastText: "#9B9C9D",
    // main: '#6e6e6e',
  },
  primary: {
    main: "#00AEFF",
    a30: "#ed87044d",
    a20: "#ed870433",
    a10: "#ed87041a",
    contrastText: "#fff",
  },
  // mode: 'light',
  // info: {
  //     main: '#0071e3',
  // },
  error: {
    main: "#ed4d4d",
    a30: "#ed4d4d4d",
    a20: "#ed4d4d33",
    a10: "#ed4d4d1a",
    contrastText: "#ffffff",
  },
  success: {
    main: "#00c54d",
    a30: "#00c54d4d",
    a20: "#00c54d33",
    a10: "#00c54d1a",
    contrastText: "#ffffff",
  },
  // divider: `#f4f4f5`,
  // text: {
  //     primary: 'rgba(0, 0, 0, 0.85)',
  //     secondary: 'rgba(0, 0, 0, 0.45)',
  // },
  // background: {
  //     paper: '#ffffff',
  //     default: '#ffffff',
  //     a75: 'rgba(255, 255, 255, .75)',
  // },
};

export default palette;
