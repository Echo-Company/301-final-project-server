import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Parks from './Parks';
import About from './components/About';
import Favorites from './components/Favorites';
// import ParksList from './components/ParksList'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Parks />}></Route>
            <Route exact path="/favs" element={<Favorites />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default Main;
