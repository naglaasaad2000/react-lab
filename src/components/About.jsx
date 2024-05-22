import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import '../css/shared.css'
export function About(){
  return (
    <Container className="margin mb-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquam risus eget augue lacinia, eu dapibus purus ultricies.
            Mauris aliquet sapien vel nibh egestas, nec varius nunc auctor.
            Sed et ex consectetur, fermentum odio at, faucibus ligula.
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="./images/logo.png"
            alt="About Us"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

