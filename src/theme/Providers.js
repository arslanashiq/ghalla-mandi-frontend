// app/providers.js
"use client";

import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { CacheProvider } from "@emotion/react";

// images

import darkBackground from "@/assets/background-dark.jpg";
import lightBackground from "@/assets/background-light.svg";
// components
import theme from "./theme";
import createEmotionCache from "./createEmotionCache";

//
const clientSideEmotionCache = createEmotionCache();

export default function Providers({ children }) {
  const isDarkMode = theme.palette.mode === "dark";
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <Box
          dir={theme.direction}
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
            backgroundImage: `url(${isDarkMode ? darkBackground.src : lightBackground.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "cover", // or "contain" depending on the effect
            minHeight: "100vh",
            height: "100%",
          }}
        >
          <CssBaseline />
          {children}
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
