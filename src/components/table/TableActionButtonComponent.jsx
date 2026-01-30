import { Box, Button, Chip } from "@mui/material";
import React from "react";

function TableActionButtonComponent({
  selectedRowsCount = [],
  handleClearAll = () => {},
}) {
  return selectedRowsCount > 0 ? (
    <Box className="d-flex justify-content-center align-items-center">
      <Chip
        label={`${selectedRowsCount} Selected`}
        variant="outlined"
        className="me-2 cursor-default"
        sx={{ borderRadius: 1 }}
        onDelete={handleClearAll}
        color="primary"
      />
      <Button>Actions</Button>
    </Box>
  ) : (
    <></>
  );
}

export default TableActionButtonComponent;
