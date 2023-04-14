import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import adeebimg from '../../assets/images/adeeb.jpg';
import skills from '../../assets/data/images';
import './home.css';

const Home = () => {
  return (
    <div className='home' id='home'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <h1>
              FullStack JavaScript <br />
              Web Developer
            </h1>
            <p>
              Hi, I'm Adeeb Ogaili, A passionate Full Stack <br />
              Web Developer based in Austin, TX
            </p>
            <div className='social__media'>
              <a href='https://www.linkedin.com/in/adeeb-ogaili'>
                <i className='ri-linkedin-box-fill'></i>
              </a>
              <a href='https://www.github.com/Adeebogaili'>
                <i className='ri-github-fill'></i>
              </a>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='image__container'>
              <img src={adeebimg} alt='Adeeb' />
            </div>
          </Col>
        </Row>
        <Row className='skills__container mt-5'>
          <Col md={3}>
            <h3>Tech Stack</h3>
          </Col>
          <Col md={9}>
            {skills?.map((item, index) => (
              <ul className='skills__logo-ul' key={index}>
                <li>
                  <img src={item.image} alt={item.alt} />
                </li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;