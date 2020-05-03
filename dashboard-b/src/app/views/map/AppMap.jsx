import React, { Component } from "react";
import { Breadcrumb } from "matx";
import { Card } from "@material-ui/core";
import BasicMap from "./BasicMap";
import MarkerMap from "./MarkerMap";
import MapPage from "./MapPage";

class AppMap extends Component {
  state = {};
  render() {
    return (
    /*
    <div>
      <MapPage>
      </MapPage>
    </div>
    */
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb routeSegments={[{ name: "Map" }]} />
        </div>
        <div>
          <MapPage>
          </MapPage>
        </div>
      </div>
    );
  }
}

export default AppMap;
