import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";

  // reactstrap components
import { Route, Switch, Redirect } from "react-router-dom";
  
  // core components
  import PanelHeader from "components/PanelHeader/PanelHeader.js";
  
  class Login extends React.Component {
    render() {
      return (
        <>
          <PanelHeader size="lg" />
          <div className="content" style={{ display: "flex", justifyContent: "center", marginTop: "-10%"}}>
            <Row>
              <Col md="20">
                <Card style={{ width: "600px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardHeader style={{marginTop: "30px"}}>
                    <h5 className="title">Sign in</h5>
                  </CardHeader>
                  <CardBody style={{marginTop: "30px"}}>
                  <Form>
                    <Row>
                    <Col className="px-1" md="15">
                        <FormGroup style = {{width: "400px"}}>
                          <label>Username</label>
                          <Input
                            defaultValue="admin"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="px-1" md="15">
                        <FormGroup style = {{width: "400px"}}>
                          <label>Password</label>
                          <Input
                            defaultValue="admin"
                            placeholder="Password"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style = {{justifyContent: "center", marginTop: "40px"}}>
                      <a
                        href="/admin"
                        target="_blank"
                        className="btn btn-primary btn-block btn-round"
                        style = {{width: "300px"}}
                      >
                        Sign In
                      </a>
                    </Row>
                  </Form>
                  </CardBody>
                </Card>
              </Col>
          </Row>
        </div>
        </>
    );
  }
}

export default Login;
