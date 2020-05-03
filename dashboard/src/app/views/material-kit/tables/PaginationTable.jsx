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
    name: "John Finch",
    date: "1 may, 2020",
    amount: 25,
    status: "closed",
    company: "Zenkai Pharmacy"
  },
  {
    name: " Bob Cousy",
    date: "1 may, 2020",
    amount: 15,
    status: "open",
    company: "New Vision Health Care"
  },
  {
    name: "kessy bryan",
    date: "2 may, 2020",
    amount: 50,
    status: "open",
    company: "WeBuild"
  },
  {
    name: "james cassidy",
    date: "2 may, 2020",
    amount: 20,
    status: "closed",
    company: "Forvera"
  },
  {
    name: "rosy mchale",
    date: "2 may, 2020",
    amount: 15,
    status: "open",
    company: "Daily Mart"
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
            <TableCell className="px-0">Seller Name</TableCell>
            <TableCell className="px-0">Company</TableCell>
            <TableCell className="px-0">Completion Date</TableCell>
            <TableCell className="px-0">Store Status</TableCell>
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
                  {subscriber.company}
                </TableCell>
                <TableCell className="px-0 capitalize" align="left">
                  {subscriber.date}
                </TableCell>
                <TableCell className="px-0 capitalize">
                  {subscriber.status}
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
