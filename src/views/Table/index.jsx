import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

// import { Container } from './styles';

export default function TableView() {
  return (
    <div>
      <Container className="main pt-4">
        <Row>
          <Col xs md={12}>
            <div className="bg-white p-4">

           
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
