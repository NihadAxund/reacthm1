import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideCompanet from './SideCompanet';
import NavbarComponent from './NavbarComponent';
export default class IndexComponet extends Component {
  render() {
    return (
        <Container fluid>
        <Row className="vh-100 flex-wrap">
          <Col className="bg-primary" xs="12" md="3">
            <SideCompanet></SideCompanet>
          </Col>
          <Col className="bg-dark" xs="12" md="9">
            <NavbarComponent></NavbarComponent>
          </Col>
        </Row>
      </Container>

    )
  }
}
