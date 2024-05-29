import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Portfolio.css'; // Pastikan Anda membuat file CSS ini

const projects = [
  {
    title: "Proyek 1",
    description: "Deskripsi proyek 1",
    imageUrl: "https://i.ibb.co/LxJnqmV/Screenshot-20240529-223908.jpg/800x600",
  },
  {
    title: "Proyek 2",
    description: "Deskripsi proyek 2",
    imageUrl: "https://i.ibb.co/k32CFjS/Screenshot-20240529-223928.jpg/800x600",
  },
  {
    title: "Proyek 3",
    description: "Deskripsi proyek 3",
    imageUrl: "https://i.ibb.co/xYhgsGX/Screenshot-20240529-223947.jpg/800x600",
  },
  // Tambahkan proyek lainnya di sini
];

const Portfolio = () => {
  return (
    <Container fluid className="portfolio-section bg-dark" data-aos="fade-up" id="portfolio">
      <h2 className="portfolio-title">Proyek Saya</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card className="portfolio-card text-white bg-transparent">
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
