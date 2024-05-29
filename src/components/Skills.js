import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/Skills.css'; // Pastikan Anda membuat file CSS ini

// Daftar keterampilan beserta logo
const skills = [
  { name: "Front End", level: "Advanced", logo: "https://raw.githubusercontent.com/idincodingweb/e-course.com/main/assets/img/new4-img.png" },
  { name: "Angular", level: "Advanced", logo: "https://raw.githubusercontent.com/idincodingweb/e-course.com/main/assets/img/new2-img.png" },
  { name: "Python", level: "Advanced", logo: "https://raw.githubusercontent.com/idincodingweb/e-course.com/main/assets/img/new3-img.png" },
  { name: "React", level: "Intermediate", logo: "https://raw.githubusercontent.com/idincodingweb/e-course.com/main/assets/img/new1-img.png" },
  // Tambahkan keterampilan lainnya di sini
];

const Skills = () => {
  return (
    <Container fluid className="skills-section">
      <h2 className="skills-title">Keterampilan Saya</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={3} sm={6} key={index}>
            <div className="skill-card text-white">
              <Image src={skill.logo} alt={skill.name} fluid />
              <h3 className="skill-name text-white">{skill.name}</h3>
              <p className="skill-level text-white">{skill.level}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
