import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import User from "./Charts/Users";
import Months from "./Charts/Months";


export default function Dashboard() {
  return (
    <React.Fragment>
      <div className="main pt-4">
        <Container>
          <Row>
            <Col xs md={4}>
               <Months/>
            </Col>

            <Col xs md={4}>
              <User />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
