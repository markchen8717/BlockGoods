import React from "react";

import { SimpleCard, MatxProgressBar } from "matx";

const Campaigns = () => {
  return (
    <div>
      <SimpleCard title="Your Top Selling Goods Breakdown">
        <small className="text-muted">Today</small>
        <div className="pt-2" />
        <MatxProgressBar value={35} color="primary" text="Medicine (35)" />
        <div className="py-1" />
        <MatxProgressBar value={42} color="secondary" text="Toiletries (42)" />
        <div className="py-1" />
        <MatxProgressBar value={23} color="primary" text="Face Masks (23)" />

        <div className="py-3" />
        <small className="text-muted">Last Week</small>
        <div className="pt-2" />
        <MatxProgressBar value={25} color="primary" text="Non-Perishables (25)" />
        <div className="py-1" />
        <MatxProgressBar value={15} color="secondary" text="Toiletries (15)" />
        <div className="py-1" />
        <MatxProgressBar value={60} color="primary" text="Hygiene Products (60)" />

        <div className="py-3" />
        <small className="text-muted">Last Month</small>
        <div className="pt-2" />
        <MatxProgressBar value={27} color="primary" text="Medicine (27)" />
        <div className="py-1" />
        <MatxProgressBar value={42} color="secondary" text="Non-Perishables (42)" />
        <div className="py-1" />
        <MatxProgressBar value={31} color="primary" text="Gloves (31)" />
      </SimpleCard>
    </div>
  );
};

export default Campaigns;
