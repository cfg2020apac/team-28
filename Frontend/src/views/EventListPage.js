import React, {useEffect, useState} from "react";

// reactstrap components
import {
  Button,
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

const thead = ["Name", "Start Date", "End Date", "Status", "Action"];
const tbody = [
  {
    className: "table-success",
    data: ["Name", "Start Date", "End Date", "Status", (<Button>Approve</Button>)],
  },
];

const EventListPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
    return () => {};
  });

  return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Event List</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                    <tr>
                      {thead.map((prop, key) => {
                        if (key === thead.length - 1)
                          return (
                              <th key={key} className="text-right">
                                {prop}
                              </th>
                          );
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((prop, key) => {
                      return (
                          <tr key={key}>
                            {prop.data.map((prop, key) => {
                              if (key === thead.length - 1)
                                return (
                                    <td key={key} className="text-right">
                                      {prop}
                                    </td>
                                );
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                      );
                    })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
  );
}
export default EventListPage;
