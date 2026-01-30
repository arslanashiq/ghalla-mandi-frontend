"use client";
// hooks
import useTableHook from "@/hooks/useTableHook";
// components
import NavBar from "@/components/Layout/NavBar";
import PageContainer from "@/components/Layout/PageContainer";
import TableComponent from "@/components/table/TableComponent";
import TableToolbarComponent from "@/components/table/TableToolbarComponent";

function CustomersPage() {
  const data = [
    {
      id: 1,
      name: "Arslan",
      age: 10,
      email: "ashiqarslan66@gmail.com",
      phone: "03331653542",
      gender: "Male",
      dob: "29-September-2000",
      place: "Abdul Hakim,Punjab,Pakistan",
    },
    {
      id: 2,
      name: "Arslan",
      age: 10,
      email: "ashiqarslan66@gmail.com",
      phone: "03331653542",
      gender: "Male",
      dob: "29-September-2000",
      place: "Abdul Hakim,Punjab,Pakistan",
    },
    {
      id: 3,
      name: "Arslan",
      age: 10,
      email: "ashiqarslan66@gmail.com",
      phone: "03331653542",
      gender: "Male",
      dob: "29-September-2000",
      place: "Abdul Hakim,Punjab,Pakistan",
    },
    {
      id: 4,
      name: "Arslan",
      age: 10,
      email: "ashiqarslan66@gmail.com",
      phone: "03331653542",
      gender: "Male",
      dob: "29-September-2000",
      place: "Abdul Hakim,Punjab,Pakistan",
    },
    {
      id: 5,
      name: "Arslan",
      age: 10,
      email: "ashiqarslan66@gmail.com",
      phone: "03331653542",
      gender: "Male",
      dob: "29-September-2000",
      place: "Abdul Hakim,Punjab,Pakistan",
    },
    {
      id: 6,
      name: "Arslan",
      age: 10,
      email: "ashiqarslan66@gmail.com",
      phone: "03331653542",
      gender: "Male",
      dob: "29-September-2000",
      place: "Abdul Hakim,Punjab,Pakistan",
    },

    {
      id: 7,
      name: "Arslan",
      age: 10,
      email: "ashiqarslan66@gmail.com",
      phone: "03331653542",
      gender: "Male",
      dob: "29-September-2000",
      place: "Abdul Hakim,Punjab,Pakistan",
    },
    {
      id: 8,
      name: "Arslan",
      age: 10,
      email: "ashiqarslan66@gmail.com",
      phone: "03331653542",
      gender: "Male",
      dob: "29-September-2000",
      place: "Abdul Hakim,Punjab,Pakistan",
    },
    {
      id: 9,
      name: "Arslan",
      age: 10,
      email: "ashiqarslan66@gmail.com",
      phone: "03331653542",
      gender: "Male",
      dob: "29-September-2000",
      place: "Abdul Hakim,Punjab,Pakistan",
    },
    {
      id: 10,
      name: "Arslan",
      age: 10,
      email: "ashiqarslan66@gmail.com",
      phone: "03331653542",
      gender: "Male",
      dob: "29-September-2000",
      place: "Abdul Hakim,Punjab,Pakistan",
    },
    {
      id: 11,
      name: "Arslan",
      age: 10,
      email: "ashiqarslan66@gmail.com",
      phone: "03331653542",
      gender: "Male",
      dob: "29-September-2000",
      place: "Abdul Hakim,Punjab,Pakistan",
    },
    {
      id: 12,
      name: "Arslan",
      age: 10,
      email: "ashiqarslan66@gmail.com",
      phone: "03331653542",
      gender: "Male",
      dob: "29-September-2000",
      place: "Abdul Hakim,Punjab,Pakistan",
    },
  ];
  const headCells = [
    { label: "Name", id: "name", visible: true },
    { label: "Age", id: "age", visible: true },
    { label: "Email", id: "email", visible: true },
    { label: "Phone Number", id: "phone", visible: true },
    { label: "Gender", id: "gender", visible: true },
    { label: "Date of Birth", id: "dob", visible: true },
    { label: "Place of Birth", id: "place", visible: true },
  ];
  const count = 105;
  const {
    offset,
    limit,
    selectedRows,
    handleClearAll,
    handleSelectAll,
    handleSelectSingleRow,
    handleNextPage,
    handlePreviousPage,
  } = useTableHook({ count, data });

  return (
    <PageContainer>
      <NavBar title="Customers" showBackButton showHomeButton>
        <TableToolbarComponent
          label="Add New Customer"
          //
          selectedRowsCount={selectedRows?.length || 0}
          handleClearAll={handleClearAll}
          //
          offset={offset}
          limit={limit}
          count={count}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      </NavBar>

      <TableComponent
        showCheckbox
        stickyHeader
        showColumnHideAndShowButton
        headCells={headCells}
        data={data}
        selectedRows={selectedRows}
        handleSelectAll={handleSelectAll}
        handleSelectSingleRow={handleSelectSingleRow}
      />
    </PageContainer>
  );
}

export default CustomersPage;
