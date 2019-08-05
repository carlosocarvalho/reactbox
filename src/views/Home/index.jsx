import React from "react";
import Components from "@coc/components";
import { Container, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  return (
    <React.Fragment>
      <div className="main pt-4">
        <Container>
          <Row>
            <Col xs md={4}>
              <Components.Card>
                <Components.Card.Body>Oid</Components.Card.Body>
              </Components.Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
