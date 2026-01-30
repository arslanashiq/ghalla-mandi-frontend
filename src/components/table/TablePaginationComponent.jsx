import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

function TablePaginationComponent({
  offset = 0,
  limit = 0,
  count = 0,
  handleNextPage = () => {},
  handlePreviousPage = () => {},
}) {
  return (
    <Box className="d-flex align-items-center">
      <Typography variant="subtitle2" className="px-2">
        {Math.ceil(offset + 1 / limit)} -{" "}
        {offset + limit > count ? count : offset + limit} / {count}
      </Typography>
      <IconButton
        sx={{
          borderRadius: 1,
          padding: 0.5,
          backgroundColor: "rgba(255,255,255,0.1)",
        }}
        className="me-1"
        onClick={handlePreviousPage}
        disabled={offset <= 0}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        sx={{
          borderRadius: 1,
          padding: 0.5,
          backgroundColor: "rgba(255,255,255,0.1)",
        }}
        className="me-2"
        onClick={handleNextPage}
        disabled={offset + limit >= count}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
}

export default TablePaginationComponent;
