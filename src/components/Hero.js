import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Hero.css'; // Pastikan Anda membuat file CSS ini

const Hero = () => {
  return (
    <div className="hero-section bg-dark" id="home">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={12} className="text-center text-md-left">
            <h1 className="hero-headline">Halo, Saya Idin Code - Web Development</h1>
            <p className="hero-subheadline">Mengembangkan situs web yang inovatif dan fungsional untuk mendukung kesuksesan digital Anda.</p>
            <Button className="hero-button"> Lihat Portfolio</Button>
            <Button className="hero-cuy">Unduh CV</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
