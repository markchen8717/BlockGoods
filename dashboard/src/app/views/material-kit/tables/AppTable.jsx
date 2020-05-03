import React from "react";
import SimpleTable from "./SimpleTable";
import PaginationTable from "./PaginationTable";
import { Breadcrumb, SimpleCard } from "matx";

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