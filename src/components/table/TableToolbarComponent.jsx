import React from "react";
import { Box, Button } from "@mui/material";
// components
import TableActionButtonComponent from "./TableActionButtonComponent";
import TablePaginationComponent from "./TablePaginationComponent";

function TableToolbarComponent({
  label = "+ New Record",
  handleAddNewRecord = () => {},
  //
  selectedRowsCount = 0,
  handleClearAll = () => {},
  //
  offset = 0,
  limit = 0,
  count = 0,
  handleNextPage = () => {},
  handlePreviousPage = () => {},
}) {
  return (
    <Box
      sx={{ flexGrow: 1, my: 1 }}
      className="d-flex justify-content-between align-items-center"
    >
      <Box>
        {selectedRowsCount === 0 && (
          <Button onClick={handleAddNewRecord}>{label}</Button>
        )}
      </Box>

      <TableActionButtonComponent
        handleClearAll={handleClearAll}
        selectedRowsCount={selectedRowsCount}
      />

      <TablePaginationComponent
        offset={offset}
        limit={limit}
        count={count}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </Box>
  );
}

export default TableToolbarComponent;
