import React from "react";
import {
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Icon,
  TablePagination
} from "@material-ui/core";

const subscribarList = [
  {
    name: "Mark Chen",
    date: "1 may, 2020",
    amount: 25,
    status: "closed",
  },
  {
    name: " Mark Chen",
    date: "1 may, 2020",
    amount: 15,
  },
  {
    name: "Eric Liu",
    date: "2 may, 2020",
    amount: 50,
  },
  {
    name: "Ben Lin",
    date: "2 may, 2020",
    amount: 20,
  },
  {
    name: "Krishdevs Sutar",
    date: "2 may, 2020",
    amount: 15,
  },
];

const PaginationTable = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
  };

  return (
    <div className="w-full overflow-auto">
      <Table className="whitespace-pre">
        <TableHead>
          <TableRow>
            <TableCell className="px-0">Buyer Name</TableCell>
            <TableCell className="px-0">Completion Date</TableCell>
            <TableCell className="px-0">Amount</TableCell>
            <TableCell className="px-0">Approved</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell className="px-0 capitalize" align="left">
                  {subscriber.name}
                </TableCell>
                <TableCell className="px-0 capitalize" align="left">
                  {subscriber.date}
                </TableCell>
                <TableCell className="px-0 capitalize">
                  ${subscriber.amount}
                </TableCell>
                <TableCell className="px-0">
                  <IconButton>
                    <Icon color="error">close</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <TablePagination
        className="px-4"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={subscribarList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page"
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default PaginationTable;
