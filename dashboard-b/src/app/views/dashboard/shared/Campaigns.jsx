import React from "react";

import { SimpleCard, MatxProgressBar } from "matx";

const Campaigns = () => {
  return (
    <div>
      <SimpleCard title="Top Selling Goods Breakdown">
        <small className="text-muted">Today</small>
        <div className="pt-2" />
        <MatxProgressBar value={75} color="primary" text="Medicine (21)" />
        <div className="py-1" />
        <MatxProgressBar value={45} color="secondary" text="Toiletries (12)" />
        <div className="py-1" />
        <MatxProgressBar value={75} color="primary" text="Protective Gear (21)" />

        <div className="py-3" />
        <small className="text-muted">Last Week</small>
        <div className="pt-2" />
        <MatxProgressBar value={15} color="primary" text="Non-Perishables (15)" />
        <div className="py-1" />
        <MatxProgressBar value={25} color="secondary" text="Protective Gear (25)" />
        <div className="py-1" />
        <MatxProgressBar value={60} color="primary" text="Hygiene Products (60)" />

        <div className="py-3" />
        <small className="text-muted">Last Month</small>
        <div className="pt-2" />
        <MatxProgressBar value={42} color="primary" text="Medicine (42)" />
        <div className="py-1" />
        <MatxProgressBar value={27} color="secondary" text="Non-Perishables (27)" />
        <div className="py-1" />
        <MatxProgressBar value={31} color="primary" text="Protective Gear (31)" />
      </SimpleCard>
    </div>
  );
};

export default Campaigns;
