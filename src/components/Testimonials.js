import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Testimonials.css'; // Pastikan Anda membuat file CSS ini

const testimonials = [
  {
    name: "Klien 1",
    feedback: "Testimoni dari klien 1",
    imageUrl: "https://raw.githubusercontent.com/idincodingweb/packgambar/main/avatar0.png",
  },
  {
    name: "Klien 2",
    feedback: "Testimoni dari klien 2",
    imageUrl: "https://raw.githubusercontent.com/idincodingweb/packgambar/main/avatar0.png",
  },
  // Tambahkan testimoni lainnya di sini
];

const Testimonials = () => {
  return (
    <Container fluid className="testimonials-section">
      <h2 className="testimonials-title">Apa Kata Mereka</h2>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={6} key={index}>
            <Card className="testimonial-card bg-dark text-white">
              <Card.Img variant="top" src={testimonial.imageUrl} className="testimonial-image" />
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text>{testimonial.feedback}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
