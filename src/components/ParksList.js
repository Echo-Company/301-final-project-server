import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Carousel } from 'react-bootstrap';

class ParksList extends React.Component {

  render(){
 
    let carouselItems = this.props.parksArray.map((park, idx) => (
      
      <Carousel.Item key={idx}>
        <Carousel.Caption>
          <h3 style={{ backgroundColor: 'teal', borderRadius: '5px', width: 'max-content', margin: 'auto', padding: '5px' }}>When will you visit {park.parks}?</h3>
          <h3 style={{ backgroundColor: 'teal', borderRadius: '5px', width: 'max-content', margin: 'auto', padding: '5px' }}>{park.description}</h3>
          {/* <Button key="updateForm" onClick={() => this.setState({ showUpdateForm: true, activeBook: book })}>Update Book</Button>
          <Button key="deleteBook" onClick={() => this.handleDelete(book)}>Remove from database?</Button> */}
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={park.image}
          alt="Placeholder"
        />
      </Carousel.Item>
      ))
 
    return (

      <>
      <h2>Parks from your selection</h2>
      
      {
        this.props.parksArray.length > 0 ? (
        <Container>
          <Carousel>
            {carouselItems}
          </Carousel>
        </Container>
        ) : (
          <h3>No match found -- please try another selection</h3>
        )
      }
             
      </>
               
      // this.props.parksArray.length > 0 && 
        
      // <div>
      //    <h2>Parks from your selection</h2>
      //    <ListGroup as="ul" numbered style={{ width: "30rem" }}> 
      //       {
      //          this.props.parksArray.map((park, idx) =>
      //            <ListGroup.Item as="li" key={idx} >{park.parks} is a {park.parkCode}</ListGroup.Item>
      //          )
      //        }
      //    </ListGroup> 
      //  </div> 
     );
    }
 }
     
 export default ParksList;
   
