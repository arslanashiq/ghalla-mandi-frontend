import { Box } from "@mui/material";
import React from "react";

function PageContainer({ sx = {}, children }) {
  return (
    <Box
      sx={{
        px: 3,
        pt: 1,
        minHeight: "100vh",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default PageContainer;
