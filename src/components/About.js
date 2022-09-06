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
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={achelko} />
              <Card.Body>
                <Card.Title>Alan Chelko</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='http://github.com'>GitHub</Button>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='http://linkedin.com'>LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto">
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={armasconi} />
              <Card.Body>
                <Card.Title>Armen Agabekian</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='http://github.com'>GitHub</Button>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='http://linkedin.com'>LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto">
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={rball} />
              <Card.Body>
                <Card.Title>Robert Ball</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='http://github.com'>GitHub</Button>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='http://linkedin.com'>LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto">
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={tmain} />
              <Card.Body>
                <Card.Title>Tyler Main</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='http://github.com'>GitHub</Button>
                <Button style={{ marginLeft: '1rem', width: '100px', backgroundColor: 'rgba(32, 31, 32, 0.85)', border: 'solid green 2px' }} href='http://linkedin.com'>LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
        </Container>

      </>

    );
  }
};

export default About;