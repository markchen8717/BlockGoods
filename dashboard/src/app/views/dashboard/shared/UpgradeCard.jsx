import React from "react";
import { Card, Button } from "@material-ui/core";

const UpgradeCard = () => {
  return (
    <Card className="p-sm-24 mb-6">
      <Card elevation={0} className="upgrade-card bg-light-primary p-sm-24">
        <img src="/assets/images/illustrations/upgrade.svg" alt="upgrade" />
        <p className="text-muted m-0 py-6">
          Share this site with your friends <br/> so more people can benefit!
        </p>
        <Button
          className="uppercase"
          size="large"
          variant="contained"
          color="primary"
        >
          SHARE NOW
        </Button>
      </Card>
    </Card>
  );
};

export default UpgradeCard;
