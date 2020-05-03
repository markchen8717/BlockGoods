import React from "react";
import SimpleTable from "./SimpleTable";
import PaginationTable from "./PaginationTable";
import { Breadcrumb, SimpleCard } from "matx";
import Balance from "./Balance"
import QR from "./qr_code.png"

const AppTable = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Transactions", path: "/material" },
            { name: "Transactions Table" }
          ]}
        />
      </div>
      <center>
      <Balance
        balance = {'10402'}
        currency = {'UTC'}
        image = {QR}
        >

      </Balance>
      </center>

      <SimpleCard title="Transactions History">
        <SimpleTable />
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="Transactions History Errors">
        <PaginationTable />
      </SimpleCard>
    </div>
  );
};


export default AppTable;