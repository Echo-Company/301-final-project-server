import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import tmain from '../img/tmain.jpg'
import achelko from '../img/achelko.jpg'
import armasconi from '../img/armasconi.jpg'
import rball from '../img/rball.PNG'

class About extends Component {

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
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
      </>

    );
  }
};

export default About;