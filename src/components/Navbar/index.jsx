import React from "react";
import { NavbarStyled, NavMLStyled } from "./style";
import {
  Container,
  Row,
  Col,
  NavItem,
 
} from "react-bootstrap";
import { withRouter } from "react-router-dom";

import { Form, FormControl } from '../Form'

function Navbar({ match }) {
  
  return (
    <NavbarStyled>
      <Container className="pt-4">
        <Row>
        <Col>
           <Form inline>
             <FormControl type="text" placeholder="O que voce procurar ?" className="mr-md-2" />
           </Form>
        </Col>
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
