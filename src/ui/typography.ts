import type { ThemeOptions } from "@mui/material";

import localFont from "next/font/local";

// const gilroy = localFont({
//   display: "swap",
//   src: [
//     {
//       weight: "400",
//       style: "normal",
//       path: "../../public/fonts/GeistVF.woff",
//     },
//     // {
//     //     weight: '500',
//     //     style: 'normal',
//     //     path: '../../public/fonts/Gilroy-500.woff2',
//     // },
//     // {
//     //     weight: '600',
//     //     style: 'normal',
//     //     path: '../../public/fonts/Gilroy-600.woff2',
//     // },
//   ],
// });

export const involve = localFont({
  display: "swap",
  src: [
    {
      weight: "700",
      style: "normal",
      path: "../../public/fonts/InvolveVF.ttf",
    },
    // {
    //     weight: '500',
    //     style: 'normal',
    //     path: '../../public/fonts/Gilroy-500.woff2',
    // },
    // {
    //     weight: '600',
    //     style: 'normal',
    //     path: '../../public/fonts/Gilroy-600.woff2',
    // },
  ],
});

const typography: ThemeOptions["typography"] = {
  button: {
    textTransform: "none",
    // fontSize: "14px",
  },
  fontFamily: [
    involve.style.fontFamily,
    // "-apple-system",
    // "BlinkMacSystemFont",
    // '"Segoe UI"',
    // "Roboto",
    // '"Helvetica Neue"',
    // "Arial",
    // "sans-serif",
    // '"Apple Color Emoji"',
    // '"Segoe UI Emoji"',
    // '"Segoe UI Symbol"',
  ].join(","),
};

export default typography;
