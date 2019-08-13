import React from "react";
import { NavbarStyled, NavMLStyled } from "./style";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import { Form, FormControl } from "../Form";
import UserOptionsDropDown  from './UserOptionsDropDown'

function Navbar({ match }) {
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };
  

  return (
    <NavbarStyled>
      <Container className="pt-4">
        <Row>
          <Col md={4}>
            <Form onSubmit={handleSubmit}>
              <FormControl
                type="text"
                placeholder="O que voce procurar ?"
                className="mr-md-2"
              />
            </Form>
          </Col>
          <Col md={2} className="ml-auto">
            <NavMLStyled >
              <UserOptionsDropDown />
              <Nav.Link>
                <i className="icon-lock" />
              </Nav.Link>
            </NavMLStyled>
          </Col>
        </Row>
      </Container>
    </NavbarStyled>
  );
}

export default withRouter(Navbar);
