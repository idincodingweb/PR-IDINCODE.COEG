import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/About.css'; // Pastikan Anda membuat file CSS ini

const About = () => {
  return (
    <Container fluid className="about-section" data-aos="fade-up" id="about">
      <Row className="align-items-center">
        <Col md={4} className="image-col">
          <Image src="https://raw.githubusercontent.com/idincodingweb/landingpagekece.com/master/img/idinganteng.png" alt="Idin Code" className="about-image" />
        </Col>
        <Col md={8}>
          <h2 className="about-title">Tentang Idin</h2>
          <p className="about-description">
            Halo, saya Idin, seorang frontend web developer dengan pengalaman lebih dari X tahun.
            Saya bersemangat dalam menciptakan pengalaman pengguna yang luar biasa dan antarmuka yang menarik.
            Dengan keahlian dalam teknologi seperti HTML, CSS, JavaScript, dan React, saya telah bekerja pada berbagai proyek
            yang membantu bisnis meningkatkan kehadiran online mereka.
          </p>
          <p className="about-description">
            Saya percaya bahwa desain yang baik bukan hanya tentang estetika, tetapi juga tentang fungsionalitas dan aksesibilitas.
            Saya selalu berusaha untuk belajar teknologi baru dan mengasah keterampilan saya untuk tetap up-to-date dengan tren industri terbaru.
          </p>
          <p className="about-description">
            Ketika tidak sedang coding, saya menikmati [hobi Anda] dan terus mencari inspirasi dari berbagai bidang kreatif.
            Jangan ragu untuk menghubungi saya jika Anda tertarik untuk bekerja sama atau hanya ingin mengobrol tentang teknologi dan desain.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
