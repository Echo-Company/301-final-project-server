import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Parks from './Parks';
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
            <Route 
              exact path="/"
              element={<Parks />}
            >
            <Route 
              exact path="/SelectedParks"
              element={<ParksList />}
            >
            </Route>
          <Footer />
        </Router>
      </>
    )
  }
}

export default Main;

