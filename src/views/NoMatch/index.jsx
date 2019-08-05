import React from 'react';
import {Container, Col, Row} from 'react-bootstrap'
// import { Container } from './styles';

export default function NoMatch() {
  return (
    <Container style={{
        
        height: '100vh'
    }}>
        <Row 
        style={{height: '100vh'}}
        className="justify-content-center align-items-center">
            <Col xs md={4} className="text-center">
            <h4>
            Página não encontrada
            </h4>
            </Col>
        </Row>
    </Container>
  );
}
