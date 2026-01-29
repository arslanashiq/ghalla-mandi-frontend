// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "ltr",
  palette: { mode: "dark" },

  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "outlined",
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiIcon: {
      defaultProps: {
        fontSize: "small",
      },
    },
  },
});

export default theme;
