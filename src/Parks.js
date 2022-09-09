import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import ParksList from './components/ParksList.js';
import Favorites from './components/Favorites.js';
import fifty from './data/states.json';
import activities from './data/activities.json';
import './parks.css';
import homeLogo from './img/parkpalHome.png'


class Parks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkState: '',
      parkActivity: '',
      parks: [],
      favsParks: []
    }
  }

  handleState = (e) => {
    e.preventDefault();
    this.setState({
      parkState: e.target.value
    })
  };


  handleActivity = (e) => {
    e.preventDefault();
    this.setState({
      parkActivity: e.target.value
    })
  };

  getParkData = async (e) => {
    e.preventDefault();

    try {
      let parksUrl = `${process.env.REACT_APP_SERVER}/parks?state=${this.state.parkState}&activities=${this.state.parkActivity}`
      let parksResponse = await axios.get(parksUrl);

      this.setState({
        parks: parksResponse.data
      });

    } catch (err) {
      console.log(err);
    }
  }

  getFavs = async () => {
    try {
      let favsData = await axios.get(`${process.env.REACT_APP_SERVER}/favs`);

      this.setState({
        favsParks: favsData.data
      })

    } catch (error) {
      console.log('we have an error: ', error.response);
    }
  }

  handleFavsCreate = async (favsInfo) => {
    console.log('You are inside of handleFavsCreate')
    console.log('favsInfo', favsInfo);
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/favs`, favsInfo);
      const newFavs = response.data;
      this.setState({
        favsParks: [...this.state.favsParks, newFavs],
      });
    } catch (error) {
      console.log('error in favs post: ', error.response);
    }
  }

  favsHandleSubmit = (favsPark) => {
    console.log('favsPark', favsPark);
    this.handleFavsCreate({
      parks: favsPark.parks,
      description: favsPark.description,
      image: favsPark.image
    })

  }

  handleDelete = async (favsToDelete) => {
    try {

      const response = await axios.delete(`${process.env.REACT_APP_SERVER}/favs/${favsToDelete._id}`);
      console.log(response.status);
      const filteredFavs = this.state.favsParks.filter(favs => {
        return favs._id !== favsToDelete._id;
      })
      this.setState({
        favsParks: filteredFavs
      })

    } catch (error) {
      console.log(error);
    }
  }

  updateFavs = async (favsToUpdate) => {
    console.log('favsToUpdate', favsToUpdate);
    try {
      let url = `${process.env.REACT_APP_SERVER}/favs/${favsToUpdate._id}`
      let updatedFavs = await axios.put(url, favsToUpdate);
      console.log('url', url);

      let updatedFavsArray = this.state.favsParks.map(existingFavs => {
        return existingFavs._id === favsToUpdate._id
          ? updatedFavs.data
          : existingFavs
      });
      this.setState({ favsParks: updatedFavsArray });
    } catch (error) {
      console.log('error is favs post: ', error.response);
    }
  }

  handleUpdateSubmit = (event, favs) => {
    event.preventDefault();
    console.log('favs', favs);
    // console.dir(event.target.idv.value, 'you are in handleUpdateSubmit');
    let favsToUpdate = {
      parks: favs.parks,
      description: favs.description,
      image: favs.image,
      plannedVisit: event.target.plannedVisit.checked,
      _id: favs._id,
      __v: favs.__v
    }

    this.updateFavs(favsToUpdate);
  }

  componentDidMount() {
    this.getFavs();
  }

  render() {

    console.log(this.state);

    let mapFifty = fifty.map((item, idx) =>
      <option value={item.value} key={idx}>{item.state}</option>
    );

    let mapActivities = activities.map((item, idx) =>
      <option value={item.value} key={idx}>{item.activity}</option>
    );

    return (
      <>
        <div className="homepageBackground" style={{ position: 'relative', zIndex: '-99' }}></div>
        <div>
          <img src={homeLogo} alt='ParkPal Logo' style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}></img>
        </div>
        <Form onSubmit={this.getParkData} style={{ position: "absolute", paddingLeft: '1rem', paddingRight: '1rem', top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: 'rgba(41, 60, 80, 0.60)', border: 'solid black 2px', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', width: '30%' }}>
          <Form.Control as='select' onChange={this.handleState} style={{ marginBottom: '1rem', marginTop: '1rem', textAlign: 'center' }}>
            <option>Select State to Explore</option>
            {mapFifty}
          </Form.Control>
          <Form.Control as='select' onChange={this.handleActivity} style={{ marginBottom: '1rem', textAlign: 'center' }}>
            <option>Choose your Activity</option>
            {mapActivities}
          </Form.Control>
          <Button id="homeButton" variant="primary" type="submit">Explore!</Button>
        </Form>
        <div>
          <h3 style={{ color: 'white', position: "absolute", padding: '1rem', top: "72%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: 'rgba(41, 60, 80, 0.60)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', width: '30%' }}>Scroll to see parks that match your selection </h3>
        </div>
        <div class="page-scroll text-center" style={{ zIndex: '99', position: "absolute", top: "85%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <section href="#" class="to-top"></section>
        </div>
        <div>
          <ParksList
            parksArray={this.state.parks}
            currentPark={this.state.currentPark}
            favsHandleSubmit={this.favsHandleSubmit}
          />
          <Favorites
            favsArray={this.state.favsParks}
            handleDelete={this.handleDelete}
            handleUpdateSubmit={this.handleUpdateSubmit}
          />
        </div>
      </>
    )
  }
}

export default Parks;
