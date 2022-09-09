import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Carousel, Button } from 'react-bootstrap';

class ParksList extends React.Component {

  render() {

  let carouselItems = this.props.parksArray.map((park, idx) => (

    <Carousel.Item key={idx}>
        <Carousel.Caption>
          <h3 style={{ backgroundColor: 'rgba(32, 31, 32, 0.85)', borderRadius: '10px', boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", width: 'max-content', margin: 'auto', marginBottom: '2rem', padding: '5px', fontSize: '2rem', color: 'white' }}>{park.parks}</h3>
          <h3 style={{ backgroundColor: 'rgba(32, 31, 32, 0.80)', boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", width: '100%', marginTop: '2rem', margin: 'auto', marginBottom: '2rem', padding: '5px', fontSize: '1.5rem', color: 'white' }}>{park.description}</h3>
          <Button id="homeButton" key="createFav" onClick={() => this.props.favsHandleSubmit(park)} >Add to Favorites!</Button>
         

        </Carousel.Caption>
        <img style={{ backgroundColor: 'rgba(32, 31, 32, 0.85)', borderRadius: '10px', boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", height: 'auto', maxWidth: '90%', margin: 'auto', marginBottom: '2rem', padding: '5px', fontSize: '2rem' }}
          className="d-block w-100"
          src={park.image}
          alt="Placeholder"
        />
      </Carousel.Item>
    ))

 
    return (

      <>

        {
          this.props.parksArray.length > 0 ? (
            <Container>
              <Carousel variant='dark'>
                {carouselItems}
              </Carousel>
            </Container>
          ) : (
            <h3>No match found -- please try another selection</h3>
          )
        }

      </>


    );
  }
}

export default ParksList;

