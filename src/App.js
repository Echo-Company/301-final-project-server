import React from 'react';
import Content from './components/Content';
import Login from './components/Login';
import Main from './Main';
import About from './components/About';
import Favorites from './components/Favorites';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ""
  }

  render() {
    return (
      <>
        <div className="position-absolute top-0 end-0">

        </div>
        <header style={{ textAlign: "center" }}>
          {this.props.auth0.isAuthenticated ?
            <>
              <Main>
                <Router>
                  <Header />
                  <Routes>
                    <Route exact path="/" element={<Content />}></Route>
                    <Route exact path="/favs" element={<Favorites />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                  </Routes>
                  <Footer />
                </Router>
                <Content />
              </Main>
            </>
            :
            <Login />
          }
        </header>
        <main>
        </main>
      </>
    );
  }
}

export default withAuth0(App);
