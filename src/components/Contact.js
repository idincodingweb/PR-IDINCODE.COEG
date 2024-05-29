import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css'; // Pastikan Anda membuat file CSS ini

const Contact = () => {
  return (
    <Container fluid className="contact-section bg-dark" data-aos="fade-up" id="contact">
      <h2 className="contact-title">Hubungi Idin</h2>
      <Row>
        <Col md={12}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nama Anda" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan email Anda" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Pesan</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Masukkan pesan Anda" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Kirim
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
