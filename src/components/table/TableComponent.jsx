import {
  Paper,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Box,
  Checkbox,
  Divider,
  IconButton,
  Menu,
  Typography,
} from "@mui/material";
import { useForm, useWatch } from "react-hook-form";
// icons
import TuneIcon from "@mui/icons-material/Tune";
// store
import useCommon from "@/store/common";

export default function TableComponent({
  size = "small",
  stickyHeader = false,
  showCheckbox = false,
  showColumnHideAndShowButton = false,
  headCells = [],
  data = [],

  //
  selectedRows = [],
  handleSelectAll = () => {},
  handleSelectSingleRow = () => {},
  isRowSelected = () => {},
}) {
  const navBarHeight = useCommon((state) => state.common.navBarHeight);

  const { control, setValue } = useForm({
    values: {
      headCells,
      anchorEl: null,
    },
  });
  //
  const customHeadCells = useWatch({ control, name: "headCells" });
  const visibleHeadCells = customHeadCells.filter((cell) => cell.visible);

  // hide and show Column
  const anchorEl = useWatch({ control, name: "anchorEl" });

  const handleCloseMenu = () => {
    setValue("anchorEl", null);
  };

  const handleOpenMenu = (e) => {
    setValue("anchorEl", e.target);
  };

  const handleChangeCellVisibility = (e, cell, index) => {
    setValue(`headCells.${index}.visible`, e.target.checked);
  };

  // Drag and Drop logic
  const swapColumns = (sourceIndex, destinationIndex) => {
    if (sourceIndex === destinationIndex) return;
    if (sourceIndex < 0 || destinationIndex < 0) return;
    if (
      sourceIndex >= customHeadCells.length ||
      destinationIndex >= customHeadCells.length
    )
      return;

    const newColumns = [...customHeadCells];

    [newColumns[sourceIndex], newColumns[destinationIndex]] = [
      newColumns[destinationIndex],
      newColumns[sourceIndex],
    ];

    setValue("headCells", newColumns);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (e, droppedOnElementIndex) => {
    const droppedElementIndex = e.dataTransfer.getData("text/plain");

    swapColumns(droppedElementIndex, droppedOnElementIndex);
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <Box sx={{ px: 1 }}>
          <Typography variant="caption" className="fw-bold">
            Column Hide/Show
          </Typography>
          <Box sx={{ maxHeight: 250, overflow: "auto" }}>
            {customHeadCells?.map((cell, index) => (
              <Box key={cell.id || cell.label} sx={{ width: "100%" }}>
                <Box className="d-flex justify-content-start align-items-center pe-3">
                  <Checkbox
                    checked={cell.visible}
                    size="small"
                    onChange={(e) => handleChangeCellVisibility(e, cell, index)}
                  />
                  <Typography variant="caption">{cell.label}</Typography>
                </Box>
                <Divider />
              </Box>
            ))}
          </Box>
        </Box>
      </Menu>
      <TableContainer
        component={Paper}
        sx={{ height: `calc(100vh - ${navBarHeight + 40}px)` }}
      >
        <Table size={size} stickyHeader={stickyHeader}>
          <TableHead>
            <TableRow>
              {showCheckbox && (
                <TableCell sx={{ width: 40 }}>
                  <Checkbox
                    size={size}
                    onChange={handleSelectAll}
                    indeterminate={
                      selectedRows.length > 0 &&
                      selectedRows.length < data.length
                    }
                    checked={
                      selectedRows.length > 0 &&
                      selectedRows.length === data.length
                    }
                  />
                </TableCell>
              )}

              {visibleHeadCells.map((cell, index) => (
                <TableCell
                  sx={{ cursor: "-webkit-grab" }}
                  draggable
                  key={cell.id || cell.label}
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  {cell.label}
                </TableCell>
              ))}
              {showColumnHideAndShowButton && (
                <TableCell sx={{ width: 40 }}>
                  <IconButton
                    size={size}
                    sx={{ borderRadius: 1 }}
                    onClick={handleOpenMenu}
                  >
                    <TuneIcon size={size} />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} hover>
                {showCheckbox && (
                  <TableCell sx={{ width: 40 }}>
                    <Checkbox
                      size={size}
                      checked={isRowSelected(row)}
                      onChange={() => handleSelectSingleRow(row)}
                    />
                  </TableCell>
                )}
                {visibleHeadCells.map((cell) => (
                  <TableCell key={cell.id || cell.label}>
                    {row?.[cell?.id] || ""}
                  </TableCell>
                ))}
                {showColumnHideAndShowButton && <TableCell />}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
