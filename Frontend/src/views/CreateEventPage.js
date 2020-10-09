import React, {useState} from "react";

// reactstrap components
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row,} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import moment from "moment";

const CreateEventPage = () => {
  const [eventName, setEventName] = useState("")
  const [minAge, setMinAge] = useState(18)
  const today = moment().format('YYYY-MM-DD');
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [description, setDescription] = useState("")

  const handleSubmit = (event) => {
    // post to backend
    event.preventDefault();
  }

  return (
      <>
        <PanelHeader size="sm"/>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Create Event</h5>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col className="pr-1" md="9">
                        <FormGroup>
                          <label>Event Name</label>
                          <Input
                              placeholder="Event name"
                              type="text"
                              value={eventName}
                              onChange={(e) => {
                                setEventName(e.target.value)
                              }}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label>Min Age</label>
                          <Input
                              value={minAge}
                              min="1"
                              max="99"
                              placeholder="Age"
                              type="number"
                              required
                              onChange={(e) => {
                                setStartDate(e.target.value)
                              }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Start Date</label>
                          <Input
                              placeholder="yyy-mm-dd"
                              type="text"
                              value={startDate}
                              onChange={(e) => {
                                setStartDate(e.target.value)
                              }}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>End Date</label>
                          <Input
                              value={endDate}
                              placeholder="yyy-mm-dd"
                              type="text"
                              onChange={(e) => {
                                setEndDate(e.target.value)
                              }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <label>Description</label>
                          <Input
                              cols="80"
                              placeholder="Detailed event description"
                              rows="4"
                              type="textarea"
                              value={description}
                              onChange={(e) => {
                                setDescription(e.target.value)
                              }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <Button type="submit">Submit</Button>
                        </FormGroup>
                      </Col>
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

export default CreateEventPage;
