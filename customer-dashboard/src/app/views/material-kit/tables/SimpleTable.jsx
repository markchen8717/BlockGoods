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
    name: "Charlotte Flae",
    date: "18 april, 2020",
    amount: 45,
    status: "closed",
    company: "Shoppers Drug Mart"
  },
  {
    name: "Bryan Kessy",
    date: "19 april, 2020",
    amount: 15,
    status: "open",
    company: "Dollarama"
  },
  {
    name: "James Cay",
    date: "23 april, 2020",
    amount: 20,
    status: "closed",
    company: "Walmart"
  },
  {
    name: "Blake Dawn",
    date: "25 april, 2020",
    amount: 50,
    status: "open",
    company: "Home Depot"
  },
  {
    name: "Jake Owens",
    date: "27 april, 2020",
    amount: 65,
    status: "open",
    company: "Costco Wholesale"
  },
  {
    name: "Lucy Hale",
    date: "2 may, 2020",
    amount: 30,
    status: "open",
    company: "Lowes"
  }
];

const SimpleTable = () => {
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
          {subscribarList.map((subscriber, index) => (
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
