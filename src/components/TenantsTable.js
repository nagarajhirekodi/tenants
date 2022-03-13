import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { connect } from "react-redux";

import { displayDetails } from "./actions";
import { useNavigate } from "react-router";

const columns = [
  { id: "id", label: "ID", minWidth: 170, align: "center" },
  { id: "name", label: "Name", minWidth: 100, align: "center" },
  {
    id: "type",
    label: "Type",
    minWidth: 170,
    align: "center",
  },
  {
    id: "code",
    label: "Code",
    minWidth: 170,
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
  }
];

function TenantsTable({ responseData = [], displayDetails }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  let navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = [...responseData];

  const storeDetails = (data) => {
    displayDetails(data);
    navigate("/details");
  };

  return (
    <div style={{ padding: '0 20px' }}>
      <h2>{"Total Tenants"}</h2>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 525 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight:'bold' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.id}
                      onClick={() => storeDetails(row)}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value ? value : ""}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <hr style={{ margin: 0 }} />
        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

const mapDispatchToProps = {
  displayDetails,
};

export default connect(null, mapDispatchToProps)(TenantsTable);
