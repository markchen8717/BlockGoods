import React from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  Icon,
  TableRow
} from "@material-ui/core";

const subscribarList = [
  {
    name: "Eric Liu",
    date: "2 april, 2020",
    amount: 45,
  },
  {
    name: "Mark Chen",
    date: "19 april, 2020",
    amount: 15,
  },
  {
    name: "Mark Chen",
    date: "23 april, 2020",
    amount: 20,
  },
  {
    name: "Ben Lin",
    date: "25 april, 2020",
    amount: 50,
  },
  {
    name: "Ben Lin",
    date: "27 april, 2020",
    amount: 65,
  },
  {
    name: "Krishdev Sutar",
    date: "2 may, 2020",
    amount: 30,
  }
];

const SimpleTable = () => {
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
          {subscribarList.map((subscriber, index) => (
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
                  <Icon color="primary">check</Icon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SimpleTable;
