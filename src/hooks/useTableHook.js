import { useForm, useWatch } from "react-hook-form";

function useTableHook({ count, data }) {
  const { control, setValue } = useForm({
    values: {
      offset: 0,
      limit: 15,
      selectedRows: [],
    },
  });
  const offset = useWatch({ control, name: "offset" });
  const limit = useWatch({ control, name: "limit" });
  const selectedRows = useWatch({ control, name: "selectedRows" });

  const handleSelectAll = () => {
    setValue("selectedRows", data.length === selectedRows.length ? [] : data);
  };
  const handleClearAll = () => {
    setValue("selectedRows", []);
  };
  const handleSelectSingleRow = (row) => {
    const tempSelectedRows = [...selectedRows];
    const selectedRowIndex = tempSelectedRows.findIndex((r) => r.id === row.id);
    if (selectedRowIndex >= 0) {
      tempSelectedRows.splice(selectedRowIndex, 1);
    } else {
      tempSelectedRows.push(row);
    }

    setValue("selectedRows", tempSelectedRows);
  };

  const handleNextPage = () => {
    const newOffset = offset + limit;
    if (newOffset > count) {
      return;
    }
    setValue("offset", newOffset);
  };

  const handlePreviousPage = () => {
    const newOffset = offset - limit;
    if (newOffset < 0) {
      return;
    }
    setValue("offset", newOffset);
  };

  return {
    offset,
    limit,
    selectedRows,
    //
    handleClearAll,
    handleSelectAll,
    handleSelectSingleRow,
    //
    handleNextPage,
    handlePreviousPage,
  };
}

export default useTableHook;
