import React from "react";
import { NavbarStyled, NavMLStyled } from "./style";
import {
  Container,
  Row,
  Col,
  NavItem
} from "react-bootstrap";
import { withRouter } from "react-router-dom";

function Navbar({ match }) {
  
  return (
    <NavbarStyled>
      <Container>
        <Row>
          <Col md={4} className="ml-auto text-right">
            <NavMLStyled>
              <NavItem>
                
              </NavItem>
            </NavMLStyled>
          </Col>
        </Row>
      </Container>
    </NavbarStyled>
  );
}

export default withRouter(Navbar);
