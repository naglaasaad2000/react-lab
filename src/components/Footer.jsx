import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import '../css/footer.css'
export function Footer() {
  return (
    <footer className="footer mt-auto py-3  footer-link footer-bg">
      <Container>
        <Row>
          <Col sm={6} md={3} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="footer-link">Home</a>
              </li>
              <li>
                <a href="#books" className="footer-link">Books</a>
              </li>
              <li>
                <a href="#about" className="footer-link">About Us</a>
              </li>
              <li>
                <a href="#contact" className="footer-link">Contact</a>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={3} className="mb-3 mb-md-0">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/" className="footer-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="me-2" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" className="footer-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="me-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" className="footer-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="me-2" />
                  YouTube
                </a>
              </li>
              <li>
                <a href="mailto:naglaasaadmohamed@gmail.com" className="footer-link">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  Email Us
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <p className="text-center text-md-end mb-0">
              &copy; {new Date().getFullYear()} Your Bookstore. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
