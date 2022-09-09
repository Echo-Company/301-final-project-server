import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Carousel, Button, Form, Accordion } from 'react-bootstrap';

class Favorites extends React.Component {


  render() {

    let carouselItems = this.props.favsArray.map((favs, idx) => (


      <Carousel.Item key={idx} >
        <Carousel.Caption>
          <h3 style={{ backgroundColor: 'rgba(41, 60, 80, 0.60)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', width: '100%', margin: 'auto', marginBottom: '2rem', padding: '5px', fontSize: '2rem' }}>Planning to visit {favs.parks} this year?</h3>
          < Form onSubmit={(e) => this.props.handleUpdateSubmit(e, favs)} >
            <Form.Group className="mb-3" controlId="plannedVisit">
              <Form.Check type="checkbox" defaultChecked={favs.plannedVisit} label="I am Planning to visit!" style={{ backgroundColor: 'rgba(32, 31, 32, 0.85)', borderRadius: '10px', boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", width: 'max-content', margin: 'auto', marginBottom: '2rem', padding: '5px', fontSize: '2rem' }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="idv">
              <Form.Control type="text" value={favs} hidden readOnly />
            </Form.Group>
            <Button id="saveTripButton" variant="primary" type="submit">Save your planned trip!</Button>
            <Button id="deleteFavButton" key="deleteFavs" onClick={() => this.props.handleDelete(favs)}>Remove from favorites</Button>
          </Form >
        </Carousel.Caption>
        <img style={{ backgroundColor: 'rgba(32, 31, 32, 0.85)', borderRadius: '10px', boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", height: 'auto', maxWidth: '90%', margin: 'auto', marginBottom: '2rem', padding: '5px', fontSize: '2rem' }}
          className="d-block w-100"
          src={favs.image}
          alt="Placeholder"
        />
      </Carousel.Item>

    ))

    return (

      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header className='accordionHeader' style={{ backgroundColor: 'rgba(41, 60, 80, 0.60)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', width: '100%', margin: 'auto', marginBottom: '2rem', padding: '5px', fontSize: '5rem' }}>Your Favorite Parks</Accordion.Header>
          <Accordion.Body>
            <>
              {
                this.props.favsArray.length > 0 ? (
                  <Container>
                    <Carousel>
                      {carouselItems}
                    </Carousel>
                  </Container>
                ) : (
                  <h3>Please select some new favorites!</h3>
                )
              }
            </>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default Favorites;

