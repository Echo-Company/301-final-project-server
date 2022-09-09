import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import tmain from '../img/tmain.png'
import achelko from '../img/achelko.png'
import armasconi from '../img/armasconi.png'
import rball from '../img/rball.png'
import { Container } from "react-bootstrap";

class About extends Component {

  render() {
    return (
      <>
        <Container style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexWrap: 'wrap',
        }}>
          <Col xs="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={achelko} />
              <Card.Body>
                <Card.Title>Alan Chelko</Card.Title>
                <Card.Text style={{ textAlign: 'left' }}>
                  • International MBA with over 20 years experience working in venture capital or on the management side in early stage environments
                  <br></br>
                  <br></br>
                  • US Army Veteran

                </Card.Text>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='https://github.com/dtuskippy'  target='_blank' >GitHub</Button>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='https://www.linkedin.com/in/alanchelko/' target='_blank'>LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={armasconi} />
              <Card.Body>
                <Card.Title>Armen Agabekian</Card.Title>
                <Card.Text style={{ textAlign: 'left' }}>
                  • Software programming has become an extension of my production programming in music and sound design

                  <br></br>
                  <br></br>
                  • I love designing, building and tweaking things. Tireless troubleshooter.

                  <br></br>
                  <br></br>
                  • Trilingual. Connecting and working with people across multiple backgrounds and cultures.

                </Card.Text>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='https://github.com/agabekian' target='_blank'>GitHub</Button>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='https://www.linkedin.com/in/armen-agabekian/' target='_blank'>LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rball} />
              <Card.Body>
                <Card.Title>Robert Ball</Card.Title>
                <Card.Text style={{ textAlign: 'left' }}>
                  • Junior software developer with a primary focus in Javascript and front-end development

                  <br></br>
                  <br></br>
                  • Passion for building efficiencies and problem solving

                  <br></br>
                  <br></br>
                  • Deadline and detail oriented

                  <br></br>
                  <br></br>
                  • US Army veteran

                </Card.Text>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='https://github.com/RDBALL' target='_blank'>GitHub</Button>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='https://www.linkedin.com/in/rdball/' target='_blank'>LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto">
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={tmain} />
              <Card.Body>
                <Card.Title>Tyler Main</Card.Title>
                <Card.Text style={{ textAlign: 'left' }}>
                  • 10 years experience in journalism, photo/video production

                  <br></br>
                  <br></br>
                  • Full-Stack JavaScript developer - expected graduation Nov. 2022

                  <br></br>
                  <br></br>
                  • Would love to work on a team developing for outdoor recreation, athletics or art

                  <br></br>
                  <br></br>
                  • USMC Veteran

                </Card.Text>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='https://github.com/TylerofArk' target='_blank'>GitHub</Button>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='https://www.linkedin.com/in/tylermain/' target='_blank'>LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </>
    );
  }
};

export default About;