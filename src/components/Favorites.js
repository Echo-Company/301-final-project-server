import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Carousel, Button, Form } from 'react-bootstrap';

class Favorites extends React.Component {

  
   render(){
 
    let carouselItems = this.props.favsArray.map((favs, idx) => (
      
      <Carousel.Item key={idx}>
        <Carousel.Caption>
          < Form onSubmit = {(e) => this.props.handleUpdateSubmit(e, favs)} >
            <Form.Group className="mb-3" controlId="plannedVisit">
              <Form.Check type="checkbox" label="Will you visit this year?" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="idv">
              <Form.Control type="text" value={favs}  hidden readOnly />
            </Form.Group>
            <Button variant="primary" type="submit">Submit!</Button>
          </Form >
          <h3 style={{ backgroundColor: 'teal', borderRadius: '5px', width: 'max-content', margin: 'auto', padding: '5px' }}>When will you visit {favs.parks}?</h3>
          <h3 style={{ backgroundColor: 'teal', borderRadius: '5px', width: 'max-content', margin: 'auto', padding: '5px' }}>{favs.description}</h3>
          <Button key="deleteFavs" onClick={() => this.props.handleDelete(favs)}>Remove from favorites?</Button>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={favs.image}
          alt="Placeholder"
        />
      </Carousel.Item>
      ))
 
    return (

      <>
      <h2>Your Favorites!</h2>
      
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
               
      
     );
    }
 }
     
 export default Favorites;
   
