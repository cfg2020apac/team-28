import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import MuiDatatable from "variables/manageTable.js"

import { thead, tbody } from "variables/general";

class RegularTables extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content" style={{position: "relative", zIndex: 5}}>
        <MuiDatatable/>
        </div>
      </>
    );
  }
}

export default RegularTables;
