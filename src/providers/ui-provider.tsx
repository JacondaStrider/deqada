"use client";

import { useMemo } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";

import createTheme from "@/ui/theme";

export default function UiProvider({ children }: React.PropsWithChildren) {
  const theme = useMemo(() => createTheme(), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
}
