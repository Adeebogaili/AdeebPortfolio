import React from 'react';
import './about.css';
import { Container, Row, Col } from 'reactstrap';
import desktop from '../../assets/images/desktop.jpg';

const About = () => {
  return (
    <div className='about' id='about'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='about__image'>
              <img src={desktop} alt='desktop' />
            </div>
          </Col>
          <Col lg='6'>
            <h5>ABOUT ME</h5>
            <h3>
              A dedicated Full Stack Developer <br />
              based in Austin, TX
            </h3>
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
